import { heroData } from "@/content/hero/data"
import Vayubutton from "../button/button"

const HeroComponent = () => {
  return (
    <div className="flex flex-col items-center bg-backgroundColor px-2 py-6 md:py-10">
      <div className="text-bluegray text-center text-[1.5rem] md:text-[2rem] font-semibold">{heroData.title}</div>
      <p className="text-chocolate text-[1rem] md:text-[1.1rem] font-bold text-center">{heroData.subtitle}</p>
      <p className="text-chocolate text-[1rem] md:text-[1.1rem] font-bold text-center">{heroData.description}</p>
      <div className="flex flex-col md:flex-row justify-center items-center p-2 md:gap-10 gap-6 w-full">
        <img
          className="w-[30rem] md:max-w-[45rem] md:max-h-[20rem] rounded-md shadow-lg shadow-black/40 object-cover"
          src={heroData.image}
          alt="lady-hero-image"
        />
        <div className="w-full md:max-w-[25rem] flex flex-col gap-2 mt-4 md:mt-0">
          <p className="text-justify">{heroData.message1}</p>
          <p className="text-justify">{heroData.message3}</p>
          <p className="text-justify">
            <strong>{heroData.companyName} </strong>{heroData.message2}</p>
          <Vayubutton />
        </div>
      </div>
    </div>
  )
}

export default HeroComponent