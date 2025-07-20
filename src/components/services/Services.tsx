import { services } from "@/content/services/data";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 md:px-16 from-amber-50 to-white
    bg-[url('/services/backgroundImg2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-buttonColor mb-4">Our Services</h2>
        <p className="text-lg text-blue-950 mb-10 max-w-2xl mx-auto">
          At <span className="font-bold text-blue-950">VayuSoftware</span>, we are passionate about delivering quality digital solutions that help businesses grow online. Here's what we offer:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-bluegray rounded-2xl p-6 shadow-md hover:shadow-lg transition-transform hover:-translate-y-2 duration-300
              cursor-pointer shadow-blue-950">
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