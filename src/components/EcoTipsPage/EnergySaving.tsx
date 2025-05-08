import { useState } from "react";

const EnergySaving: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
        {/* Label */}
        <span className="text-green-700 text-sm font-medium uppercase tracking-wide">
          Eco Tip
        </span>

        {/* Header & Intro */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Save Energy, Save the Earth ⚡🌍
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Reducing energy consumption lowers carbon emissions and helps preserve natural resources.
          </p>
        </div>

        {/* Tips List */}
        <ul className="text-left space-y-3 text-gray-800 text-base leading-relaxed max-w-2xl mx-auto list-disc pl-5">
          <li><strong>Switch to LEDs:</strong> Use energy-efficient light bulbs to cut power use.</li>
          <li><strong>Unplug devices:</strong> Avoid phantom energy by unplugging unused electronics.</li>
          <li><strong>Use natural light:</strong> Maximize daylight to reduce indoor lighting needs.</li>

          {/* Collapsible section */}
          <div className={`${showMore ? "block" : "hidden"} lg:block`}>
            <li><strong>Upgrade appliances:</strong> Choose ENERGY STAR-rated appliances for efficiency.</li>
            <li><strong>Set thermostats smartly:</strong> Adjust heating and cooling for comfort and savings.</li>
          </div>
        </ul>

        {/* See More / See Less button on mobile */}
        <button
          className="lg:hidden mt-2 text-green-700 hover:underline text-sm font-medium"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "See Less" : "See More"}
        </button>

        {/* Closing Note */}
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Every small energy-saving habit counts. Start today for a brighter, greener future.
        </p>

        {/* Embedded YouTube Video */}
        <div className="w-full aspect-video max-w-3xl mx-auto rounded-md overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4b8x4rKiAhE"
            title="Eco Tip - Save Energy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EnergySaving;
