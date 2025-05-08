import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { Footer } from "../Footer/Footer";

const HomePage = () => (
  <div className="w-full min-h-screen bg-[url('/homepage_background.jpg')] bg-cover bg-center bg-no-repeat">
    <div className="w-full h-full bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-normal text-white">
              Live Green, Feel Good
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-200 max-w-2xl text-center">
              Living green doesn’t have to be hard. Here, you’ll find easy tips, inspiring stories, and real benefits of choosing a more eco-friendly lifestyle—because small changes really do make a big difference.
            </p>
          </div>
          <div className="flex flex-row gap-3">
          <Link to="/learn-more">
  <button className="flex items-center gap-2 px-6 py-3 text-lg bg-black/40 backdrop-blur-md text-white rounded-md hover:bg-black/60 hover:scale-105 hover:shadow-lg transition-all">
    Learn More! <MoveRight className="w-4 h-4" />
  </button>
</Link>


          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default HomePage;
