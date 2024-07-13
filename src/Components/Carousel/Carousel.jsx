import "../../assets/owl.carousel.min.css";
import "../../assets/owl.theme.default.min.css";
import one from "../../assets/brands-img1.png";
import two from "../../assets/brands-img2.png";
import three from "../../assets/brands-img3.png";
import four from "../../assets/brands-img4.png";
import five from "../../assets/brands-img5.png";
import six from "../../assets/brands-img6.png";
import seven from "../../assets/brands-img7.png";
import eight from "../../assets/brands-img8.png";
import nine from "../../assets/brands-img9.png";
import ten from "../../assets/brands-img10.png";
import eleven from "../../assets/brands-img11.png";
import twelve from "../../assets/brands-img12.png";
import third from "../../assets/brands-img13.png";
import fourth from "../../assets/brands-img14.png";
import fifth from "../../assets/brands-img15.png";
import sixth from "../../assets/brands-img16.png";

import { useEffect } from "react";

const OwlCarouselComponent = () => {
  useEffect(() => {
    const initializeOwlCarousel = () => {
      if (window.$ && window.$.fn.owlCarousel) {
        window.$(document).ready(function () {
          window.$(".owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 5,
              },
            },
          });
        });
      }
    };

    // Intentar inicializar OwlCarousel después de un pequeño retraso para asegurarse de que los scripts se hayan cargado
    const timer = setTimeout(initializeOwlCarousel, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='owl-caro' style={{ padding: "40px" }}>
      <h2 style={{ padding: "20px", color: "rgb(14, 27, 77)" }}>Nuestras Marcas</h2>
      <div className='owl-carousel'>
        <a className='item' href='/collections/cry-babies' target='_blank'>
          <div className='slide'>
            <img className='img' src={one} alt='cry-babies' width='100' height='100' />
          </div>
          <h5 className='text-title'>Cry babies</h5>
        </a>

        <a className='item' href='/collections/disney' target='_blank'>
          <div className='slide'>
            <img className='img' src={two} alt='disney' width='100' height='100' />
          </div>
          <h5 className='text-title'>Disney</h5>
        </a>

        <a className='item' href='/collections/frozen' target='_blank'>
          <div className='slide'>
            <img className='img' src={three} alt='frozen' width='100' height='100' />
          </div>
          <h5 className='text-title'>Frozen</h5>
        </a>

        <a className='item' href='/collections/granja-de-zenon' target='_blank'>
          <div className='slide'>
            <img
              className='img'
              src={four}
              alt='granja-de-zenon'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Granja de Zenon</h5>
        </a>

        <a className='item' href='/collections/lol' target='_blank'>
          <div className='slide'>
            <img className='img' src={five} alt='Lol' width='100' height='100' />
          </div>
          <h5 className='text-title'>Lol</h5>
        </a>

        <a className='item' href='/collections/nerf' target='_blank'>
          <div className='slide'>
            <img className='img' src={six} alt='nerf' width='100' height='100' />
          </div>
          <h5 className='text-title'>Nerf</h5>
        </a>

        <a className='item' href='/collections/paloma' target='_blank'>
          <div className='slide'>
            <img className='img' src={seven} alt='paloma' width='100' height='100' />
          </div>
          <h5 className='text-title'>Paloma</h5>
        </a>

        <a className='item' href='/collections/paw-patrol' target='_blank'>
          <div className='slide'>
            <img className='img' src={eight} alt='paw-patrol' width='100' height='100' />
          </div>
          <h5 className='text-title'>Paw patrol</h5>
        </a>

        <a className='item' href='/collections/pinypon' target='_blank'>
          <div className='slide'>
            <img className='img' src={nine} alt='Pinypon' width='100' height='100' />
          </div>
          <h5 className='text-title'>Pinypon</h5>
        </a>

        <a className='item' href='/collections/pixar' target='_blank'>
          <div className='slide'>
            <img className='img' src={ten} alt='pixar' width='100' height='100' />
          </div>
          <h5 className='text-title'>Pixar</h5>
        </a>

        <a className='item' href='/collections/playmobil' target='_blank'>
          <div className='slide'>
            <img className='img' src={eleven} alt='playmobil' width='100' height='100' />
          </div>
          <h5 className='text-title'>Playmobil</h5>
        </a>

        <a className='item' href='/collections/pokemon' target='_blank'>
          <div className='slide'>
            <img className='img' src={twelve} alt='pokemon' width='100' height='100' />
          </div>
          <h5 className='text-title'>Pokemon</h5>
        </a>

        <a className='item' href='/collections/star-wars' target='_blank'>
          <div className='slide'>
            <img className='img' src={third} alt='star-wars' width='100' height='100' />
          </div>
          <h5 className='text-title'>Star Wars</h5>
        </a>

        <a className='item' href='/collections/sylvanian-families' target='_blank'>
          <div className='slide'>
            <img
              className='img'
              src={fourth}
              alt='sylvanian-families'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Sylvanian Families</h5>
        </a>

        <a className='item' href='/collections/velocidad-sin-limites' target='_blank'>
          <div className='slide'>
            <img
              className='img'
              src={fifth}
              alt='velocidad-sin-limites'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Velocidad sin limites</h5>
        </a>

        <a className='item' href='/collections/accion-extrema' target='_blank'>
          <div className='slide'>
            <img
              className='img'
              src={sixth}
              alt='accion-extrema'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Accion Extrema</h5>
        </a>
      </div>
    </div>
  );
};

export default OwlCarouselComponent;
