import React from "react";
import HeroSlide from "../components/HeroSlide";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="py-16 md:py-24 px-[5%] lg:px-[10%]">
        <div className="flex flex-col gap-3 relative 2xl:container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold">WildLife Reserve</h1>
          <h4 className="text-3xl md:text-4xl font-semibold">
            {" "}
            <span className="text-[#4343a9]">Keep Saving</span> All Animals
          </h4>
          <p className="text-sm md:text-lg w-1/2">
            protect animals from poaching, protect the future of animal
            diversity as living things on earth.
          </p>
          <div className="absolute right-0 md:right-36 top-full md:top-1/2">
            <div className="flex flex-col gap-4 p-8 bg-[#4343a9] text-white">
              <h5 className="font-bold text-gray-400">Slection List</h5>
              <div className="flex flex-col divide-y-2 text-sm md:text-lg">
                <a href="" className="py-3">
                  WildLife Video
                </a>
                <a href="" className="py-3">
                  WildLife Trade
                </a>
                <a href="" className="py-3">
                  Hotline
                </a>
                <a href="" className="py-3">
                  Articles and News
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroSlide />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Home;
