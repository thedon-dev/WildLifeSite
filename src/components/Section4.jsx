import React from "react";
import img from "../assets/22.jpeg";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <section id="article" className="bg-gray-100 py-20 px-[5%] lg:px-[10%]">
      <div className="2xl:container mx-auto">
        <div>
          <span className="font-semibold text-lg">4 - Article And News</span>
          <div className="flex flex-col md:flex-row gap-10 mt-5">
            <h1 className="text-5xl md:text-7xl font-bold md:w-1/2">
              We provide all information about wild life
            </h1>
            <div className="md:w-1/2 mt-auto">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem placeat aliquid harum quas eos nulla delectus
                possimus! Dolorum, laudantium recusandae.
              </p>
              <div className="mt-10">
                <Link to="/articles" className="px-5 py-3 bg-[#4343a9] text-white">
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-auto mt-10 gap-3 h-auto">
          {/* Article 1 */}
          <div className="text-white col-span-1 row-span-1 px-3 py-5 bg-gray-600">
            <h2 className="text-xl sm:text-2xl">Name Of Article</h2>
            <div className="mt-5">
              <a
                href=""
                className="text-sm px-5 py-2 bg-transparent text-white border border-white rounded"
              >
                See More
              </a>
            </div>
          </div>

          {/* Article 2 - Larger item */}
          <div
            className="col-span-1 sm:col-span-2 md:col-span-1 row-span-2  flex"
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-white bg-gray-700 w-full mt-auto px-5 py-5">
              <h2 className="text-xl sm:text-2xl">Name Of Article</h2>
              <div className="mt-5">
                <a
                  href=""
                  className="text-sm px-5 py-2 bg-transparent border border-white rounded"
                >
                  See More
                </a>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="col-span-1 row-span-1  px-3 py-5 bg-gray-500">
            <h2 className="text-xl sm:text-2xl">Name Of Article</h2>
            <div className="mt-5">
              <a
                href=""
                className="text-sm px-5 py-2 bg-transparent border border-white rounded"
              >
                See More
              </a>
            </div>
          </div>

          {/* Article 4 */}
          <div className="col-span-1 row-span-1 px-3 py-5 bg-gray-500">
            <h2 className="text-xl sm:text-2xl">Name Of Article</h2>
            <div className="mt-5">
              <a
                href=""
                className="text-sm px-5 py-2 bg-transparent border border-white rounded"
              >
                See More
              </a>
            </div>
          </div>

          {/* Article 5 */}
          <div className="col-span-1 row-span-1 px-3 py-5 bg-gray-500">
            <h2 className="text-xl sm:text-2xl">Name Of Article</h2>
            <div className="mt-5">
              <a
                href=""
                className="text-sm px-5 py-2 bg-transparent border border-white rounded"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
