import React, { useState, useEffect } from "react";
import axios from "axios";

const Section2 = () => {
  const [slides, setSlides] = useState([]);
  const [presentSlide, setPresentSlide] = useState(0);

  useEffect(() => {
    axios
      .get("/wildlifetrade.json")
      .then((response) => {
        setSlides(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleNext = () => {
    setPresentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setPresentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) {
    return <p>Loading...</p>;
  }

  const currentSlide = slides[presentSlide];

  return (
    <section id="wildlifetrade" className="lg:mt-20 lg:px-[10%]">
      <div className="flex justify-between flex-col lg:flex-row-reverse 2xl:container mx-auto relative">
        <div
          className="w-full flex lg:w-1/2 h-[30rem] bg-slate-300"
          style={{
            backgroundImage: `url(${currentSlide.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mt-auto bg-white bg-opacity-50 p-5 lg:p-10 absolute lg:bottom-0 bottom-[40%]">
            <h4 className="text-xl font-bold">{currentSlide.subtitle}</h4>
            <p className="text-sm mt-5">{currentSlide.description}</p>
            <div className="flex gap-2 mt-7">
              <button
                className="px-3 py-1 bg-white"
                onClick={handlePrev}
              >
                prev.
              </button>
              <button
                className="px-3 py-1 bg-white"
                onClick={handleNext}
              >
                next.
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 h-[20rem] lg:h-[30rem] px-5 lg:p-20 bg-gray-700 text-white">
          <div className="lg:mt-auto mt-20">
            <h3 className="font-semibold">02- WildLife Trade</h3>
            <h2 className="text-4xl font-bold">{currentSlide.title}</h2>
            <p>{currentSlide.description}</p>
          </div>
          <div className="mt-20 flex justify-between items-center">
            <div className="">
              <a href="#" className="px-10 py-3 bg-[#4343a9] text-white">
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
