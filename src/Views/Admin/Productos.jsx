import { useState, useEffect, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
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
      toast.error("Error al obtener los productos.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProductos = useMemo(() => {
    return productos
      .filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.nombre.localeCompare(b.nombre));
  }, [searchTerm, productos]);

  const handleEditClick = (id) => {
    setEditingProductId(id);
  };

  const handleCancelClick = () => {
    setEditingProductId(null);
    fetchProducts(); // Optionally reset changes
  };

  const handleInputChange = (e, id, field) => {
    let value = e.target.value;

    if (field === "precio") {
      value = parseFloat(value);
      if (isNaN(value) || value < 0) {
        toast.error("El precio base debe ser un número válido positivo.");
        return;
      }
    }

    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto._id === id ? { ...producto, [field]: value } : producto
      )
    );
  };

  const handleSelectChange = (e, id, field) => {
    const value = e.target.value === "true";
    setProductos((prevProductos) =>
      prevProductos.map((producto) =>
        producto._id === id ? { ...producto, [field]: value } : producto
      )
    );
  };

  const updateProduct = async (id, updatedProduct) => {
    setIsUpdating(true);
    try {
      const response = await fetch(
        `https://backend-reino-production.up.railway.app/product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        setProductos((prevProductos) =>
          prevProductos.map((producto) => (producto._id === id ? updatedData : producto))
        );
        toast.success("¡Producto actualizado!");
      } else {
        toast.error("¡Fallo la actualizacion!");
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    } finally {
      setIsUpdating(false);
      setEditingProductId(null);
    }
  };

  const handleSaveClick = async (id) => {
    const updatedProduct = productos.find((p) => p._id === id);
    if (updatedProduct) {
      await updateProduct(id, updatedProduct);
    } else {
      toast.error("Producto no encontrado.");
    }
  };

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
          className='p-2 border border-gray-300 rounded-md w-full max-w-sm'
          aria-label='Buscar productos por nombre'
        />
      </div>
      {isLoading ? (
        <p className='text-center'>Cargando productos...</p>
      ) : (
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
                    <a
                      href={"/edit/" + producto._id}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        alt={producto.nombre}
                        src={
                          producto.imagen && producto.imagen.length > 0
                            ? producto.imagen[0]
                            : "/path/to/default/image.png"
                        }
                        className='h-10 w-10 rounded-full bg-gray-50'
                      />
                    </a>
                  </td>

                  <td className='px-3 py-2 whitespace-nowrap'>
                    {editingProductId === producto._id ? (
                      <input
                        type='text'
                        value={producto.nombre}
                        onChange={(e) => handleInputChange(e, producto._id, "nombre")}
                        className='w-28 text-sm font-semibold leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                        aria-label='Editar nombre del producto'
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
                        onChange={(e) => handleInputChange(e, producto._id, "marca")}
                        className='w-28 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                        aria-label='Editar marca del producto'
                      />
                    ) : (
                      <p className='text-sm leading-5 text-gray-900'>{producto.marca}</p>
                    )}
                  </td>

                  <td className='px-3 py-2 whitespace-nowrap text-sm'>
                    {editingProductId === producto._id ? (
                      <input
                        type='text'
                        value={producto.edad}
                        onChange={(e) => handleInputChange(e, producto._id, "edad")}
                        className='w-12 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                        min='0'
                        aria-label='Editar stock del producto'
                      />
                    ) : (
                      <p className='text-sm leading-5 text-gray-900'>{producto.edad}</p>
                    )}
                  </td>

                  <td className='px-3 py-2 whitespace-nowrap text-sm'>
                    {editingProductId === producto._id ? (
                      <input
                        type='text'
                        value={producto.categoria}
                        onChange={(e) => handleInputChange(e, producto._id, "categoria")}
                        className='w-24 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                        min='0'
                        step='0.01'
                        aria-label='Editar precio base del producto'
                      />
                    ) : (
                      <p className='text-sm leading-5 text-gray-900'>
                        {producto.categoria}
                      </p>
                    )}
                  </td>
                  <td className='px-3 py-2 whitespace-nowrap text-sm'>
                    {editingProductId === producto._id ? (
                      <input
                        type='number'
                        value={producto.precio}
                        onChange={(e) => handleInputChange(e, producto._id, "precio")}
                        className='w-24 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                        min='0'
                        step='0.01'
                        aria-label='Editar precio base del producto'
                      />
                    ) : (
                      <p className='text-sm leading-5 text-gray-900'>
                        ${producto.precio}
                      </p>
                    )}
                  </td>

                  <td className='px-3 py-2 whitespace-nowrap text-sm'>
                    {editingProductId === producto._id ? (
                      <select
                        value={producto.disponibilidad}
                        onChange={(e) =>
                          handleSelectChange(e, producto._id, "disponibilidad")
                        }
                        className='w-28 text-sm leading-5 text-gray-900 border-gray-300 rounded-md shadow-sm px-2 py-1'
                        aria-label='Editar disponibilidad del producto'
                      >
                        <option value='true'>Si</option>
                        <option value='false'>No</option>
                      </select>
                    ) : (
                      <p className='text-sm leading-5 text-gray-900'>
                        {producto.disponibilidad ? "Si" : "No"}
                      </p>
                    )}
                  </td>
                  <td className='px-3 py-2 whitespace-nowrap'>
                    {editingProductId === producto._id ? (
                      <>
                        <button
                          onClick={() => handleSaveClick(producto._id)}
                          disabled={isUpdating}
                          className='text-xs bg-green-500 text-white px-2 py-1 rounded'
                        >
                          {isUpdating ? "Guardando..." : "Guardar"}
                        </button>
                        <button
                          onClick={handleCancelClick}
                          className='text-xs bg-gray-500 text-white px-2 py-1 rounded ml-2'
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleEditClick(producto._id)}
                        className='text-xs bg-blue-500 text-white px-2 py-1 rounded'
                        aria-label={`Editar ${producto.nombre}`}
                      >
                        Editar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {filteredProductos.length === 0 && (
                <tr>
                  <td colSpan='7' className='text-center py-4'>
                    No se encontraron productos.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
