import { Carousel } from "react-bootstrap";
import image from "../../../images/barefootfarm.png";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={image} alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
