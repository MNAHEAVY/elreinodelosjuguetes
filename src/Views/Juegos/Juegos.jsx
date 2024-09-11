import { useEffect, useState } from "react";

const Juegos = () => {
  const [productos, setProductos] = useState([]);
  const filteredData = productos.filter((juguete) => juguete.categoria === "juego");
  const [visibleProducts, setVisibleProducts] = useState(8);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://backend-reino-production.up.railway.app/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className='featured-products-section'>
      <h2>Todos los Juegos</h2>
      <div className='products-grid'>
        {filteredData.slice(0, visibleProducts).map((data, index) => (
          <div key={index} className='product-card'>
            <a href={"/detail/" + data._id}>
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
