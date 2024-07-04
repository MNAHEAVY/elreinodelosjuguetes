import "./FeaturedProducts.css"; // Asegúrate de incluir tus estilos CSS

const FeaturedProducts = () => {
  const products = [
    {
      title: "Example product title",
      price: "$19.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Example product title",
      price: "$19.99",
      imageUrl: "https://via.placeholder.com/150",
    },
    { title: "Home page", price: "$19.99", imageUrl: "https://via.placeholder.com/150" },
    {
      title: "Example product title",
      price: "$19.99",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className='featured-products-section'>
      <h2>Productos destacados</h2>
      <div className='products-grid'>
        {products.map((product, index) => (
          <div key={index} className='product-card'>
            <img src={product.imageUrl} alt={product.title} className='product-image' />
            <div className='product-info'>
              <p className='product-title'>{product.title}</p>
              <p className='product-price'>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
