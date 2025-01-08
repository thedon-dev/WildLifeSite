import React from "react";
import img from "../assets/22.jpeg";

const Section2 = () => {
  return (
    <section className="lg:mt-20 px-[5%] lg:px-[10%]">
      <div className="flex justify-between flex-col lg:flex-row-reverse 2xl:container mx-auto relative">
        <div
          className="w-full flex lg:w-1/2 h-[30rem]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-auto bg-white bg-opacity-50 p-5 lg:p-10 absolute lg:bottom-0 bottom-[40%]">
            <h4 className="text-xl font-bold">Traded Illegally</h4>
            <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, adipisci dolores. Fuga beatae distinctio ea quam libero error impedit! Libero id deserunt dolorum veniam assumenda? Commodi nobis ullam quibusdam atque.</p>
            <div className="flex gap-2 mt-7">
                <button className="px-3 py-1 bg-white">prev.</button>
                <button className="px-3 py-1 bg-white">next.</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 h-[20rem] lg:h-[30rem] px-5 lg:p-20 bg-gray-700 text-white">
          <div className="lg:mt-auto mt-20">
            <h3 className="font-semibold">01 - WildLife</h3>
            <h2 className="text-4xl fontbold">Elephant Wild Life</h2>
            <p className="">
              Herd of elephants are Starting to be soon again after migrating
            </p>
          </div>
          <div className="mt-20 flex justify-between items-center">
            <div className="">
              <a href="" className="px-10 py-3 bg-[#4343a9] text-white">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
