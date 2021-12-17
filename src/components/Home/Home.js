import Carousel from "./Carousel/CarouselComponent";
import Intro from "./Intro/Intro";
import Retailers from "./Retailers/Retailers";
import Social from "../Social/Social";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className={styles.intro}>
      <Intro />
      <Social />
      </div>
      <hr></hr>
      <Retailers />
    </>
  );
};

export default Home;
