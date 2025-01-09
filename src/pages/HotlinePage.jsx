import React from "react";

const HotlinePage = () => {
  return (
    <section className="bg-gray-100 pt-10 pb-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Wildlife Hotline</h1>
          <p className="text-gray-600 mt-3">
            Contact us immediately for wildlife emergencies or inquiries.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Emergency Contact Numbers</h2>
          <ul className="text-gray-600 text-lg">
            <li className="mb-3">
              <span className="font-semibold">Wildlife Rescue:</span>{" "}
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +1 234 567 890
              </a>
            </li>
            <li className="mb-3">
              <span className="font-semibold">Park Security:</span>{" "}
              <a href="tel:+0987654321" className="text-blue-600 hover:underline">
                +0 987 654 321
              </a>
            </li>
            <li>
              <span className="font-semibold">Animal Control:</span>{" "}
              <a href="tel:+1123456789" className="text-blue-600 hover:underline">
                +1 123 456 789
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Non-Urgent Inquiry Form</h2>
          <form>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                className="w-full resize-none px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul className="text-lg">
            <li className="mb-3">
              <a href="/articles" className="text-blue-400 hover:underline">
                Wildlife Articles
              </a>
            </li>
            <li className="mb-3">
              <a href="/events" className="text-blue-400 hover:underline">
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="/donate" className="text-blue-400 hover:underline">
                Support Conservation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HotlinePage;
