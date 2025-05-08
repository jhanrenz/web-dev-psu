const Sustainability = () => {
    return (
      <section className="relative py-20 px-4 sm:px-8 lg:px-12 overflow-hidden">
        {/* Background Image with dark overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{ backgroundImage: "url('/ecotip_background.jpg')" }}
        ></div>
  
        {/* Overlay content */}
        <div className="relative z-10 max-w-6xl mx-auto text-white text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
              The Importance of Sustainability
            </h2>
            <p className="text-lg md:text-xl drop-shadow-md max-w-3xl mx-auto">
              Sustainability ensures a healthy planet for future generations. Being eco-friendly isn’t just a trend—it’s a shared responsibility we must all embrace.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-90 rounded-xl p-8 text-left shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Why Sustainability Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                By conserving natural resources and minimizing waste, sustainability helps fight climate change and preserve biodiversity. It ensures the well-being of both people and the planet.
              </p>
            </div>
  
            <div className="bg-white bg-opacity-90 rounded-xl p-8 text-left shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Eco-Friendly Choices</h3>
              <p className="text-gray-700 leading-relaxed">
                From reducing plastic to supporting renewable energy, every eco-conscious decision counts. Collective action, even through small steps, creates big impact.
              </p>
            </div>
          </div>
  
          <p className="text-lg md:text-xl drop-shadow-md max-w-4xl mx-auto pt-6">
            Let's commit to sustainable habits—reduce, reuse, recycle, and respect nature. Together, we can create a thriving and sustainable future.
          </p>
        </div>
      </section>
    );
  };
  
  export default Sustainability;
  