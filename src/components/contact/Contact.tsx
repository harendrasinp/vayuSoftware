import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter,FaUser} from "react-icons/fa6";
import { contactData } from "@/content/contact/data";
const Contact = () => {
    return (
        <section className="w-full bg-[url('/contact/background.jpg')] bg-cover bg-center bg-no-repeat py-16 px-6 md:px-20 min-h-[25rem]" id="contact">
            <div className="max-w-4xl mx-auto text-white">
                <div className="mb-10">
                    <h2 className="text-4xl font-bold  text-center text-white">
                        {contactData.title}
                    </h2>
                    <p className="max-w-4xl mx-auto text-white text-center">{contactData.description}</p>
                </div>
                <div className="space-y-6 text-lg">
                    <div className="flex items-center gap-4">
                        <FaPhone className="text-indigo-400" />
                        <span>{contactData.phone}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaUser className="text-indigo-400" />
                        <span>{contactData.contactName}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-indigo-400" />
                        <span>{contactData.email}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-indigo-400" />
                        <span>{contactData.address}</span>
                    </div>
                </div>

                <hr className="my-10 border-gray-600" />

                <div className="flex justify-center gap-6 text-indigo-400 text-2xl">
                    <a
                        href="https://facebook.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://instagram.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://twitter.com/yourpage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
