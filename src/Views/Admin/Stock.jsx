import { useState, useEffect } from "react";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

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

  const handleEditClick = (id) => {
    setEditingProductId(id);
  };

  const handleInputChange = (e, index, field) => {
    const updatedProducts = [...productos];
    updatedProducts[index][field] = e.target.value;
    setProductos(updatedProducts);
  };

  const handleSelectChange = (e, index, field) => {
    const updatedProducts = [...productos];
    updatedProducts[index][field] = e.target.value === "true";
    setProductos(updatedProducts);
  };

  const updateProduct = async (id, updatedProduct) => {
    console.log(updatedProduct);
    try {
      const response = await fetch(
        `https://backend-reino-production.up.railway.app/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: updatedProduct,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Product updated successfully:", result);
      // Optionally, fetch the updated product list again
      // fetchProducts();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSaveClick = async (id) => {
    const updatedProduct = productos.find((p) => p._id === id);
    await updateProduct(id, updatedProduct);
    setEditingProductId(null);
  };

  return (
    <div className='overflow-x-auto'>
      <table className='w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Imagen
            </th>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Nombre
            </th>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Marca
            </th>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Edad
            </th>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Categoría
            </th>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Precio
            </th>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Disponibilidad
            </th>
            <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
              Acción
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {productos.map((producto, index) => (
            <tr key={producto._id} className='text-sm'>
              <td className='px-3 py-2 whitespace-nowrap'>
                <img
                  alt={producto.nombre}
                  src={producto.imagen[0]}
                  className='h-10 w-10 rounded-full bg-gray-50'
                />
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                {editingProductId === producto._id ? (
                  <input
                    type='text'
                    value={producto.nombre}
                    onChange={(e) => handleInputChange(e, index, "nombre")}
                    className='w-28 text-sm font-semibold leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                  />
                ) : (
                  <p className='text-sm font-semibold leading-5 text-gray-900'>
                    {producto.nombre}
                  </p>
                )}
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                {editingProductId === producto._id ? (
                  <input
                    type='text'
                    value={producto.marca}
                    onChange={(e) => handleInputChange(e, index, "marca")}
                    className='w-28 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                  />
                ) : (
                  <p className='text-sm leading-5 text-gray-900'>{producto.marca}</p>
                )}
              </td>
              <td className='px-3 py-2 whitespace-nowrap text-sm'>{producto.edad}</td>
              <td className='px-3 py-2 whitespace-nowrap text-sm'>
                {editingProductId === producto._id ? (
                  <select
                    value={producto.categoria}
                    onChange={(e) => handleInputChange(e, index, "categoria")}
                    className='w-28 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                  >
                    <option value='juego'>Juego</option>
                    <option value='juguete'>Juguete</option>
                  </select>
                ) : (
                  <p className='text-sm leading-5 text-gray-900'>{producto.categoria}</p>
                )}
              </td>
              <td className='px-3 py-2 whitespace-nowrap text-sm'>
                {editingProductId === producto._id ? (
                  <input
                    type='number'
                    value={producto.precio}
                    onChange={(e) => handleInputChange(e, index, "precio")}
                    className='w-24 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                  />
                ) : (
                  <p className='text-sm leading-5 text-gray-900'>${producto.precio}</p>
                )}
              </td>
              <td className='px-3 py-2 whitespace-nowrap text-sm'>
                {editingProductId === producto._id ? (
                  <select
                    value={producto.disponibilidad}
                    onChange={(e) => handleSelectChange(e, index, "disponibilidad")}
                    className='w-28 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                  >
                    <option value='true'>En stock</option>
                    <option value='false'>Sin stock</option>
                  </select>
                ) : (
                  <p className='text-sm leading-5 text-gray-900'>
                    {producto.disponibilidad ? "En stock" : "Sin stock"}
                  </p>
                )}
              </td>
              <td className='px-3 py-2 whitespace-nowrap'>
                {editingProductId === producto._id ? (
                  <button
                    onClick={() => handleSaveClick(producto._id)}
                    className='text-xs bg-green-500 text-white px-2 py-1 rounded'
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    onClick={() => handleEditClick(producto._id)}
                    className='text-xs bg-blue-500 text-white px-2 py-1 rounded'
                  >
                    Editar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
