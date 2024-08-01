import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../../../products-b.json";

const ageRanges = {
  1: { min: 0, max: 2 },
  2: { min: 2, max: 4 },
  3: { min: 5, max: 7 },
  4: { min: 8, max: Infinity },
};

const convertAge = (ageString) => {
  if (ageString.includes("+")) {
    return parseInt(ageString.replace("+", ""), 10);
  }
  return parseInt(ageString, 10);
};

const Edad = () => {
  const [searchParams] = useSearchParams();
  const edadParam = parseInt(searchParams.get("edad"), 10);
  const ageRange = ageRanges[edadParam];
  const [visibleProducts, setVisibleProducts] = useState(8);

  const filteredData = data.filter((product) => {
    const productAge = convertAge(product.edad);
    return productAge >= ageRange.min && productAge <= ageRange.max;
  });

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  return (
    <div className='featured-products-section'>
      <h2>
        {ageRange.max === Infinity
          ? `Para edades de ${ageRange.min} en adelante`
          : `Para edades entre ${ageRange.min} y ${ageRange.max} años`}
      </h2>
      <div className='products-grid'>
        {filteredData.slice(0, visibleProducts).map((dat, index) => (
          <div key={index} className='product-card'>
            <a href={"/detail/" + data.codigo_producto}>
              <img src={dat.imagen[0]} alt={dat.nombre} className='product-image' />
              <div className='product-info'>
                <p className='product-title'>{dat.nombre}</p>
                <p className='product-price'>{dat.marca}</p>
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
      {filteredData.length === 0 && <p>No hay productos disponibles para esta edad.</p>}
    </div>
  );
};

export default Edad;
