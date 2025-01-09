import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">About Jacob Wildlife Reserve</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Preserving the beauty and diversity of British wildlife for future generations.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Jacob Wildlife Reserve is a haven for Britain’s incredible wildlife. Located in the heart of the British countryside, our reserve spans thousands of acres of lush landscapes, including forests, wetlands, and meadows. We are dedicated to protecting endangered species, supporting ecological research, and providing educational experiences for visitors of all ages.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            At Jacob Wildlife Reserve, we believe that every species plays a vital role in maintaining the delicate balance of our ecosystem. Through conservation efforts and community outreach, we aim to inspire people to protect and appreciate the natural world around them.
          </p>
        </div>

        <div className="bg-gray-200 shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Do</h2>
          <ul className="list-disc ml-5 text-gray-700 text-lg leading-relaxed">
            <li className="mb-3">
              <span className="font-semibold">Wildlife Conservation:</span> We protect endangered species and their habitats through dedicated conservation programs.
            </li>
            <li className="mb-3">
              <span className="font-semibold">Research & Monitoring:</span> Our team works closely with researchers to study wildlife behavior, migration patterns, and environmental changes.
            </li>
            <li className="mb-3">
              <span className="font-semibold">Education & Awareness:</span> We offer guided tours, workshops, and interactive sessions to teach visitors about the importance of wildlife preservation.
            </li>
            <li>
              <span className="font-semibold">Sustainable Practices:</span> The reserve implements eco-friendly practices to ensure minimal impact on the environment.
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">How You Can Help</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Protecting wildlife is a collective effort, and there are many ways you can support Jacob Wildlife Reserve:
          </p>
          <ul className="list-disc ml-5 text-gray-700 text-lg leading-relaxed mt-4">
            <li className="mb-3">
              <span className="font-semibold">Donate:</span> Your contributions directly fund conservation programs, research projects, and educational initiatives.
            </li>
            <li className="mb-3">
              <span className="font-semibold">Volunteer:</span> Join our team to help with habitat restoration, animal care, and visitor programs.
            </li>
            <li className="mb-3">
              <span className="font-semibold">Adopt an Animal:</span> Symbolically adopt an animal to help protect their species and receive updates about their progress.
            </li>
            <li>
              <span className="font-semibold">Spread the Word:</span> Share our mission with friends and family to raise awareness about wildlife conservation.
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 text-white rounded-lg p-8 text-center mt-10">
          <h2 className="text-3xl font-bold mb-4">Join Us in Protecting Wildlife</h2>
          <p className="text-lg mb-6">
            Together, we can create a brighter future for British wildlife and preserve our planet’s natural beauty for generations to come.
          </p>
          <a
            href="/donate"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg"
          >
            Support Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
