import { useState } from "react";

const ReduceWaste = () => {
  const [showMore, setShowMore] = useState(false);
  const videoLink = "https://www.youtube.com/embed/OasbYWF4_S8";

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-6">
          Eco Tip
        </span>
        <h3 className="text-3xl md:text-5xl font-semibold mb-6">
          Reduce. Reuse. Recycle. ♻️
        </h3>

        <div className="text-left text-gray-700 text-lg space-y-4">
          <p>
            These three simple actions help conserve resources, cut pollution, and protect the environment.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Reduce:</strong> Choose only what you need. Avoid excess packaging and single-use items.
            </li>
            <li>
              <strong>Reuse:</strong> Give items a second life. Repair, donate, or repurpose what you already have.
            </li>
            <li>
              <strong>Recycle:</strong> Sort waste properly. Learn local recycling rules and dispose responsibly.
            </li>
          </ul>

          {/* Collapsible part */}
          <div className={`${showMore ? "block" : "hidden"} lg:block`}>
            <p>
              Every choice matters. Be mindful, and take part in building a sustainable future.
            </p>
          </div>

          {/* Toggle button for mobile */}
          <button
            className="lg:hidden mt-2 text-green-700 hover:underline text-sm font-medium"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>

        {/* Embedded YouTube Video */}
        <div className="mt-10 w-full max-w-3xl mx-auto aspect-video">
          <iframe
            src={videoLink}
            className="w-full h-full rounded-md"
            title="Reduce Reuse Recycle"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ReduceWaste;
