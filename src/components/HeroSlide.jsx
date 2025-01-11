import React, { useState, useEffect } from "react";
import axios from "axios";

const HeroSlide = () => {
  const [videos, setVideos] = useState([]);
  const [presentSlide, setPresentSlide] = useState(0);

  useEffect(() => {
    axios
      .get("/wildlifevideos.json")
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  const handlePrev = () => {
    setPresentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPresentSlide((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  if (videos.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading videos...</p>
      </div>
    );
  }

  const currentVideo = videos[presentSlide];

  return (
    <section
      id="wildlifeimages"
      className="md:pr-[5%] lg:pr-[10%] mt-28 lg:h-[30rem]"
    >
      <div className="flex flex-col lg:flex-row justify-between 2xl:container mx-auto">
        <div className="w-full lg:w-1/2 h-[30rem]">
          <div
            style={{
              backgroundImage: `url(${currentVideo.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-full"
          />
        </div>
        <div className="p-8 w-full md:p-10 lg:w-1/2 md:h-[30rem] flex flex-col mt-auto bg-gray-700 text-white">
          <div className="md:mt-auto">
            <h3 className="font-semibold">
                1 - Wildlife Images
            </h3>
            <h2 className="text-4xl font-bold">{currentVideo.heading}</h2>
            <p>{currentVideo.description}</p>
          </div>
          <div className="mt-20 flex justify-between items-center">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="px-4 py-1 border border-gray-300 text-white hover:bg-gray-600"
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-1 border border-gray-300 text-white hover:bg-gray-600"
              >
                Next
              </button>
            </div>
            <p className="text-xs">
              <span className="text-base">{presentSlide + 1}</span>/
              {videos.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlide;
