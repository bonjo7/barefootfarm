import {useState} from 'react'
import { Carousel } from "react-bootstrap";
import image from "../../../images/barefootfarm.png";
import salad from "../../../images/salad.png"

const CarouselComponent = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={image} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className='d-block w-100' src={salad} alt='First slide' />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
