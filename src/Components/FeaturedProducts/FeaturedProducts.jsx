import "./FeaturedProducts.css";
import { useEffect, useState } from "react";
const FeaturedProducts = () => {
  const [productos, setProductos] = useState([]);
  const randomProducts = productos.sort(() => 0.5 - Math.random()).slice(0, 4);

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
      <h2>Productos destacados</h2>
      <div className='products-grid'>
        {randomProducts.map((data, index) => (
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
      </div>
    </div>
  );
};

export default FeaturedProducts;
