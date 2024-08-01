import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../../../products-b.json";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [filteredData, setFilteredData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    const queryParam = searchParams.get("q") || "";
    setQuery(queryParam);
  }, [searchParams]);

  useEffect(() => {
    if (query) {
      const filtered = data.filter((product) =>
        product.nombre.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [query]);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  return (
    <div className='featured-products-section'>
      <h2>Resultados de la búsqueda</h2>
      {filteredData.length === 0 ? (
        <div
          style={{
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            No hay resultados para la búsqueda <strong> {query}</strong>.
          </p>
        </div>
      ) : (
        <>
          <div className='products-grid'>
            {filteredData.slice(0, visibleProducts).map((data, index) => (
              <div key={index} className='product-card'>
                <a href={"/detail/" + data.codigo_producto}>
                  <img src={data.imagen[0]} alt={data.nombre} className='product-image' />
                  <div className='product-info'>
                    <p className='product-title'>{data.nombre}</p>
                    <p className='product-price'>{data.precio}</p>
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
        </>
      )}
    </div>
  );
};

export default Search;
