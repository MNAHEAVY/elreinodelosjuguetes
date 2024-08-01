import "./FeaturedProducts.css"; // Asegúrate de incluir tus estilos CSS
import data from "../../../products-b.json";
const FeaturedProducts = () => {
  const randomProducts = data.sort(() => 0.5 - Math.random()).slice(0, 4);
  return (
    <div className='featured-products-section'>
      <h2>Productos destacados</h2>
      <div className='products-grid'>
        {randomProducts.map((data, index) => (
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
    </div>
  );
};

export default FeaturedProducts;
