/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("test");

// Insert a few documents into the sales collection.
db.getCollection("products").insertMany([
  {
    nombre: "Dino pintura",
    precio: 10000,
    descripcion:
      "Dinosaurio para pintar, perfecto para estimular la creatividad y la motricidad fina de los niños.",
    marca: "Genérico",
    edad: "3+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 1,
    material: "plástico",
    dimensiones: "20cm x 15cm x 10cm",
    peso: "250g",
    codigo_producto: "DINO01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726743555/IMG_6335_ydfpcn.jpg",
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726743563/IMG_6337_nyuhym.jpg",
    ],
  },
  {
    nombre: "Cubo 7",
    precio: 12000,
    descripcion:
      "Cubo de entretenimiento tipo Rubik, ideal para desafiar las habilidades cognitivas.",
    marca: "Genérico",
    edad: "6+",
    categoria: "juego",
    disponibilidad: true,
    stock: 8,
    material: "plástico",
    dimensiones: "7cm x 7cm x 7cm",
    peso: "200g",
    codigo_producto: "CUBO01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726743655/IMG_6165_qf8lzr.jpg",
    ],
  },
  {
    nombre: "Pegador Hulk",
    precio: 7500,
    descripcion: "Puño de Hulk de juguete. Ideal para juegos de acción y aventuras.",
    marca: "Marvel",
    edad: "4+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 1,
    material: "plástico",
    dimensiones: "20cm x 15cm x 10cm",
    peso: "350g",
    codigo_producto: "PEGADORHULK01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744203/IMG_6277_wfaslw.jpg",
    ],
  },
  {
    nombre: "Pegador Iron Man",
    precio: 7500,
    descripcion: "Puño de Iron Man de juguete. Ideal para juegos de acción y aventuras.",
    marca: "Marvel",
    edad: "4+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 1,
    material: "plástico",
    dimensiones: "20cm x 15cm x 10cm",
    peso: "350g",
    codigo_producto: "PEGADORIM01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744203/IMG_6275_zptu0b.jpg",
    ],
  },
  {
    nombre: "Balde con accesorios de playa",
    precio: 5000,
    descripcion:
      "Balde con accesorios para jugar en la playa. Perfecto para los días de verano y actividades al aire libre.",
    marca: "Genérico",
    edad: "3+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 1,
    material: "plástico",
    dimensiones: "25cm x 15cm x 10cm",
    peso: "200g",
    codigo_producto: "BALDE01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744380/IMG_4895_r0frhe.jpg",
    ],
  },
  {
    nombre: "Bote inflable Intex 100 explorer",
    precio: 20000,
    descripcion:
      "Bote inflable Intex 100 Explorer. Ideal para la piscina o el mar, con capacidad para un niño.",
    marca: "Intex",
    edad: "6+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 2,
    material: "plástico",
    dimensiones: "120cm x 70cm x 30cm",
    peso: "1.5kg",
    codigo_producto: "BOTEINFLABLE01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744338/IMG_4793_hihlbk.jpg",
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744338/IMG_4792_wb3j0k.jpg",
    ],
  },
  {
    nombre: "Pelota inflable",
    precio: 3500,
    descripcion: "Pelota inflable perfecta para actividades en la piscina o en la playa.",
    marca: "Intex",
    edad: "3+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 1,
    material: "plástico",
    dimensiones: "40cm de diámetro",
    peso: "100g",
    codigo_producto: "PELOTAINF01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744768/IMG_6272_bg00nq.jpg",
    ],
  },
  {
    nombre: "Inflables circulares Intex",
    precio: 5900,
    descripcion: "Inflables circulares de Intex, ideales para flotar en la piscina.",
    marca: "Intex",
    edad: "6+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 2,
    material: "plástico",
    dimensiones: "60cm de diámetro",
    peso: "200g",
    codigo_producto: "INFLCIRC01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744760/IMG_6270_xh2axx.jpg",
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744768/IMG_6262_o0dwdz.jpg",
    ],
  },
  {
    nombre: "Llama inflable",
    precio: 6000,
    descripcion: "Llama inflable para disfrutar en la piscina o el mar.",
    marca: "Genérico",
    edad: "6+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 1,
    material: "plástico",
    dimensiones: "100cm x 60cm",
    peso: "500g",
    codigo_producto: "LLAMAINF01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744960/IMG_7184_lzgrfj.jpg",
    ],
  },
  {
    nombre: "Dino inflable",
    precio: 6000,
    descripcion: "Dinosaurio inflable de gran tamaño, ideal para aventuras en el agua.",
    marca: "Genérico",
    edad: "6+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 1,
    material: "plástico",
    dimensiones: "100cm x 50cm",
    peso: "500g",
    codigo_producto: "DINOINF01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726744769/IMG_6267_agkchg.jpg",
    ],
  },
  {
    nombre: "Sirenas",
    precio: 6000,
    descripcion: "Muñecas sirenas de fantasía, perfectas para juegos acuáticos.",
    marca: "Genérico",
    edad: "4+",
    categoria: "juguete",
    disponibilidad: true,
    stock: 3,
    material: "plástico",
    dimensiones: "30cm de largo",
    peso: "150g",
    codigo_producto: "SIRENAS01",
    imagen: [
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726745108/IMG_5766_mein5n.jpg",
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726745109/IMG_5767_cjfr8h.jpg",
      "https://res.cloudinary.com/dxsl6lphv/image/upload/v1726745109/IMG_5771_ha9yfd.jpg",
    ],
  },
]);
