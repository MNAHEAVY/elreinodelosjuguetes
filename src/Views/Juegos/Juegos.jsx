import data from "../../../products-b.json";
import { useState } from "react";

const Juegos = () => {
  const filteredData = data.filter((juguete) => juguete.categoria === "juego");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };
  return (
    <div className='featured-products-section'>
      <h2>Todos los Juegos</h2>
      <div className='products-grid'>
        {filteredData.slice(0, visibleProducts).map((data, index) => (
          <div key={index} className='product-card'>
            <a href={"/detail/" + data.codigo_producto}>
              <img src={data.imagen[0]} alt={data.nombre} className='product-image' />
              <div className='product-info'>
                <p className='product-title'>{data.nombre}</p>
                <p className='product-price'>{data.marca}</p>
              </div>{" "}
            </a>
          </div>
        ))}
      </div>{" "}
      {visibleProducts < filteredData.length && (
        <button onClick={handleLoadMore} className='load-more-button'>
          Ver más
        </button>
      )}
    </div>
  );
};

export default Juegos;
