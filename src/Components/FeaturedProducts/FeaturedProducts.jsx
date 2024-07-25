import "./FeaturedProducts.css"; // Asegúrate de incluir tus estilos CSS
import data from "../../../products-b.json";
const FeaturedProducts = () => {
  // const products = [
  //   {
  //     title: "Example product title",
  //     price: "$19.99",
  //     imageUrl: "https://via.placeholder.com/150",
  //   },
  //   {
  //     title: "Example product title",
  //     price: "$19.99",
  //     imageUrl: "https://via.placeholder.com/150",
  //   },
  //   { title: "Home page", price: "$19.99", imageUrl: "https://via.placeholder.com/150" },
  //   {
  //     title: "Example product title",
  //     price: "$19.99",
  //     imageUrl: "https://via.placeholder.com/150",
  //   },
  // ];
  console.log(data);
  return (
    <div className='featured-products-section'>
      <h2>Productos destacados</h2>
      <div className='products-grid'>
        {data.map((data, index) => (
          <div key={index} className='product-card'>
            <a href=''>
              <img src={data.imagen} alt={data.nombre} className='product-image' />
              <div className='product-info'>
                <p className='product-title'>{data.nombre}</p>
                <p className='product-price'>{data.precio}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
