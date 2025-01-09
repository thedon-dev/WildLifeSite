import React, { useEffect } from "react";

const DiscoverMorePage = () => {

    useEffect(()=> {
        window.scrollTo(0, 0)
    })
  return (
    <section className="px-[5%] lg:px-[10%] py-20 bg-gray-100">
      <div className="2xl:container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Discover More About the British Wildlife Reserve
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          The British Wildlife Reserve is a sanctuary for countless species of
          animals and plants, providing a safe haven and helping protect
          biodiversity. Located in the heart of the countryside, it spans
          thousands of acres, offering a unique ecosystem for endangered and
          native wildlife.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          The reserve is committed to promoting conservation and education.
          Visitors can explore its lush landscapes, observe wildlife in their
          natural habitats, and learn about the importance of preserving our
          planet’s ecosystems. Join the mission to conserve nature and ensure a
          thriving future for wildlife.
        </p>
        <div className="mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Deer_in_Richmond_Park%2C_London.jpg"
            alt="Wildlife Reserve"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverMorePage;
