
const OurStory = () => {
  return (
    <section className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Who We Are 🌿
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals and communities to live sustainably through education, collaboration, and action—one step at a time.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A greener, cleaner world where sustainability is second nature and future generations thrive in harmony with the planet.
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Our Story</h3>
            <p className="text-gray-600">
              It all started with a simple idea: to make eco-conscious living accessible and inspiring. What began as a passion project has grown into a thriving community movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
