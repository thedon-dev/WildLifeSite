import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Section3 = () => {
  const [saves, setSaves] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    axios
      .get("/wildlifesaves.json")
      .then((response) => setSaves(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % saves.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + saves.length) % saves.length);
  };

  if (saves.length === 0) {
    return <p>Loading...</p>;
  }

  const currentSave = saves[currentSlide];

  return (
    <section id="hotline" className="lg:px-[10%]">
      <div className="flex flex-col lg:flex-row 2xl:container mx-auto relative">
        <div
          className="w-full flex lg:w-1/2 h-[30rem]"
          style={{
            backgroundImage: `url(${currentSave.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-auto bg-white bg-opacity-50 lg:w-1/2 p-5 lg:p-10 absolute lg:bottom-0 bottom-[39.5%]">
            <h4 className="text-xl font-bold">{currentSave.headline}</h4>
            <p className="text-sm mt-5">{currentSave.description}</p>
            <div className="flex gap-2 mt-7">
              <button className="px-3 py-1 bg-white" onClick={handlePrev}>
                prev.
              </button>
              <button className="px-3 py-1 bg-white" onClick={handleNext}>
                next.
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 h-fit lg:h-[30rem] lg:p-20 px-5 bg-gray-700 text-white">
          <div className="lg:mt-auto mt-10">
            <h3 className="font-semibold">{currentSave.title}</h3>
            <h2 className="text-4xl font-bold mt-2">{currentSave.headline}</h2>
            <p>{currentSave.description}</p>
          </div>
          <div className="mt-10 mb-5 flex justify-between items-center">
            {/* <Link to="/hotline" className="px-10 py-3 bg-[#4343a9] text-white">
              See More
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
