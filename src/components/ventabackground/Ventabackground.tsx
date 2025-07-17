"use client"
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.net.min"; 


const VantaBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = WAVES({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color:0xd7bde2,
        shininess: 80,
        waveHeight: 20,
        waveSpeed: 1.0,
        zoom: 1.2,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vantaEffect]);


  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default VantaBackground;


