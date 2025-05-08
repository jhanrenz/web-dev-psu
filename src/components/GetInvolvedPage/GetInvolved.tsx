import JoinCommunity from "./JoinCommunity";
import AboutCommunity from "./AboutCommunity";
import { Footer } from "../Footer/Footer";
import OurStory from "./OurStory";

const GetInvolved = () => {
  return (
    <div>
      <section><AboutCommunity/></section>
      <section><OurStory/></section>
      <section><JoinCommunity/></section>
      
      <Footer /> 
    </div>
  );
};

export default GetInvolved;
