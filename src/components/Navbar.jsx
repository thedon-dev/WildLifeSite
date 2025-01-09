import React from "react";
import { BiHome, BiInfoCircle } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { PiPhone } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-[5%] lg:px-[10%] py-10">
      <div className="flex justify-between 2xl:container mx-auto">
        <Link to="/" className="text-3xl text-nowrap">
          Jacob <span className="text-[#4343a9]">WildLife</span>
        </Link>
        <div className="border-t-4 border-black md:border-0 flex justify-around md:justify-end py-3 lg:py-0 gap-5 fixed bottom-0 md:relative ms-auto z-10 bg-white left-0 w-full">
          <div className="flex gap-3 w-full items-center justify-around md:justify-end">
            <Link href="/" className="py-2 px-4">
              Home <BiHome size={30} className="md:hidden"/>
            </Link>
            <a href="#hotline" className="py-2 px-4">
              Hotline <PiPhone size={30} className="md:hidden"/>
            </a>
            <a href="#article" className="py-2 px-4">
              Article <BsNewspaper size={30} className="md:hidden"/>
            </a>
            <a href="#about" className="py-2 px-4">
              About <BiInfoCircle size={30} className="md:hidden"/>
            </a>
          </div>

          <Link to="/discovermore" className="flex items-center md:bg-black md:text-white py-2 md:py-4 px-4 md:px-5 text-nowrap">
            Discover More <CgWebsite size={30} className="md:hidden"/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
