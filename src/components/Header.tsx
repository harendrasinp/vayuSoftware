'use client';
import Ventabackground from "@/components/ventabackground/Ventabackground";
import { items } from "@/content/headerItems/data";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

type HeaderItem = {
  name: string;
  link: string;
};

const Header = () => {
  const headerItems: HeaderItem[] = Object.values(items);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-[6rem] flex items-center justify-between text-white overflow-hidden px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Ventabackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Logo & Tagline */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo/vayupng.png"
            alt="logo"
            className="w-[5rem] sm:w-[6rem] h-fit"
          />
          <div className="text-[0.7rem] sm:text-sm text-shadow-fuchsia-50">
            Visionary Applications for Users & Upliftment
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="w-[25rem] hidden md:mr-10 md:flex md:justify-between text-[1.2rem] ">
          {headerItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <span className="hover:text-fuchsia-300 transition">{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
     {/* Mobile Slide Menu (Right Sidebar) */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-black/80 bg-opacity-90 z-30 transform transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } md:hidden`}
>
  {/* Close Button */}
  <div className="flex justify-end p-4">
    <FiX
      className="text-2xl text-white cursor-pointer"
      onClick={() => setIsOpen(false)}
    />
  </div>

  {/* Menu Items */}
  <div className="flex flex-col items-center space-y-6 mt-8">
    {headerItems.map((item, index) => (
      <Link
        key={index}
        href={item.link}
        onClick={() => setIsOpen(false)}
      >
        <span className="text-white text-lg font-medium hover:text-fuchsia-400 transition">
          {item.name}
        </span>
      </Link>
    ))}
  </div>
</div>

    </div>
  );
};

export default Header;
