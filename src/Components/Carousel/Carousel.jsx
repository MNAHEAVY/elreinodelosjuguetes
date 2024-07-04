import { useEffect } from "react";
import "../../assets/owl.carousel.min.css";
import "../../assets/owl.theme.default.min.css";

const OwlCarouselComponent = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
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
  }, []);

  return (
    <div className='owl-caro'>
      <h2>Nuestras Marcas</h2>
      <div className='owl-carousel'>
        <a className='item' href='/collections/cry-babies' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img1.png'
              alt='cry-babies'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Cry babies</h5>
        </a>

        <a className='item' href='/collections/disney' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img2.png'
              alt='disney'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Disney</h5>
        </a>

        <a className='item' href='/collections/frozen' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img3.png'
              alt='frozen'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Frozen</h5>
        </a>

        <a className='item' href='/collections/granja-de-zenon' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img4.png'
              alt='granja-de-zenon'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Granja de Zenon</h5>
        </a>

        <a className='item' href='/collections/lol' target='_blank'>
          <div className='slide'>
            <img src='../../assets/brands-img5.png' alt='Lol' width='100' height='100' />
          </div>
          <h5 className='text-title'>Lol</h5>
        </a>

        <a className='item' href='/collections/nerf' target='_blank'>
          <div className='slide'>
            <img src='../../assets/brands-img6.png' alt='nerf' width='100' height='100' />
          </div>
          <h5 className='text-title'>Nerf</h5>
        </a>

        <a className='item' href='/collections/paloma' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img7.png'
              alt='paloma'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Paloma</h5>
        </a>

        <a className='item' href='/collections/paw-patrol' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img8.png'
              alt='paw-patrol'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Paw patrol</h5>
        </a>

        <a className='item' href='/collections/pinypon' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img9.png'
              alt='Pinypon'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Pinypon</h5>
        </a>

        <a className='item' href='/collections/pixar' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img10.png'
              alt='pixar'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Pixar</h5>
        </a>

        <a className='item' href='/collections/playmobil' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img11.png'
              alt='playmobil'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Playmobil</h5>
        </a>

        <a className='item' href='/collections/pokemon' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img12.png'
              alt='pokemon'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Pokemon</h5>
        </a>

        <a className='item' href='/collections/star-wars' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img13.png'
              alt='star-wars'
              width='100'
              height='100'
            />
          </div>
          <h5 className='text-title'>Star Wars</h5>
        </a>

        <a className='item' href='/collections/sylvanian-families' target='_blank'>
          <div className='slide'>
            <img
              src='../../assets/brands-img14.png'
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
              src='../../assets/brands-img15.png'
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
              src='../../assets/brands-img16.png'
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
