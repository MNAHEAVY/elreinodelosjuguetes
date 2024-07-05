import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Carrousel.css";
import bannerone from "../../assets/bannerone.png";
import bannertwo from "../../assets/bannertwo.png";
import bannertree from "../../assets/bannertree.png";
import bannerfour from "../../assets/bannerfour.png";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img className='image' src={bannerone} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='image' src={bannertwo} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='image' src={bannertree} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='image' src={bannerfour} alt='Fourd slide' />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
