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
use('test');

// Insert a few documents into the sales collection.
db.getCollection('products').insertMany([
    
  {
    "nombre": "Anlily con accesorios",
    "precio": 30000,
    "descripcion": "Muñeca Anlily con un set de accesorios para estimular el juego creativo. Ideal para niñas.",
    "marca": "Anlily",
    "edad": "5+",
    "categoria": "juguete",
    "disponibilidad": true,
    "stock": 2,
    "material": "plástico",
    "dimensiones": "30cm x 10cm x 5cm",
    "peso": "350g",
    "codigo_producto": "ANLILY01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918046/D_NQ_NP_931118-MLA78113938098_082024-O_jl89vs.webp"]
  },
  {
    "nombre": "Muñeco Matías Hasbro",
    "precio": 15000,
    "descripcion": "Figura de acción del muñeco Matías de la marca Hasbro, perfecta para aventuras y juegos imaginativos.",
    "marca": "Hasbro",
    "edad": "4+",
    "categoria": "juguete",
    "disponibilidad": true,
    "stock": 20,
    "material": "plástico",
    "dimensiones": "25cm x 8cm x 5cm",
    "peso": "200g",
    "codigo_producto": "MATIAS01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918046/D_NQ_NP_824882-MLA43172113283_082020-O_excazn.webp","https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918046/D_NQ_NP_889333-MLA43172121015_082020-O_khtuep.webp"]
  },
  {
    "nombre": "Dinosaurios Cute Assembly",
    "precio": 6500,
    "descripcion": "Set de dinosaurios 'Cute Assembly' para ensamblar. Ideal para niños pequeños que disfrutan de actividades manuales.",
    "marca": "Cute Assembly",
    "edad": "3+",
    "categoria": "juguete",
    "disponibilidad": true,
    "stock": 6,
    "material": "plástico",
    "dimensiones": "15cm x 10cm x 8cm",
    "peso": "250g",
    "codigo_producto": "DINO01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918045/D_NQ_NP_865256-MLU74395912155_022024-O_kyeys5.webp","https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918045/D_NQ_NP_654503-MLA70306566651_072023-O_zyvkk0.webp","https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918046/D_NQ_NP_977057-MLA70306453219_072023-O_emsjge.webp","https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918046/D_NQ_NP_612364-MLA70487302177_072023-O_rd3vdj.webp"]
  },
  {
    "nombre": "Camión Duravit con excavadora",
    "precio": 3000,
    "descripcion": "Camión Duravit con excavadora desmontable. Juguete resistente, ideal para juegos en el exterior.",
    "marca": "Duravit",
    "edad": "3+",
    "categoria": "juguete",
    "disponibilidad": true,
    "stock": 2,
    "material": "plástico",
    "dimensiones": "40cm x 15cm x 15cm",
    "peso": "600g",
    "codigo_producto": "CAMION01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918046/D_NQ_NP_615356-MLA51470029571_092022-O_undyna.webp"]
  },
  {
    "nombre": "Fishing Game",
    "precio": 10000,
    "descripcion": "Juego de pesca para niños. Incluye cañas y peces, perfecto para desarrollar la coordinación y la paciencia.",
    "marca": "Fishing Fun",
    "edad": "5+",
    "categoria": "juego",
    "disponibilidad": true,
    "stock": 2,
    "material": "plástico",
    "dimensiones": "30cm x 20cm x 10cm",
    "peso": "500g",
    "codigo_producto": "FISH01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918046/D_NQ_NP_958244-MLU70861336400_082023-O_anrluk.webp"]
  },
  {
    "nombre": "Pistolas de agua",
    "precio": 8400,
    "descripcion": "Set de pistolas de agua de alta capacidad. Perfectas para juegos al aire libre durante el verano.",
    "marca": "Genérico",
    "edad": "5+",
    "categoria": "juguete",
    "disponibilidad": true,
    "stock": 2,
    "material": "plástico",
    "dimensiones": "25cm x 10cm x 5cm",
    "peso": "300g",
    "codigo_producto": "PISTOLA01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918221/IMG_4652_w2b2uw.jpg","https://res.cloudinary.com/dxsl6lphv/image/upload/v1725918221/IMG_4651_xfa36m.jpg"]
  },
  {
    "nombre": "Delfín con pelotas",
    "precio": 4500,
    "descripcion": "Juego de delfín con pelotas ideal para el desarrollo de la coordinación y habilidades motrices en los más pequeños.",
    "marca": "Genérico",
    "edad": "3+",
    "categoria": "juguete",
    "disponibilidad": true,
    "stock": 1,
    "material": "plástico",
    "dimensiones": "25cm x 15cm x 10cm",
    "peso": "250g",
    "codigo_producto": "DELFIN01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725920571/D_NQ_NP_812826-MLA69408124961_052023-O_hzvrjm.webp"]
  },
  {
    "nombre": "Dominó",
    "precio": 5000,
    "descripcion": "Clásico juego de dominó. Ideal para jugar en familia y desarrollar habilidades estratégicas.",
    "marca": "Genérico",
    "edad": "6+",
    "categoria": "juego",
    "disponibilidad": true,
    "stock": 2,
    "material": "plástico o madera",
    "dimensiones": "20cm x 10cm x 5cm",
    "peso": "300g",
    "codigo_producto": "DOMINO01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725920573/790842930292_bn3pzs.webp"]
  },
  {
    "nombre": "Caja registradora",
    "precio": 13500,
    "descripcion": "Caja registradora de juguete con accesorios. Perfecta para juegos de simulación y roles.",
    "marca": "Genérico",
    "edad": "4+",
    "categoria": "juguete",
    "disponibilidad": true,
    "stock": 2,
    "material": "plástico",
    "dimensiones": "30cm x 20cm x 15cm",
    "peso": "500g",
    "codigo_producto": "CAJA01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725920579/D_NQ_NP_784676-MLA73702068336_012024-O_qsl03j.webp","https://res.cloudinary.com/dxsl6lphv/image/upload/v1725920572/D_NQ_NP_961441-MLA73798696969_012024-O_yoohpa.webp"]
  },
  {
    "nombre": "Juego de la vida Hasbro",
    "precio": 30000,
    "descripcion": "El clásico Juego de la Vida de Hasbro. Perfecto para jugar en familia y simular distintas etapas de la vida.",
    "marca": "Hasbro",
    "edad": "8+",
    "categoria": "juego",
    "disponibilidad": true,
    "stock": 2,
    "material": "cartón y plástico",
    "dimensiones": "40cm x 30cm x 10cm",
    "peso": "700g",
    "codigo_producto": "VIDA01",
    "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725920572/D_NQ_NP_859172-MLA46521006577_062021-O_nn6alo.webp","https://res.cloudinary.com/dxsl6lphv/image/upload/v1725920572/D_NQ_NP_897268-MLA46521055147_062021-O_d7psxm.webp"]
  },
      
      
]);


