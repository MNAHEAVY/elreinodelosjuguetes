import data from "../../../products-b.json";

const Juegos = () => {
  const filteredData = data.filter((juguete) => juguete.categoria === "juegos");
  return (
    <div className='featured-products-section'>
      <h2>Todos los Juegos</h2>
      <div className='products-grid'>
        {filteredData.map((data, index) => (
          <div key={index} className='product-card'>
            <img src={data.imagen} alt={data.nombre} className='product-image' />
            <div className='product-info'>
              <p className='product-title'>{data.nombre}</p>
              <p className='product-price'>{data.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juegos;
