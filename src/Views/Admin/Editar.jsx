import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function Editar() {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  useEffect(() => {
    const sortedProductos = productos
      .filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.nombre.localeCompare(b.nombre));

    setFilteredProductos(sortedProductos);
  }, [searchTerm, productos]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <ToastContainer />
      <div className='mb-4 flex justify-center'>
        <input
          type='text'
          placeholder='Buscar por nombre...'
          value={searchTerm}
          onChange={handleSearchChange}
          className=' p-2 border border-gray-300 rounded-md w-full max-w-sm'
        />
      </div>
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
            {filteredProductos.map((producto) => (
              <tr key={producto._id} className='text-sm'>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <img
                    alt={producto.nombre}
                    src={producto.imagen[0]}
                    className='h-10 w-10 rounded-full bg-gray-50'
                  />
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>{producto.nombre}</td>
                <td className='px-3 py-2 whitespace-nowrap'>{producto.marca} </td>
                <td className='px-3 py-2 whitespace-nowrap text-sm'>{producto.edad}</td>
                <td className='px-3 py-2 whitespace-nowrap text-sm'>
                  {producto.categoria}
                </td>
                <td className='px-3 py-2 whitespace-nowrap text-sm'>
                  ${producto.precio}
                </td>
                <td className='px-3 py-2 whitespace-nowrap text-sm'>
                  {producto.disponibilidad ? "En stock" : "Sin stock"}
                </td>
                <td className='px-3 py-2 whitespace-nowrap'>
                  <a
                    href={"/admin/edit/" + producto._id}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-xs bg-blue-500 text-white px-2 py-1 rounded'>
                      Editar
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
