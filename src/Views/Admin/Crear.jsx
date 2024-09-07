import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Crear() {
  const initialFormState = {
    nombre: "",
    precio: 0,
    descripcion: "",
    marca: "",
    edad: "",
    categoria: "juguete",
    disponibilidad: true,
    stock: 0,
    material: "",
    dimensiones: "",
    peso: "",
    imagen: [],
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputForm, setInputForm] = useState(initialFormState);

  function handleChange(e) {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "w7o6rpzj");

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dxsl6lphv/image/upload`,
        formData
      );
      setSelectedImage(res.data.secure_url); // Imagen subida exitosamente
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error al subir la imagen, intente de nuevo");
    } finally {
      setLoading(false); // Finaliza el loading
    }
  };

  const addImageToProduct = () => {
    if (selectedImage) {
      setInputForm({
        ...inputForm,
        imagen: [...inputForm.imagen, selectedImage],
      });

      setSelectedImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://backend-reino-production.up.railway.app/products",
        inputForm
      );
      toast.success("Producto creado con éxito.");
      setInputForm(initialFormState);
    } catch (error) {
      toast.error("Error al crear el producto.");
    }
  };

  return (
    <div className='relative isolate overflow-hidden bg-white px-6 pb-6 lg:overflow-visible lg:px-0'>
      <h2 className='text-center font-semibold leading-7 text-gray-900 '>
        Agregar producto Nuevo
      </h2>
      <p className='text-center mt-1 text-sm leading-6 text-gray-600'>
        Verifica bien los datos antes de guardar.
      </p>
      <div className='flex px-6 pt-6 gap-3 justify-center'>
        <label htmlFor='formFile' className='block text-sm font-medium text-gray-900'>
          Imagen del Producto
        </label>
        <input
          className='block w-auto text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none'
          type='file'
          id='formFile'
          onChange={handleImageUpload}
        />
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded'
          onClick={addImageToProduct}
          disabled={loading} // Deshabilitar el botón mientras carga
        >
          {loading ? "Subiendo..." : "Agregar imagen al producto"}
        </button>
      </div>

      {/* Galería de imágenes */}
      <div className='flex flex-wrap justify-center items-center gap-4 mt-4'>
        {inputForm.imagen.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt='Uploaded'
            className='w-[120px] h-[150px] object-cover border border-gray-300 rounded-lg'
          />
        ))}
      </div>
      <ToastContainer />

      <form
        className='px-24'
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4'>
              {/* Nombre */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='nombre'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Nombre
                </label>
                <div className='mt-2'>
                  <input
                    id='nombre'
                    type='text'
                    name='nombre'
                    placeholder='Por Ej. Figura Batman'
                    value={inputForm.nombre}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Precio */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='precio'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Precio
                </label>
                <div className='mt-2'>
                  <input
                    id='precio'
                    type='number'
                    name='precio'
                    placeholder='Por Ej. 23000'
                    value={inputForm.precio}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Descripción */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='descripcion'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Descripción
                </label>
                <div className='mt-2'>
                  <input
                    id='descripcion'
                    type='text'
                    name='descripcion'
                    placeholder='Por Ej. Figura Batman de 30 CM con luces'
                    value={inputForm.descripcion}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Marca */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='marca'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Marca
                </label>
                <div className='mt-2'>
                  <input
                    id='marca'
                    type='text'
                    name='marca'
                    placeholder='Por Ej. DC Comics'
                    value={inputForm.marca}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Edad */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='edad'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Edad
                </label>
                <div className='mt-2'>
                  <input
                    id='edad'
                    type='text'
                    name='edad'
                    placeholder='Por Ej. 4+'
                    value={inputForm.edad}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Categoría */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='categoria'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Categoría
                </label>
                <div className='mt-2'>
                  <select
                    id='categoria'
                    name='categoria'
                    value={inputForm.categoria}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  >
                    <option disabled>Elige</option>
                    <option value='juego'>Juego</option>
                    <option value='juguete'>Juguete</option>
                  </select>
                </div>
              </div>
              {/* Disponibilidad */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='disponibilidad'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Disponibilidad
                </label>
                <div className='mt-2'>
                  <select
                    id='disponibilidad'
                    name='disponibilidad'
                    value={inputForm.disponibilidad}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  >
                    <option disabled>Elige</option>
                    <option value={true}>En stock</option>
                    <option value={false}>Sin stock</option>
                  </select>
                </div>
              </div>
              {/* Stock */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='stock'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Stock
                </label>
                <div className='mt-2'>
                  <input
                    id='stock'
                    type='number'
                    placeholder='Inserte cantidad'
                    name='stock'
                    value={inputForm.stock}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Material */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='material'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Material
                </label>
                <div className='mt-2'>
                  <input
                    id='material'
                    type='text'
                    name='material'
                    placeholder='Por Ej. Plastico'
                    value={inputForm.material}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Dimensiones */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='dimensiones'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Dimensiones
                </label>
                <div className='mt-2'>
                  <input
                    id='dimensiones'
                    type='text'
                    name='dimensiones'
                    placeholder='Por Ej. 15x12x30'
                    value={inputForm.dimensiones}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
              {/* Peso */}
              <div className='sm:col-span-1'>
                <label
                  htmlFor='peso'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Peso
                </label>
                <div className='mt-2'>
                  <input
                    id='peso'
                    type='text'
                    name='peso'
                    placeholder='Por Ej. 100g'
                    value={inputForm.peso}
                    onChange={(e) => handleChange(e)}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button type='button' className='text-sm font-semibold leading-6 text-gray-900'>
            <a href='/'> Cancelar</a>
          </button>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Crear Producto
          </button>
        </div>
      </form>
    </div>
  );
}