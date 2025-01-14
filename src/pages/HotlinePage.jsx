import React, { useEffect } from "react";

const KidsWildlifeSafetyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className="bg-light-blue pt-10 pb-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-dark-green">Wildlife Safety Tips for Kids</h1>
          <p className="text-dark-green mt-3">
            Learn how to stay safe and protect animals when you're out exploring!
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-dark-green mb-4">Top Wildlife Safety Tips</h2>
          <ul className="text-dark-blue text-lg space-y-3">
            <li>
              <span className="font-semibold">Always Stay a Safe Distance:</span> Never get too close to wild animals. Stay at least 10 feet away to avoid startling or harming them.
            </li>
            <li>
              <span className="font-semibold">Don't Touch Wild Animals:</span> Animals in the wild are not pets. Never touch or try to pet a wild animal, even if they look friendly.
            </li>
            <li>
              <span className="font-semibold">Respect Their Homes:</span> Don't disturb animal nests or homes. If you find a nest or den, keep a safe distance and let animals live peacefully.
            </li>
            <li>
              <span className="font-semibold">Ask an Adult for Help:</span> If you see an injured animal, don’t approach it. Tell an adult right away, or contact local wildlife rescue.
            </li>
            <li>
              <span className="font-semibold">Avoid Feeding Wildlife:</span> Feeding wild animals can make them sick or teach them to rely on humans for food.
            </li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-dark-green mb-4">What to Do in an Emergency</h2>
          <ul className="text-dark-blue text-lg space-y-3">
            <li>
              <span className="font-semibold">If You See an Injured Animal:</span> Stay calm and keep a safe distance. Call a wildlife rescue hotline or tell an adult.
            </li>
            <li>
              <span className="font-semibold">If a Wild Animal Approaches You:</span> Stay calm, make yourself appear bigger, and back away slowly. Don’t run or scream!
            </li>
            <li>
              <span className="font-semibold">If You Find a Baby Animal:</span> Leave it where it is, and watch from a safe distance. Parents are often nearby, even if you can’t see them.
            </li>
          </ul>
        </div>
        <div className="bg-light-green text-dark-blue shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Need Help? Contact Us!</h2>
          <p className="text-lg mb-6">
            If you need help with a wildlife emergency, don't hesitate to reach out to us. Here’s how:
          </p>
          <ul className="text-lg">
            <li className="mb-3">
              <span className="font-semibold">Wildlife Rescue:</span>{" "}
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                Call 1-234-567-890 for animal emergencies!
              </a>
            </li>
            <li className="mb-3">
              <span className="font-semibold">Park Rangers:</span>{" "}
              <a href="tel:+0987654321" className="text-blue-600 hover:underline">
                Call 0-987-654-321 if you need help in the park!
              </a>
            </li>
            <li>
              <span className="font-semibold">Animal Control:</span>{" "}
              <a href="tel:+1123456789" className="text-blue-600 hover:underline">
                Call 1-123-456-789 for animal issues!
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-light-blue text-dark-green shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Additional Wildlife Resources</h2>
          <ul className="text-lg">
            <li className="mb-3">
              <a href="/articles" className="text-blue-400 hover:underline">
                Fun Animal Facts
              </a>
            </li>
            <li className="mb-3">
              <a href="/events" className="text-blue-400 hover:underline">
                Upcoming Wildlife Adventures
              </a>
            </li>
            <li>
              <a href="/donate" className="text-blue-400 hover:underline">
                Help Protect Wildlife
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KidsWildlifeSafetyPage;
