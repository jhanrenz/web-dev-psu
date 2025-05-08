import { useState, useEffect } from 'react';

const AboutCommunity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    { src: "/community_1.jpg", alt: "Tree Planting Event" },
    { src: "/community_2.jpg", alt: "Community Cleanup" },
    { src: "/community_3.jpg", alt: "Eco-Friendly Donation" },
    { src: "/community_4.jpg", alt: "Sustainability Workshop" },
    { src: "/community_5.jpg", alt: "Recycling Program" }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoSwitchInterval = setInterval(() => {
      if (!isUserInteracting) {
        nextImage();
      }
    }, 3000);

    return () => clearInterval(autoSwitchInterval);
  }, [isUserInteracting]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind's lg breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleInteraction = () => {
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 5000);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-10">
          {/* Text Section */}
          <div className="flex gap-4 flex-col items-start lg:pl-12 lg:pr-8">
            <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full uppercase tracking-wide w-fit mb-4">
              Our Community
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-4xl tracking-tight lg:max-w-xl font-semibold text-left mb-4">
                Join Us in Creating a Sustainable Future
              </h2>

              {/* Conditionally show shortened or full text */}
              <div className="text-lg max-w-3xl lg:max-w-4xl leading-relaxed tracking-tight text-muted-foreground text-left text-gray-600">
                {isMobile && !showFullText ? (
                  <>
                    <p className="mb-2">
                      Our community is dedicated to promoting eco-friendly living and sustainability...
                    </p>
                    <button
                      onClick={() => setShowFullText(true)}
                      className="text-green-600 underline hover:text-green-800"
                    >
                      See More
                    </button>
                  </>
                ) : (
                  <>
                    <p className="mb-4">
                      Our community is dedicated to promoting eco-friendly living and sustainability. We actively engage in activities like tree planting, community cleaning, and donating to eco-friendly charities. By coming together, we can make a positive impact on the environment and ensure a better future for generations to come.
                    </p>
                    <p>
                      Join us today and be part of a movement towards a cleaner, greener world. Whether you're an eco-conscious individual or just starting your journey towards sustainability, there's a place for you in our community!
                    </p>
                    {isMobile && (
                      <button
                        onClick={() => setShowFullText(false)}
                        className="mt-2 text-green-600 underline hover:text-green-800"
                      >
                        Show Less
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Image Carousel Section */}
          <div className="w-full max-w-full px-6">
            <div className="relative">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="rounded-md w-full h-full object-cover aspect-video"
                onClick={handleInteraction}
              />
              <div
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
                onClick={() => {
                  prevImage();
                  handleInteraction();
                }}
              >
                &#10094;
              </div>
              <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white text-3xl cursor-pointer"
                onClick={() => {
                  nextImage();
                  handleInteraction();
                }}
              >
                &#10095;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCommunity;
