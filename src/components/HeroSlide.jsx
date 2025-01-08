import React, { useState } from "react";
import img from "../assets/22.jpeg";

const HeroSlide = () => {
  const [presentSlide, setPresentSlide] = useState(0);
  return (
    <section className="md:pr-[5%] lg:pr-[10%] mt-28 lg:h-[30rem]">
      <div className="flex flex-col lg:flex-row justify-between 2xl:container mx-auto">
        <div
          className="w-full lg:w-1/2 h-[30rem]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <img src={img} alt="" className="object-cover"/> */}
        </div>
        <div className="p-8 w-full md:p-10 lg:w-1/2 md:h-[30rem] flex flex-col mt-auto bg-gray-700 text-white">
          <div className="md:mt-auto">
            <h3 className="font-semibold">01 - WildLife Video</h3>
            <h2 className="text-4xl fontbold">Elephant Wild Life</h2>
            <p className="">
              Herd of elephants are Starting to be soon again after migrating
            </p>
          </div>
          <div className="mt-20 flex justify-between items-center">
            <div className="flex gap-4">
              <button className="px-4 py-1 border">prev</button>
              <button className="px-4 py-1 border">next</button>
            </div>
            <p className="text-xs">
              <span className="text-base">1</span>/20
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;
