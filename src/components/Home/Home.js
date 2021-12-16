import Carousel from "./Carousel/CarouselComponent";
import Intro from "./Intro/Intro";
import Retailers from "./Retailers/Retailers"

const Home = () => {
  return (
    <div>
      <Carousel />
      <Intro />
      <Retailers />
    </div>
  );
};

export default Home;
