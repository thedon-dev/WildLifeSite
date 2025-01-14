import React from "react";
import { BiHome, BiInfoCircle } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { GiLion } from "react-icons/gi";
import { FaChildren } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="px-[5%] lg:px-[10%] py-10">
      <div className="flex justify-between 2xl:container mx-auto items-center">
        <Link to="/" className="text-3xl whitespace-nowrap">
          Jacob <span className="text-[#4343a9]">WildLife</span>
        </Link>
        <div className="border-t-4 border-black md:border-0 flex justify-around md:justify-end py-3 lg:py-0 gap-5 fixed bottom-0 md:relative ms-auto z-10 bg-white left-0 w-full">
          <div className="flex gap-3 w-full items-center justify-around md:justify-end">
            <Link
              to="/"
              className={`py-2 px-4 ${
                isActiveLink("/") ? "text-blue-500" : "text-black"
              }`}
            >
              <p className="hidden md:flex">Home</p>
              <BiHome size={30} className="md:hidden" />
            </Link>
            <Link
              to="/kids"
              className={`py-2 px-4 ${
                isActiveLink("/hotline") ? "text-blue-500" : "text-black"
              }`}
            >
              <p className="hidden md:flex">Kids</p>
              <FaChildren  size={30} className="md:hidden" />
            </Link>
            <Link
              to="/animals"
              className={`py-2 px-4 ${
                isActiveLink("/articles") ? "text-blue-500" : "text-black"
              }`}
            >
              <p className="hidden md:flex">Animals</p>
              <GiLion  size={30} className="md:hidden" />
            </Link>
            <Link
              to="/about"
              className={`py-2 px-4 ${
                isActiveLink("/about") ? "text-blue-500" : "text-black"
              }`}
            >
              <p className="hidden md:flex">About</p>
              <BiInfoCircle size={30} className="md:hidden" />
            </Link>
          </div>
          <Link
            to="/discovermore"
            className={`flex items-center md:bg-black md:text-white py-2 md:py-4 px-4 md:px-5 whitespace-nowrap ${
              isActiveLink("/discovermore") ? "text-blue-500" : "text-black"
            }`}
          >
            <p className="hidden md:block">Discover More</p>
            <CgWebsite size={30} className="md:hidden" />
          </Link>
        </div>
        <Link
          to="/login"
          className={`flex items-center py-2 px-4 whitespace-nowrap ${
            isActiveLink("/login") ? "text-blue-500" : "text-black"
          }`}
        >
          <p className="bg-blue-500 lg:bg-transparent px-4 text-white lg:text-black py-2">Login</p>
          {/* <CgWebsite size={30} className="md:hidden" /> */}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
