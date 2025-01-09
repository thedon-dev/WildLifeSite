import React from "react";
import img from "../assets/22.jpeg";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <section id="hotline" className="px-[5%] lg:px-[10%]">
      <div className="flex flex-col lg:flex-row 2xl:container mx-auto relative">
        <div
          className="w-full flex lg:w-1/2 h-[30rem]"
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-auto bg-white bg-opacity-50 lg:w-1/2 p-5 lg:p-10 absolute lg:bottom-0 bottom-[39.5%]">
            <h4 className="text-xl font-bold">Traded Illegally</h4>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              adipisci dolores. Fuga beatae distinctio ea quam libero error
              impedit! Libero id deserunt dolorum veniam assumenda? Commodi
              nobis ullam quibusdam atque.
            </p>
            <div className="flex gap-2 mt-7">
              <button className="px-3 py-1 bg-white">prev.</button>
              <button className="px-3 py-1 bg-white">next.</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 h-fit lg:h-[30rem] lg:p-20 px-5 bg-gray-700 text-white">
          <div className="lg:mt-auto mt-10">
            <h3 className="font-semibold">03 - WildLife Trade Hotline</h3>
            <h2 className="text-4xl fontbold mt-2">
              Contact us if you find a wildlife trade
            </h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              voluptatum odio facere atque in praesentium! Rerum, reiciendis?
              Maiores, magni soluta?
            </p>
          </div>
          <div className="mt-10 mb-5 flex justify-between items-center">
            <Link to='/hotline' className="px-10 py-3 bg-[#4343a9] text-white">
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
