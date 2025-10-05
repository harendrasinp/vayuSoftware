import Image from "next/image";
import { AboutData } from "@/content/aboutUs/aboutData";

const AboutUs = () => {
    return (
        <section id="about" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image covers the section fully and responsively */}
            <Image
                src="/about/bg4.png"
                alt="About Background"
                fill
                className="object-cover z-0"
                priority
            />
            {/* Content stays inside the section, above the background */}
            <div className="relative flex flex-col items-center justify-center text-center text-white w-full h-full px-4 sm:px-6 md:px-12 py-16">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-50 mb-6">
                    {AboutData.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                    {AboutData.description}
                </p>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-left w-full max-w-6xl mx-auto">
                    {AboutData.services.map((service, index) => (
                        <div key={index} className="bg-white w-full max-w-xs shadow-lg p-6 md:p-10 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto">
                            <h3 className="text-xl font-semibold text-black mb-2 b">
                                {service.icon} {service.title}
                            </h3>
                            <p className="text-black">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
