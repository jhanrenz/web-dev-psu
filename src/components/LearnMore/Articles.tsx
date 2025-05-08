import { useState } from "react";
import { Leaf } from "lucide-react";

const Articles: React.FC = () => {
  const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});

  const toggleShowMore = (index: number) => {
    setShowMore((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const articles = [
    {
      id: 1,
      image: "/article_1.jpg",
      title: "Green Infrastructure as a Cooling Solution",
      text: "The city on Thursday released the results of its Heat Island Study Phase II, which took place in the summer of 2024. The study was conducted by the Office of Environmental Quality and Sustainability (OEQS) in partnership with the National Oceanic and Atmospheric Association. It identifies Dallas’ hotspots and looks for equitable ways to implement cooling solutions.",
      more: "There are also efforts with the Texas Trees Foundation to increase the urban tree canopy, which as of 2021 sat at 32%. The City of Dallas is working to increase it to 37% by 2040.",
      link: "https://www.keranews.org/energy-environment/2025-04-04/dallas-heat-islands-climate-study?utm_source=chatgpt.com",
      span: "lg:col-span-2",
    },
    {
      id: 2,
      image: "/article_2.jpg",
      title: "Urban Heat Island Effect & Elevated Temperatures",
      text: "Through an analysis of ~5 million urban grids from 2003 to 2018, we discovered that the average surface urban heat island intensity (SUHII) increased at a rate of 0.021 °C annually. Despite the extensive areas of SUHII increase in higher-income countries, particularly the US and China, it is the low and lower-middle-income countries that exhibited a more pronounced net increase in intensity.",
      more: "increased at a rate of 0.021 °C annually. Despite the extensive areas of SUHII increase in higher-income countries, particularly the US and China, it is the low and lower-middle-income countries that exhibited a more pronounced net increase in intensity.",
      link: "https://www.nature.com/articles/s42949-025-00198-9?utm_source=chatgpt.com",
    },
    {
      id: 3,
      image: "/article_3.jpg",
      title: "Consumers Willing to Pay More for Sustainable Products",
      text: "PDI Technologies released its fourth annual “Sustainability, EV, and Convenience Retail Survey Report.",
      more: "Finding consumers not only want sustainable and environmentally friendly options—they increasingly expect them in the fuel and convenience retail industry.",
      link: "https://www.convenience.org/Media/Daily/2024/April/24/4-US-Consumers-Pay-Sustainable_Products_Research?utm_source=chatgpt.com",
    },
    {
      id: 4,
      image: "/article_4.jpg",
      title: "The Green Benefits of Growing Your Own Food: How Gardening Supports Sustainability and Your Well-Being",
      text: "Trees remove air pollution by the interception of particulate matter on plant surfaces and the absorption of gaseous pollutants through the leaf stomata.",
      more: "It’s a satisfying and rewarding experience that more and more people are embracing every year. Growing your own food offers a variety of benefits, from reducing your carbon footprint to enjoying the freshest, most nutritious produce right at your fingertips.",
      link: "https://fredfood.org/post/The-Green-Benefits-of-Growing-Your-Own-Food-How-Gardening-Supports-Sustainability-and-Your-Well-Being",
      span: "lg:col-span-2",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        <div className="w-full py-20 lg:py-40 text-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-3xl md:text-5xl tracking-tight font-semibold text-left">
                  Every Step Counts for a Greener Tomorrow
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-gray-700 text-left">
                  Making sustainable choices is easier than you think. Small actions today lead to a better planet tomorrow.
                </p>
              </div>

              {/* Articles heading */}
              <div className="flex justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-center">Articles</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className={`bg-white rounded-xl p-6 flex flex-col justify-between cursor-pointer transition transform hover:-translate-y-2 hover:shadow-lg ${article.span || ""}`}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                    />
                    <Leaf className="w-8 h-8 stroke-1 text-green-700" />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 text-black">{article.title}</h3>
                      <p className="text-gray-800 text-base w-full">
                        {article.text}
                        {showMore[article.id] && (
                          <span>
                            <br />
                            {article.more}
                            <div className="mt-4">
                              <p className="text-sm text-gray-600">
                                Link: <a href={article.link} target="_blank" className="text-blue-600 hover:underline">{article.link}</a>
                              </p>
                            </div>
                          </span>
                        )}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleShowMore(article.id);
                        }}
                        className="text-green-700 underline mt-2 text-sm self-start hover:text-green-900"
                      >
                        {showMore[article.id] ? "See less" : "See more"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
