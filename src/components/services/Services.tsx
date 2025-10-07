import { services } from "@/content/services/data";
import Image from "next/image";
export default function Services() {
  return (
    <section id="services" className="scroll-mt-11 relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image covers the section fully and responsively */}
      <Image src="/services/backgroundImg2.jpg" alt="service bg" fill className="object-cover z-0" priority />
      {/* Content stays inside the section, above the background */}
      <div className="relative  flex flex-col items-center justify-center w-full h-full max-w-6xl text-center px-4 sm:px-8 md:px-16 py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-buttonColor mb-4">Our Services</h2>
        <p className="text-base sm:text-lg text-blue-950 mb-10 max-w-2xl mx-auto">
          At <span className="font-bold text-blue-950">VayuSoftware</span>, we are passionate about delivering quality digital solutions that help businesses grow online. Here's what we offer:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-bluegray rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-2 duration-300 cursor-pointer shadow-blue-950 w-full max-w-xs mx-auto">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-950 mb-2">{service.title}</h3>
              <p className="text-sky-950">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}