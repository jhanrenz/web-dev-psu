import { useState } from "react";

const GreenShopping = () => {
  const [showMore, setShowMore] = useState(false);
  const videoLink = "https://www.youtube.com/embed/EGuFl0HcrqM";

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
        {/* Section Label */}
        <span className="text-green-700 text-sm font-medium uppercase tracking-wide">
          Eco Tip
        </span>

        {/* Title & Description */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Green Shopping Habits 🛍️🌱
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Shopping sustainably helps protect the environment and supports a healthier planet.
          </p>
        </div>

        {/* Tips List (collapsible on small screens) */}
        <ul className="text-left space-y-3 text-gray-800 text-base leading-relaxed max-w-2xl mx-auto list-disc pl-5">
          <li><strong>Bring your own bags:</strong> Avoid plastic by using reusable totes.</li>
          <li><strong>Buy local:</strong> Support nearby farmers and reduce carbon emissions.</li>
          <li><strong>Choose eco-friendly products:</strong> Look for items with minimal packaging and sustainable materials.</li>

          {/* Collapsible items */}
          <div className={`${showMore ? "block" : "hidden"} lg:block`}>
            <li><strong>Shop secondhand:</strong> Give pre-loved items a new home instead of buying new.</li>
            <li><strong>Plan your purchases:</strong> Buy only what you need to reduce waste and impulse buying.</li>
          </div>
        </ul>

        {/* Toggle button for mobile */}
        <button
          className="lg:hidden mt-2 text-green-700 hover:underline text-sm font-medium"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less" : "See More"}
        </button>

        {/* Conclusion */}
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Conscious shopping choices add up. Be a mindful consumer and make every purchase count.
        </p>

        {/* Embedded YouTube Video */}
        <div className="w-full aspect-video max-w-3xl mx-auto">
          <iframe
            src={videoLink}
            className="w-full h-full rounded-md"
            title="Green Shopping Habits"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GreenShopping;
