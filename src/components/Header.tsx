import Ventabackground from "@/components/ventabackground/Ventabackground";
import { items } from "@/content/headerItems/data";


type HeaderItem = {
  name: string;
  link: string;
};

const Header = () => {
  const headerItems: HeaderItem[] = Object.values(items);

  return (
    <div className="relative h-[6rem] flex items-center justify-between text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Ventabackground />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-between w-full px-2">
        <div className="h-fit w-[28rem] flex items-center justify-center">
          <img src="logo/vayupng.png" alt="logo" className="w-[7rem] h-fit mb-0" />
          <div className="text-shadow-fuchsia-50 text-[0.9rem]">
            Visionary Applications for Users & Upliftment
          </div>
        </div>
        <div className="flex items-center justify-between min-w-[30rem]">
          {headerItems.map((item, index) => (
            <a key={index} href={item.link}>
              <span className="ml-2">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
