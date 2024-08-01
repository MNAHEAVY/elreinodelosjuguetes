import { useState } from "react";
import data from "../../../products-b.json";
import { useParams } from "react-router-dom";

const Marcas = () => {
  const { id } = useParams();
  console.log(id);
  const filteredData = data.filter((juguete) => juguete.marca.toLowerCase() === id);
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };
  if (filteredData.length === 0) {
    return (
      <div className='featured-products-section'>
        <div>No product found</div>
      </div>
    );
  }
  return (
    <div className='featured-products-section'>
      <h2>Juegos y juguetes de {id}</h2>
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
      </div>
      {visibleProducts < filteredData.length && (
        <button onClick={handleLoadMore} className='load-more-button'>
          Ver más
        </button>
      )}
    </div>
  );
};

export default Marcas;
