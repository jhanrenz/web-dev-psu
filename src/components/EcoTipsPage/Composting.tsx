import { useState } from "react";

const Composting = () => {
  const [showMore, setShowMore] = useState(false);
  const videoLink = "https://www.youtube.com/embed/oFlsjRXbnSk";

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
        {/* Label */}
        <span className="text-green-700 text-sm font-medium uppercase tracking-wide">
          Eco Tip
        </span>

        {/* Header & Introduction */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Composting for a Greener Planet 🌿🌎
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Composting is a simple way to recycle organic waste, enrich soil, and reduce landfill waste.
          </p>
        </div>

        {/* Tips List */}
        <ul className="text-left space-y-3 text-gray-800 text-base leading-relaxed max-w-2xl mx-auto list-disc pl-5">
          <li><strong>Use food scraps:</strong> Compost fruit and vegetable peels, coffee grounds, and eggshells.</li>
          <li><strong>Add yard waste:</strong> Include leaves, grass clippings, and small branches.</li>
          <li><strong>Avoid composting:</strong> Meat, dairy, and oily foods attract pests and slow down the process.</li>

          {/* Collapsible Tips */}
          <div className={`${showMore ? "block" : "hidden"} lg:block`}>
            <li><strong>Balance greens and browns:</strong> Mix nitrogen-rich materials (greens) with carbon-rich ones (browns) like paper and dry leaves.</li>
            <li><strong>Turn regularly:</strong> Aerate your compost to speed up decomposition and prevent odor.</li>
          </div>
        </ul>

        {/* Toggle Button */}
        <button
          className="lg:hidden mt-2 text-green-700 hover:underline text-sm font-medium"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less" : "See More"}
        </button>

        {/* Final Note */}
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Composting turns waste into valuable soil. It’s easy, natural, and great for your garden and the planet.
        </p>

        {/* Embedded YouTube Video */}
        <div className="w-full aspect-video max-w-3xl mx-auto rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src={videoLink}
            title="Composting Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Composting;
