import { AboutData } from "@/content/aboutUs/aboutData";

const AboutUs = () => {
    return (
        <div>
            <section id="about" className="bg-[url('/about/backgroundImg2.jpg')] bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-50 mb-6">
                        {AboutData.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                        {AboutData.description}
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {AboutData.services.map((service, index) => (
                            <div key={index} className="bg-white shadow-lg p-6 rounded-xl hover:scale-110 transition-transform duration-600 cursor-pointer">
                                <h3 className="text-xl font-semibold text-aboutBackgorud mb-2">{service.icon}{service.title}</h3>
                                <p className="text-aboutBackgorud">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;
