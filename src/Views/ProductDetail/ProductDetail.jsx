import data from "../../../products-b.json";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Toast from "react-bootstrap/Toast";

const ProductDetail = () => {
  const { id } = useParams();
  const productData = data.filter((juguete) => juguete.codigo_producto === id);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  if (productData.length === 0) {
    return (
      <div className='featured-products-section'>
        <div>No product found</div>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderTooltipCart = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Agregar al carrito
    </Tooltip>
  );

  const renderTooltipWhatsapp = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Compre por Whatsapp
    </Tooltip>
  );
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductInCart = existingCart.some(
      (product) => product.codigo_producto === productData[0].codigo_producto
    );

    if (isProductInCart) {
      setToastMessage("El producto ya se encuentra en el carrito");
      setToastType("warning");
    } else {
      existingCart.push(productData[0]);
      localStorage.setItem("cart", JSON.stringify(existingCart));
      setToastMessage("Producto agregado al carrito");
      setToastType("success");
    }

    setShowToast(true);
  };

  const generateWhatsAppLink = (product) => {
    const phoneNumber = "3755295478";
    const message = `Hola, me gustaría comprar el producto "${product.nombre}" con el código "${product.codigo_producto}".`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };
  return (
    <div className='featured-products-section'>
      <h2>Detalle Producto</h2>
      <div className='product-detail-container'>
        <div className='slider-container'>
          <Slider {...settings}>
            {productData[0].imagen.map((img, index) => (
              <div className='slide-center' key={index}>
                <img src={img} alt={productData[0].nombre} className='product-img' />
              </div>
            ))}
          </Slider>
        </div>
        <div className='product-inf'>
          <h2>{productData[0].nombre}</h2>
          <div className='detail'>
            <strong>Descripción:</strong>
            <p className='product-description'>{productData[0].descripcion}</p>
          </div>
          <div className='detail'>
            <strong>Precio:</strong>
            <p className='product-price'>{productData[0].precio}</p>
          </div>
          <div className='buttones'>
            <OverlayTrigger
              placement='left'
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipCart}
            >
              <button className='bn632-hover bn26' onClick={addToCart}>
                Lo quiero <FaShoppingCart />
              </button>
            </OverlayTrigger>
            <OverlayTrigger
              placement='right'
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltipWhatsapp}
            >
              <a
                className='bn31'
                href={generateWhatsAppLink(productData[0])}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='bn31span'>
                  Comprar <FaWhatsapp />
                </span>
              </a>
            </OverlayTrigger>
          </div>{" "}
        </div>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg={toastType}
        >
          <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
      </div>{" "}
    </div>
  );
};

export default ProductDetail;
