import data from "../../../products-b.json";
import { useSearchParams } from "react-router-dom";

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

  const filteredData = data.filter((product) => {
    const productAge = convertAge(product.edad);
    return productAge >= ageRange.min && productAge <= ageRange.max;
  });

  return (
    <div className='featured-products-section'>
      <h2>
        Para Edades entre {ageRange.min} y {ageRange.max} años
      </h2>
      <div className='products-grid'>
        {filteredData.map((dat, index) => (
          <div key={index} className='product-card'>
            <img src={data.imagen} alt={dat.nombre} className='product-image' />
            <div className='product-info'>
              <p className='product-title'>{dat.nombre}</p>
              <p className='product-price'>{dat.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Edad;
