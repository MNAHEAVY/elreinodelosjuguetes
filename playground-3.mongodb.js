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
          "nombre": "Repuesto Nerf",
          "precio": 5000,
          "descripcion": "Repuesto compatible con pistolas Nerf. Alta durabilidad y precisión.",
          "marca": "Nerf",
          "edad": "8+",
          "categoria": "accesorio",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 5cm x 5cm",
          "peso": "100g",
          "codigo_producto": "NR01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724417255/17561-3417859466_oggcjd.jpg"
          ]
        },
        {
          "nombre": "Cubo Rubik",
          "precio": 7500,
          "descripcion": "Cubo Rubik clásico de alta calidad. Ideal para mejorar habilidades cognitivas.",
          "marca": "Rubik",
          "edad": "6+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "5.7cm x 5.7cm x 5.7cm",
          "peso": "150g",
          "codigo_producto": "RB01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724417467/rubik_cubemess-3196432176_ayihzg.png",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724417465/rubiks-cube-3347244_1280-2880210140_srraak.png"
          ]
        },
        {
          "nombre": "Black Widow Titán Héroe Hasbro",
          "precio": 17000,
          "descripcion": "Figura de acción Black Widow de la serie Titán Héroe de Hasbro. Detalles y acabados de alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "300g",
          "codigo_producto": "BW01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724417572/D_NQ_NP_838844-MLA47936066586_102021-O_peiios.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724417568/2900272d1bee4410aacc96b4c8cf6e02xl_xgsddn.webp"
          ]
        },
        {
          "nombre": "Masa Play Doh x 4 potes",
          "precio": 9000,
          "descripcion": "Set de 4 potes de masa Play Doh. Ideal para estimular la creatividad en los niños.",
          "marca": "Play Doh",
          "edad": "3+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "masa",
          "dimensiones": "20cm x 15cm x 10cm",
          "peso": "400g",
          "codigo_producto": "PD01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724417673/massa-de-modelar-play-doh-com-4-potes-hasbro-2142_qkrefz.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724417675/00063050945241L_sempos.webp"
          ]
        },
        {
          "nombre": "Volante Interactivo",
          "precio": 32000,
          "descripcion": "Volante interactivo con efectos de sonido y luces. Perfecto para juegos de simulación.",
          "marca": "Fisher-Price",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 25cm x 10cm",
          "peso": "500g",
          "codigo_producto": "VI01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724418486/D_Q_NP_724839-MLU73464376342_122023-O_k9ehcg.webp"
          ]
        },
        {
          "nombre": "Bebés Lloronas",
          "precio": 60000,
          "descripcion": "Cada juguete viene con su propio accesorio y llora lágrimas de verdad.",
          "marca": "Baby Cry",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 4,
          "material": "plástico y tela",
          "dimensiones": "30cm x 20cm x 15cm",
          "peso": "400g",
          "codigo_producto": "BL01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724419086/D_NQ_NP_711617-MLA52281424155_112022-O_fu2itr.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724419086/D_NQ_NP_907432-MLA52281285908_112022-O_kceleq.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724419085/D_NQ_NP_979538-MLC50238075571_062022-O_ql9ezh.webp"
          ]
        },
        {
          "nombre": "Muñeco Cara de Papa Hasbro",
          "precio": 37000,
          "descripcion": "El clásico Muñeco Cara de Papa de Hasbro. Personaliza con accesorios para crear diferentes expresiones.",
          "marca": "Hasbro",
          "edad": "2+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 15cm x 10cm",
          "peso": "300g",
          "codigo_producto": "CP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724419342/D_NQ_NP_718452-MLU70812735981_082023-O_l1o6yi.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724419338/D_NQ_NP_701261-MLU75113443847_032024-O_uvzzto.webp"
          ]
        },
        {
          "nombre": "Auto a Escala BMW",
          "precio": 40000,
          "descripcion": "Réplica a escala de un BMW. Ideal para coleccionistas y entusiastas de autos.",
          "marca": "BMW",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "metal",
          "dimensiones": "15cm x 6cm x 5cm",
          "peso": "250g",
          "codigo_producto": "BM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724419870/41400-rastar-bmw-z4-143-01-w_603dfa65e76ec_hhglne.jpg"
          ]
        },
        {
          "nombre": "FIGURA HARRY POTTER - CHO CHANG",
          "precio": 5917,
          "descripcion": "Figura de colección de Cho Chang de la serie Harry Potter. Detalles precisos y alta calidad.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juegos",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "10cm x 5cm x 5cm",
          "peso": "200g",
          "codigo_producto": "HP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722429176/D_NQ_NP_2X_944822-MLA74192121437_012024-F_arnw9z.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722453056/D_NQ_NP_655673-MLA52069776709_102022-O_dflqwi.webp"
          ]
        },
        {
          "nombre": "FIGURA HARRY POTTER",
          "precio": 4301,
          "descripcion": "Figura de colección de Harry Potter. Perfecta para fanáticos y coleccionistas.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 8cm",
          "peso": "200g",
          "codigo_producto": "HP02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722453505/D_NQ_NP_939057-MLU75132480327_032024-O_rja95g.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722453505/D_NQ_NP_929074-MLU75132333643_032024-O_sgefhq.webp"
          ]
        },
        {
          "nombre": "FIGURA HARRY POTTER - LUNA LOVEGOOD",
          "precio": 4301,
          "descripcion": "Figura de colección de Luna Lovegood de la serie Harry Potter. Detalles y acabados de alta calidad.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 8cm",
          "peso": "200g",
          "codigo_producto": "HP03",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722453499/D_NQ_NP_640542-MLA74134560278_012024-O_p14zji.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722453506/D_NQ_NP_944115-MLA48144734175_112021-O_bioqyd.webp"
          ]
        },
        {
          "nombre": "FIGURA HARRY POTTER - HERMIONE GRANGER",
          "precio": 4301,
          "descripcion": "Figura de colección de Hermione Granger de la serie Harry Potter. Ideal para los fanáticos de la saga.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 8cm",
          "peso": "200g",
          "codigo_producto": "HP04",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722453499/D_NQ_NP_870215-MLU74827252183_022024-O_vatylt.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722453498/D_NQ_NP_918683-MLU72637470517_112023-O_nvxd2h.webp"
          ]
        },
        {
          "nombre": "MINI FIGURA HARRY POTTER",
          "precio": 4301,
          "descripcion": "Mini figura de Harry Potter de alta calidad. Compacta y perfecta para cualquier colección.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "7cm x 3cm x 3cm",
          "peso": "200g",
          "codigo_producto": "HP05",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722454034/D_NQ_NP_709035-MLA70458188464_072023-O_oii9ij.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722454031/D_NQ_NP_681543-MLA70483967821_072023-O_kuyhd2.webp"
          ]
        },
        {
          "nombre": "MINI FIGURA HARRY POTTER - HERMIONE",
          "precio": 4301,
          "descripcion": "Mini figura de Hermione Granger. Compacta y con detalles impresionantes para cualquier colección.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "7cm x 3cm x 3cm",
          "peso": "200g",
          "codigo_producto": "HP06",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722454037/D_NQ_NP_775197-MLA72078141628_102023-O_zpxe2k.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722454031/D_NQ_NP_876857-MLA72138108703_102023-O_fztbyy.webp"
          ]
        },
        {
          "nombre": "PLAYSET HARRY POTTER DIVINATION CLASS",
          "precio": 11495,
          "descripcion": "Playset de la clase de adivinación de Harry Potter. Incluye accesorios detallados para recrear las escenas.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 20cm x 10cm",
          "peso": "500g",
          "codigo_producto": "HP07",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722432341/D_NQ_NP_974026-MLA54958064780_042023-O_dulvy3.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722432340/D_NQ_NP_892951-MLA54952896541_042023-O_ngcoos.webp"
          ]
        },
        {
          "nombre": "SALA DE JUEGOS HARRY POTTER",
          "precio": 11495,
          "descripcion": "Sala de juegos temática de Harry Potter. Incluye diversos accesorios para recrear escenas mágicas.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "40cm x 30cm x 15cm",
          "peso": "700g",
          "codigo_producto": "HP08",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722433735/D_NQ_NP_693061-MLA70158927435_062023-O_y04oan.webp"
          ]
        },
        {
          "nombre": "PACK X 2 MINI FIGURAS TORTUGAS NINJA",
          "precio": 4659,
          "descripcion": "Pack de 2 mini figuras de las Tortugas Ninja. Perfecto para los fanáticos de la serie.",
          "marca": "Tortugas Ninja",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "7cm x 3cm x 3cm",
          "peso": "150g",
          "codigo_producto": "TN01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722433889/D_NQ_NP_810788-MLU74017302322_012024-O_ibq1jh.webp"
          ]
        },
        {
          "nombre": "AUTO CON TIRADOR TORTUGAS NINJA",
          "precio": 4598,
          "descripcion": "Auto con tirador de las Tortugas Ninja. Ideal para carreras y aventuras emocionantes.",
          "marca": "Tortugas Ninja",
          "edad": "4+",
          "categoria": "juegos",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "TN02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722431088/D_NQ_NP_625327-MLA70977513245_082023-O_cegttp.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722431092/D_NQ_NP_839206-MLA70942485610_082023-O_f9y9fr.webp"
          ]
        },
        {
          "nombre": "MINI FIGURA 7CM PINYPON ACTION",
          "precio": 11000,
          "descripcion": "Mini figura de acción de Pinypon de 7cm. Con detalles precisos y accesorios intercambiables.",
          "marca": "Pinypon",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "7cm x 3cm x 3cm",
          "peso": "50g",
          "codigo_producto": "PP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722434495/D_NQ_NP_2X_692853-MLA71410919068_092023-F_bip5ux.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722434493/D_NQ_NP_636945-MLA71456087347_092023-O_ffqrgo.webp"
          ]
        },
        {
          "nombre": "Pinypon Con Accesorios",
          "precio": 15000,
          "descripcion": "Pinypon con accesorios adicionales, incluye ropa y objetos para personalizar y expandir el juego.",
          "marca": "Pinypon",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "12cm x 7cm x 5cm",
          "peso": "250g",
          "codigo_producto": "PIN02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1725576565/D_NQ_NP_923622-MLA71696227811_092023-O_zqa6gc.webp"
          ]
        },
        {
          "nombre": "SKATE TORTUGAS NINJA CON TIRADOR",
          "precio": 7442,
          "descripcion": "Skate de las Tortugas Ninja con tirador, perfecto para aventuras rápidas y divertidas.",
          "marca": "Tortugas Ninja",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "TN05",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435657/D_NQ_NP_672514-MLU73076000656_112023-O_cchfxn.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435667/D_NQ_NP_823864-MLU73076321228_112023-O_ckmoau.webp"
          ]
        },
        {
          "nombre": "MINI FIGURA SUPERCUTE EN CAJITA",
          "precio": 7986,
          "descripcion": "Mini figura Supercute en cajita, ideal para coleccionistas y fanáticos.",
          "marca": "Supercute",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "5cm x 5cm x 5cm",
          "peso": "100g",
          "codigo_producto": "SC01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435663/D_NQ_NP_723756-MLA50937497119_072022-O_gir59m.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435660/D_NQ_NP_705118-MLA50937452324_072022-O_iqmskp.webp"
          ]
        },
        {
          "nombre": "FIGURA 10CM TORTUGAS NINJA",
          "precio": 12463,
          "descripcion": "Figura de 10cm de las Tortugas Ninja, con detalles y acabados de alta calidad.",
          "marca": "Tortugas Ninja",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "10cm x 5cm x 5cm",
          "peso": "150g",
          "codigo_producto": "TN06",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435656/D_NQ_NP_635816-MLA70991116786_082023-O_thasjr.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435668/D_NQ_NP_834491-MLA71027428459_082023-O_ctv0jj.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435672/D_NQ_NP_920315-MLA71027352621_082023-O_ebldrl.webp"
          ]
        },
        {
          "nombre": "FIGURA 30CM SELINA KYLE",
          "precio": 5143,
          "descripcion": "Figura de 30cm de Selina Kyle, con detalles precisos para los fanáticos de DC Comics.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "DC02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435986/D_NQ_NP_891804-MLU73674433069_122023-O_uczp02.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435976/D_NQ_NP_630632-MLU71093768396_082023-O_jmgwb4.webp"
          ]
        },
        {
          "nombre": "SOMBRERO HARRY POTTER",
          "precio": 45000,
          "descripcion": "Sombrero temático de Harry Potter, ideal para los fanáticos de la saga. Hecho de lana de alta calidad.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "lana",
          "dimensiones": "tamaño único",
          "peso": "150g",
          "codigo_producto": "HP09",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435982/D_NQ_NP_810240-MLU72636681783_112023-O_ko4ekf.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722435990/D_NQ_NP_904054-MLU72565705334_112023-O_petmfz.webp"
          ]
        },
        {
          "nombre": "MICRÓFONO FISHER PRICE",
          "precio": 6500,
          "descripcion": "Micrófono de juguete de Fisher Price, ideal para niños pequeños que disfrutan de cantar y jugar.",
          "marca": "Fisher Price",
          "edad": "2+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "20cm x 5cm x 5cm",
          "peso": "200g",
          "codigo_producto": "FP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1725576565/D_NQ_NP_707043-MLA43436292323_092020-O_zxdbj6.webp"
          ]
        },
        {
          "nombre": "PINES CROCS",
          "precio": 2500,
          "descripcion": "Pack de 8 pines decorativos para Crocs, ideales para personalizar y dar un toque único a tus zapatos.",
          "marca": "Crocs",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "2cm x 2cm x 1cm cada uno",
          "peso": "50g",
          "codigo_producto": "CR01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722437039/IMG_6123_guuz0a.png",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722437028/IMG_6128_gfzoeh.png",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722437028/IMG_6127_rfy3dh.png"
          ]
        },
        {
          "nombre": "SET FIGURAS BLUE'S CLUES",
          "precio": 3500,
          "descripcion": "Set de figuras de Blue's Clues, ideal para niños y fans de la serie.",
          "marca": "Nickelodeon",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "10cm x 5cm x 5cm cada figura",
          "peso": "200g",
          "codigo_producto": "BL01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722438714/D_NQ_NP_639793-MLU73333880681_122023-O_ayvykw.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722438706/D_NQ_NP_896758-MLU73334148269_122023-O_cgw97m.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722438703/D_NQ_NP_811819-MLU73333880703_122023-O_pxcxxk.webp"
          ]
        },
        {
          "nombre": "FIGURA SORPRESA BLUE'S CLUES",
          "precio": 2000,
          "descripcion": "Figura sorpresa de Blue's Clues, ideal para coleccionar y sorprender a los niños.",
          "marca": "Nickelodeon",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "7cm x 5cm x 5cm",
          "peso": "100g",
          "codigo_producto": "BL02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722438710/D_NQ_NP_737631-MLA50183211112_062022-O_lpyvdq.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722438703/D_NQ_NP_811819-MLU73333880703_122023-O_pxcxxk.webp"
          ]
        },
        {
          "nombre": "SET FIGURAS HARRY POTTER",
          "precio": 11500,
          "descripcion": "Set de 2 figuras de Harry Potter del Mundo Mágico. Detalles y acabados de alta calidad.",
          "marca": "Harry Potter",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "20cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "HP10",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722444146/D_NQ_NP_807186-MLA69299414343_052023-O_n36sxs.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722444142/D_NQ_NP_741035-MLU70683360281_072023-O_vcq07q.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722444124/D_NQ_NP_619345-MLA72769764963_112023-O_to4lxb.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722444105/D_NQ_NP_978435-MLA69446426055_052023-O_bc6k6t.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO SPIDER-MAN",
          "precio": 70000,
          "descripcion": "Figura de Spider-Man de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBSP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_743454-MLA77873754635_072024-O_imslyb.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_721465-MLA75829062929_042024-O_zzjact.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_744887-MLA77874394847_072024-O_s1ubsu.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO CAPITÁN AMÉRICA",
          "precio": 6291,
          "descripcion": "Figura de Capitán América de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBCA01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451153/D_NQ_NP_944626-MLA77731939641_072024-O_nzze6m.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451154/D_NQ_NP_656318-MLA77731939643_072024-O_ee8o6a.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO FALCON",
          "precio": 6291,
          "descripcion": "Figura de Falcon de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBFA01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451151/D_NQ_NP_871796-MLA75329414352_032024-O_kpvu8d.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_964056-MLA75329414358_032024-O_vgvzbh.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO MOON KNIGHT",
          "precio": 6291,
          "descripcion": "Figura de Moon Knight de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBMK01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451155/D_NQ_NP_710117-MLA74650434618_022024-O_kbfjxv.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451153/D_NQ_NP_965304-MLA74651641504_022024-O_at9q98.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO THANOS",
          "precio": 6291,
          "descripcion": "Figura de Thanos de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBTH01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_718670-MLA77732287701_072024-O_u2zfti.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451155/D_NQ_NP_664797-MLA77732287703_072024-O_gfjsez.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO GROOT Avengers",
          "precio": 45000,
          "descripcion": "Figura de Groot de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBGRT01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_885515-MLU73707470986_012024-O_hohumh.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451151/D_NQ_NP_737299-MLU73804322131_012024-O_sc53py.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO SHURI",
          "precio": 6291,
          "descripcion": "Figura de Shuri de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBSH01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451156/IMG_6896_sumnrc.png"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO LOKI",
          "precio": 6291,
          "descripcion": "Figura de Loki de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBLK01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451154/D_NQ_NP_644927-MLA77515855656_072024-O_ztrx0h.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_811444-MLA77732911145_072024-O_jbmki5.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO NAMOR",
          "precio": 6291,
          "descripcion": "Figura de Namor de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBNM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451155/IMG_6912_wq4ban.png"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO BLACK PANTHER",
          "precio": 6291,
          "descripcion": "Figura de Black Panther de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBBP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451155/IMG_6914_zlorrj.png"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO WOLVERINE",
          "precio": 6291,
          "descripcion": "Figura de Wolverine de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBWV01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451156/IMG_6933_jy1hyz.png"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO HULK",
          "precio": 60000,
          "descripcion": "Figura de Hulk de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBHK01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451151/D_NQ_NP_864292-MLM73980597382_012024-O_tqejcc.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722451152/D_NQ_NP_871972-MLM74129179155_012024-O_cvzspw.webp"
          ]
        },
        {
          "nombre": "HASBRO SUPER HERO VALKYRIE",
          "precio": 6291,
          "descripcion": "Figura de Valkyrie de Hasbro, ideal para fanáticos del superhéroe. Detalles precisos y alta calidad.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "250g",
          "codigo_producto": "HBVL01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722456933/D_NQ_NP_762678-MLU74413766793_022024-O_c8epdk.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722456933/D_NQ_NP_794853-MLU74413552559_022024-O_ykvhke.webp"
          ]
        },
        {
          "nombre": "FUNKO POP GAME OF THRONES",
          "precio": 8091,
          "descripcion": "Figura Funko Pop de Game of Thrones, ideal para fanáticos de la serie. Alta calidad y detalles precisos.",
          "marca": "Funko Pop",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "vinilo",
          "dimensiones": "10cm x 5cm x 5cm",
          "peso": "150g",
          "codigo_producto": "FP02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722455200/D_NQ_NP_713791-MLA74780209947_022024-O_kcv7jl.webp"
          ]
        },
        {
          "nombre": "DC FIGURA CYBORG",
          "precio": 12000,
          "descripcion": "Figura de acción de Cyborg de DC Comics. Ideal para fanáticos del superhéroe.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "DC04",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722457010/D_NQ_NP_844516-MLM74221433687_012024-O_rvtyyh.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722457010/D_NQ_NP_703065-MLU75126646173_032024-O_rqfnmt.webp"
          ]
        },
        {
          "nombre": "DC FIGURA DARK FLASH",
          "precio": 26000,
          "descripcion": "Figura de acción de Dark Flash de DC Comics. Detalles precisos y alta calidad.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "DC05",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722457169/D_NQ_NP_907863-MLU73804147623_012024-O_ozwiwg.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722457168/D_NQ_NP_817730-MLU71052330008_082023-O_t24cur.webp"
          ]
        },
        {
          "nombre": "Flash Figura de 30 cm",
          "precio": 26000,
          "descripcion": "Figura de acción de Flash de 30 cm, con detalles precisos y articulaciones móviles.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 6,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "250g",
          "codigo_producto": "DC03",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724420793/D_NQ_NP_610386-MLU74136904180_012024-O_o9uh4w.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724420793/D_NQ_NP_660475-MLA74652847734_022024-O_tjn3eb.webp"
          ]
        },
        {
          "nombre": "DC FIGURA HAWKMAN BLACK ADAM",
          "precio": 26000,
          "descripcion": "Figura de acción de Hawkman de Black Adam de DC Comics. Figura de 30cm con detalles impresionantes.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "DC06",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459174/D_NQ_NP_745553-MLA51555122198_092022-O_qyrqli.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459174/D_NQ_NP_645193-MLA51555038720_092022-O_sngbnw.webp"
          ]
        },
        {
          "nombre": "DC FIGURA BAT-TECH BATMAN",
          "precio": 26000,
          "descripcion": "Figura de acción de Batman de DC Comics. Figura de 30cm con tecnología Bat-Tech.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "DC07A",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459685/D_NQ_NP_681166-MLA50030049083_052022-O_tqv6zu.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459684/D_NQ_NP_604649-MLA50029888953_052022-O_hv8adn.webp"
          ]
        },
        {
          "nombre": "DC FIGURA BAT-TECH TACTICAL BATMAN",
          "precio": 26000,
          "descripcion": "Figura de acción de Tactical Batman de DC Comics. Figura de 30cm con tecnología Bat-Tech.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "DC07B",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459678/D_NQ_NP_706606-MLA48746910238_012022-O_wf7rrs.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459679/D_NQ_NP_825620-MLA48746927077_012022-O_lwyiub.webp"
          ]
        },
        {
          "nombre": "DC FIGURA BATMAN",
          "precio": 26000,
          "descripcion": "Figura de Batman de DC Comics. Figura de 30cm con detalles precisos.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "DC08",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459678/D_NQ_NP_734915-MLA50415579553_062022-O_jwi4lq.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722459678/D_NQ_NP_770371-MLA50415493945_062022-O_yxzxxl.webp"
          ]
        },
        {
          "nombre": "TEJO FUTBOL",
          "precio": 11900,
          "descripcion": "Juego de tejo con temática de fútbol. Ideal para disfrutar con amigos y familia.",
          "marca": "Generic",
          "edad": "6+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "40cm x 20cm x 10cm",
          "peso": "700g",
          "codigo_producto": "TF01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722462173/D_NQ_NP_981394-MLA44431402497_122020-O_l80ruw.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722462174/D_NQ_NP_632087-MLA44431402495_122020-O_w1lfbw.webp"
          ]
        },
        {
          "nombre": "DENTADURAS",
          "precio": 4000,
          "descripcion": "Juego de dentaduras para juego de rol. Diviértete creando personajes únicos.",
          "marca": "Generic",
          "edad": "6+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 5cm",
          "peso": "150g",
          "codigo_producto": "DT01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722462765/wisiorki-i-breloki-zabek-mix_zt8ei6.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722462766/wisiorki-i-breloki-zabek-mix_1_wy0xgy.jpg"
          ]
        },
        {
          "nombre": "CATAN EXPANSIÓN",
          "precio": 4000,
          "descripcion": "Juego de estrategia de expansión del Catan. Añade más jugadores y aumenta la diversión.",
          "marca": "Generic",
          "edad": "8+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 5cm",
          "peso": "150g",
          "codigo_producto": "CT01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722462038/Catan-Ampliaci%C3%B3n-5-6-Jugadores-1-con-LOGO_e1hmqq.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722462037/Catan-Ampliaci%C3%B3n-5-6-Jugadores-2-con-LOGO_rvuo2a.jpg"
          ]
        },
        {
          "nombre": "BINGO LOTTO TÓMBOLA",
          "precio": 4000,
          "descripcion": "Prepárate para emocionar con el juego de azar Bingo Lotto Tómbola. Perfecto para reuniones familiares o con amigos, ofreciendo horas de entretenimiento. Reúne a algunos amigos, elige una carta de la suerte y toma algunos contadores para prepararte para un juego de bingo. Gira la tómbola para revelar tus números de la suerte y, si coinciden con los de tu cartón, cúbrelos con un contador. ¡El primer jugador en conseguir cinco en fila gana!",
          "marca": "Generic",
          "edad": "8+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "21cm x 20cm x 10cm",
          "peso": "150g",
          "codigo_producto": "BLT01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722463170/ff.jpg_m4u3vs.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722463171/Hd76a125a3f2c4d41a477d145955e5b40A_p7irmg.webp"
          ]
        },
        {
          "nombre": "Maletin Veterinario",
          "precio": 37000,
          "descripcion": "Maletin con kit de veterinario. Incluye herramientas y accesorios para el cuidado de mascotas de juguete.",
          "marca": "Roma",
          "edad": "3+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 20cm x 10cm",
          "peso": "350g",
          "codigo_producto": "MV01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724421391/Nivalmix-Maleta-Doutor-Canino-Maleta-Vermelha-Roma-Jensen-2330923-003_1_smctak.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724421391/Nivalmix-Maleta-Doutor-Canino-Maleta-Vermelha-Roma-Jensen-2330923-003_1_smctak.webp"
          ]
        },
        {
          "nombre": "Mochila Doctor",
          "precio": 37000,
          "descripcion": "Mochila con kit de doctor. Contiene instrumentos médicos de juguete para juego de roles.",
          "marca": "Fisher-Price",
          "edad": "3+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 20cm x 10cm",
          "peso": "350g",
          "codigo_producto": "MD01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724422375/EMZlhjgA1607922876-1000x1000_cn01dg.jpg"
          ]
        },
        {
          "nombre": "Mochila Peluqueria",
          "precio": 37000,
          "descripcion": "Mochila con kit de chef. Incluye utensilios de cocina de juguete para que los niños puedan cocinar.",
          "marca": "Fisher-Price",
          "edad": "3+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 20cm x 10cm",
          "peso": "350g",
          "codigo_producto": "MC01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724422339/11-02244-2_mwkzdf.jpg"
          ]
        },
        {
          "nombre": "Mochila Chef",
          "precio": 37000,
          "descripcion": "Mochila con kit de chef. Incluye utensilios de cocina de juguete para que los niños puedan cocinar.",
          "marca": "Fisher-Price",
          "edad": "3+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 20cm x 10cm",
          "peso": "350g",
          "codigo_producto": "MC01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724422297/0f7f6a6d292732a128e889b7be9e429b_xnqikk.jpg"
          ]
        },
        {
          "nombre": "Juego de la Selva Peligrosa con 2 Muñecos",
          "precio": 30000,
          "descripcion": "Juego de la selva peligrosa con 2 muñecos incluidos. Ideal para aventuras imaginativas en la jungla.",
          "marca": "Disney",
          "edad": "4+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "40cm x 30cm x 15cm",
          "peso": "600g",
          "codigo_producto": "JS01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724422991/D_NQ_NP_936102-MLU71081355211_082023-O_e19yt5.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724422990/D_NQ_NP_629273-MLU71081355205_082023-O_nvf1nn.webp"
          ]
        },
        {
          "nombre": "Figura Nick Wilde 25 cm",
          "precio": 23000,
          "descripcion": "Figura de Nick Wilde de 25 cm de alto. Detalles precisos y articulaciones para posiciones dinámicas.",
          "marca": "Disney",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 5cm",
          "peso": "200g",
          "codigo_producto": "NW01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724423188/D_NQ_NP_981569-MLA46725241674_072021-O_k2y83h.webp"
          ]
        },
        {
          "nombre": "Figura Judy 25 cm",
          "precio": 23000,
          "descripcion": "Figura de Judy de 25 cm de alto. Alta calidad de detalles y articulaciones móviles.",
          "marca": "Disney",
          "edad": "3+",
          "categoria": "figura",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 5cm",
          "peso": "200g",
          "codigo_producto": "JY01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724423188/D_NQ_NP_997447-MLA46725241673_072021-O_dxfype.webp"
          ]
        },
      
        {
          "nombre": "Pista Metal Machines T-Rex Attack",
          "precio": 45000,
          "descripcion": "Pista de Metal Machines con tema de ataque de T-Rex. Incluye autos y obstáculos para emocionantes carreras.",
          "marca": "Metal Machines",
          "edad": "5+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico y metal",
          "dimensiones": "60cm x 40cm x 20cm",
          "peso": "800g",
          "codigo_producto": "MM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724423500/D_NQ_NP_834324-MLU73202184072_122023-O_hcsol9.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724423500/D_NQ_NP_834324-MLU73202184072_122023-O_hcsol9.webp"
          ]
        },
        {
          "nombre": "Playmobil Dúo",
          "precio": 30000,
          "descripcion": "Set de Playmobil Dúo. Incluye dos figuras con accesorios para jugar y coleccionar.",
          "marca": "Playmobil",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 5,
          "material": "plástico",
          "dimensiones": "20cm x 15cm x 5cm",
          "peso": "150g",
          "codigo_producto": "PM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724423963/D_NQ_NP_981876-MLA44429524783_122020-O_xn5imb.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724423963/D_NQ_NP_796102-MLU71275538787_082023-O_u3ewug.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724423963/D_NQ_NP_706445-MLA75750301212_042024-O_fnsdew.webp"
          ]
        },
      
        {
          "nombre": "DC Red Hood 30 cm",
          "precio": 28000,
          "descripcion": "Figura de acción de 30 cm de Red Hood, uno de los personajes más icónicos de DC Comics.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "250g",
          "codigo_producto": "DC01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724424149/D_NQ_NP_2X_641100-MLA71109981488_082023-F_cw6tqh.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724424150/D_NQ_NP_965912-MLU54973660743_042023-O_yb2zhx.webp"
          ]
        },
        {
          "nombre": "DC Aquaman The Lost Kingdom",
          "precio": 29000,
          "descripcion": "Figura de acción basada en la película 'Aquaman: The Lost Kingdom', con detalles precisos y alta calidad.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "250g",
          "codigo_producto": "DC02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724424253/D_NQ_NP_971892-MLA77269751824_072024-O_hymlzd.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724424253/D_NQ_NP_987326-MLA77269751814_072024-O_xzgggn.webp"
          ]
        },
      
        {
          "nombre": "Hot Wheels con Lanzador",
          "precio": 20000,
          "descripcion": "Set de Hot Wheels con lanzador, ideal para carreras emocionantes y acrobacias asombrosas.",
          "marca": "Hot Wheels",
          "edad": "5+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico y metal",
          "dimensiones": "30cm x 15cm x 10cm",
          "peso": "500g",
          "codigo_producto": "HW01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724428988/D_NQ_NP_925557-MLA78001196814_082024-O_f4vib8.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724428988/D_NQ_NP_686544-MLA78001167138_082024-O_nhsd7n.webp"
          ]
        },
        {
          "nombre": "Muñeco The Joker DC",
          "precio": 26000,
          "descripcion": "Figura de acción de The Joker, el icónico villano de DC Comics, con detalles realistas y articulaciones móviles.",
          "marca": "DC Comics",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "250g",
          "codigo_producto": "DC04",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724429209/D_NQ_NP_722785-MLA49281734566_032022-O_bhslvl.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724429210/D_NQ_NP_773013-MLA49281740575_032022-O_x4axmv.webp"
          ]
        },
        {
          "nombre": "Pepa Pig y su Familia",
          "precio": 45000,
          "descripcion": "Set de figuras de Pepa Pig y su familia, perfecto para recrear las aventuras de estos personajes adorables.",
          "marca": "Pepa Pig",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 15cm x 5cm (cada figura)",
          "peso": "500g",
          "codigo_producto": "PP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724424462/D_NQ_NP_991507-MLA75724176512_042024-O_uvunlc.webp"
          ]
        },
        {
          "nombre": "Figura De Acción Ghostbusters Peter Venkman 30cm",
          "precio": 30000,
          "descripcion": "Figura de acción de Peter Venkman de los Ghostbusters, con 30 cm de altura y detalles impresionantes.",
          "marca": "Ghostbusters",
          "edad": "6+",
          "categoria": "figura",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "300g",
          "codigo_producto": "GB01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724429483/D_NQ_NP_882088-MLA48579117043_122021-O_j2k9lp.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724429482/D_NQ_NP_964224-MLA74221449061_012024-O_phpkxu.webp"
          ]
        },
        {
          "nombre": "Pista Rondi 5 Niveles",
          "precio": 47000,
          "descripcion": "Pista de autos Rondi con 5 niveles. Incluye autos pequeños para emocionantes carreras.",
          "marca": "Rondi",
          "edad": "4+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "50cm x 40cm x 15cm",
          "peso": "1kg",
          "codigo_producto": "RD01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724429655/D_NQ_NP_970211-MLU77964712442_082024-O_e9ksqt.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724429654/D_NQ_NP_843064-MLU77964573696_082024-O_krwiya.webp"
          ]
        },
        {
          "nombre": "Pata Pata Rondi",
          "precio": 30000,
          "descripcion": "Pata Pata Rondi, perfecto para que los más pequeños se diviertan y desarrollen sus habilidades motoras.",
          "marca": "Rondi",
          "edad": "2+",
          "categoria": "vehículo infantil",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "60cm x 30cm x 40cm",
          "peso": "3kg",
          "codigo_producto": "PP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430516/D_NQ_NP_766074-MLA47260739947_082021-O_vq6yw6.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430517/D_NQ_NP_974920-MLA47262111038_082021-O_yokgwd.webp"
          ]
        },
      
        {
          "nombre": "Aro Basket Rondi",
          "precio": 20000,
          "descripcion": "Aro de basket Rondi, perfecto para los pequeños que quieren comenzar a practicar este deporte.",
          "marca": "Rondi",
          "edad": "3+",
          "categoria": "deporte",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico y metal",
          "dimensiones": "60cm x 50cm x 20cm",
          "peso": "2kg",
          "codigo_producto": "BS01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430612/D_NQ_NP_843616-MLA31035240668_062019-O_rboqil.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430611/D_NQ_NP_946133-MLA32617571244_102019-O_fp18io.webp"
          ]
        },
        {
          "nombre": "Vagón Didáctico Duravit Vehículo con Bloques de Encastre",
          "precio": 9000,
          "descripcion": "Vagón didáctico Duravit, ideal para estimular la creatividad de los más pequeños con bloques de encastre.",
          "marca": "Duravit",
          "edad": "1+",
          "categoria": "juguete didáctico",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "40cm x 25cm x 20cm",
          "peso": "1kg",
          "codigo_producto": "DV01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430720/D_NQ_NP_670930-MLU72637468011_112023-O_xorpvt.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430722/D_NQ_NP_2X_808722-MLU73130176918_122023-F_d60p6i.webp"
          ]
        },
        {
          "nombre": "Figura Spider-man Titan Hero Series Miles Morales 30cm",
          "precio": 45000,
          "descripcion": "Figura de acción de 30 cm de Miles Morales en la serie Titan Hero, ideal para los fanáticos de Spider-Man.",
          "marca": "Marvel",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 4,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "300g",
          "codigo_producto": "TH01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430772/D_NQ_NP_747855-MLU72564877338_112023-O_rwvmok.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724430773/24144904_1_mcgmkl.jpg"
          ]
        },
        {
          "nombre": "Auto Metal Machines Color Change Cambia Color",
          "precio": 9000,
          "descripcion": "Auto Metal Machines que cambia de color al sumergirlo en agua fría o caliente. Emocionante para los fanáticos de los autos.",
          "marca": "Metal Machines",
          "edad": "3+",
          "categoria": "vehículo de juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "metal y plástico",
          "dimensiones": "7cm x 3cm x 2cm",
          "peso": "50g",
          "codigo_producto": "MM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724431812/D_NQ_NP_754843-MLA75685844913_042024-O_py5hft.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724431809/D_NQ_NP_683950-MLA78399070718_082024-O_x7ha30.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724431808/D_NQ_NP_877789-MLA75685330379_042024-O_xmsss8.webp"
          ]
        },
        {
          "nombre": "Hot Wheels Pack X 5 Autos",
          "precio": 22000,
          "descripcion": "Pack de 5 autos Hot Wheels, perfecto para los coleccionistas y entusiastas de las carreras.",
          "marca": "Hot Wheels",
          "edad": "3+",
          "categoria": "vehículo de juguete",
          "disponibilidad": true,
          "stock": 5,
          "material": "metal y plástico",
          "dimensiones": "7cm x 3cm x 2cm (cada auto)",
          "peso": "250g",
          "codigo_producto": "HW02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432180/D_664904-MLA75134093589_032024-C_i1vk6m.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432185/5936094-800-auto_ihdowe.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432181/5936093-800-auto_kwo9oe.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432188/5939289-800-auto_nxtbib.webp"
          ]
        },
        {
          "nombre": "Muñeco Venom Original Hasbro Marvel Avengers",
          "precio": 60000,
          "descripcion": "Figura de acción de Venom de la serie Marvel Avengers, con detalles realistas y articulaciones móviles.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "300g",
          "codigo_producto": "MV01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432294/D_NQ_NP_794105-MLA77778714586_072024-O_ywhijx.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432297/D_NQ_NP_714752-MLA77778794046_072024-O_kzltcz.webp"
          ]
        },
        {
          "nombre": "Locomotora De Arrastre Didáctica Primera Infancia Duravit",
          "precio": 7000,
          "descripcion": "Locomotora de arrastre didáctica de la primera infancia, ideal para estimular la coordinación y el aprendizaje.",
          "marca": "Duravit",
          "edad": "1+",
          "categoria": "juguete didáctico",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 15cm x 10cm",
          "peso": "400g",
          "codigo_producto": "LD01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432399/D_NQ_NP_926571-MLU77826290191_072024-O_f2pa8n.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432402/D_NQ_NP_709004-MLU77826240885_072024-O_ijmi6k.webp"
          ]
        },
        {
          "nombre": "Blocky Policias Super Balde 120 Piezas Para Armar Original",
          "precio": 22000,
          "descripcion": "Super balde de 120 piezas Blocky para armar una emocionante ciudad de policías. Ideal para desarrollar la creatividad y habilidades motoras.",
          "marca": "Blocky",
          "edad": "3+",
          "categoria": "juguete de construcción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 20cm x 20cm",
          "peso": "1kg",
          "codigo_producto": "BLK01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432607/D_NQ_NP_825320-MLA50820307592_072022-O_svn6tm.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432587/D_NQ_NP_610244-MLA50820307591_072022-O_xd03hu.webp"
          ]
        },
        {
          "nombre": "Blocky ciudad Super Balde 120 Piezas Para Armar Original",
          "precio": 22000,
          "descripcion": "Super balde de 120 piezas Blocky para armar una ciudad completa. Fomenta la creatividad y la construcción en los niños.",
          "marca": "Blocky",
          "edad": "3+",
          "categoria": "juguete de construcción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 20cm x 20cm",
          "peso": "1kg",
          "codigo_producto": "BLK02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432609/D_NQ_NP_843333-MLA31027965838_062019-O_vplyum.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432595/D_NQ_NP_722232-MLA31027966801_062019-O_pzarby.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432603/D_NQ_NP_746899-MLA31027966800_062019-O_yvrnen.webp"
          ]
        },
        {
          "nombre": "Balde De Bloques De 100 Piezas Blocky bomberos",
          "precio": 25000,
          "descripcion": "Balde de 100 piezas Blocky para armar una emocionante escena de bomberos. Desarrolla la creatividad y la motricidad fina.",
          "marca": "Blocky",
          "edad": "3+",
          "categoria": "juguete de construcción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 20cm x 20cm",
          "peso": "1kg",
          "codigo_producto": "BLK03",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432590/D_NQ_NP_630165-MLU72700066187_112023-O_eknisw.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432600/D_NQ_NP_743919-MLA50134719934_052022-O_zguhq3.webp"
          ]
        },
        {
          "nombre": "Blocky Balde Ciudad Encantada Rosa 100 Piezas",
          "precio": 22000,
          "descripcion": "Balde de 100 piezas Blocky para armar una encantadora ciudad rosa. Ideal para estimular la creatividad y la imaginación.",
          "marca": "Blocky",
          "edad": "3+",
          "categoria": "juguete de construcción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 20cm x 20cm",
          "peso": "1kg",
          "codigo_producto": "BLK04",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432594/D_NQ_NP_688016-MLU74136916386_012024-O_twmvif.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432614/D_NQ_NP_985090-MLA51964904263_102022-O_jmjiek.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724432617/D_NQ_NP_736974-MLA51964904264_102022-O_eq3thx.webp"
          ]
        },
        {
          "nombre": "Playmobil 9468 Bomberos Bomba De Agua Funcionamiento Real",
          "precio": 45000,
          "descripcion": "Set de bomberos Playmobil con bomba de agua que funciona de verdad. Incluye figuras y accesorios para recrear escenas de rescate.",
          "marca": "Playmobil",
          "edad": "4+",
          "categoria": "juguete de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 25cm x 10cm",
          "peso": "800g",
          "codigo_producto": "PM9468",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724433091/D_NQ_NP_903513-MLA52145195524_102022-O_g4hqhl.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724433092/D_NQ_NP_2X_946220-MLA52696098661_122022-F_rouaos.webp"
          ]
        },
        {
          "nombre": "THOR ENDGAME",
          "precio": 45000,
          "descripcion": "Figura de acción de Thor Endgame.",
          "marca": "Marvel",
          "edad": "6+",
          "categoria": "juguete",
          "disponibilidad": "en stock",
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "300g",
          "codigo_producto": "TE01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722429825/IMG_7269_hypldp.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722430171/IMG_7276_o9re1l.png"
          ]
        },
        {
          "nombre": "LIGHTYEAR BUZZ",
          "precio": 25000,
          "descripcion": "Figura de Buzz Lightyear de la película Lightyear.",
          "marca": "Disney",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": "en stock",
          "stock": 3,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 5cm",
          "peso": "200g",
          "codigo_producto": "LB01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722431088/D_NQ_NP_872261-MLU69433966130_052023-O_shaktt.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722431089/D_NQ_NP_704303-MLU69433966134_052023-O_n0hbcr.webp"
          ]
        },
        {
          "nombre": "BUZZ LY ORIGINAL",
          "precio": 25000,
          "descripcion": "Figura original de Buzz Lightyear.",
          "marca": "Disney",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": "en stock",
          "stock": 3,
          "material": "plástico",
          "dimensiones": "30cm x 15cm x 10cm",
          "peso": "500g",
          "codigo_producto": "BO01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722432554/D_NQ_NP_962681-MLU53174992742_012023-O_r239ol.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722432555/D_NQ_NP_813073-MLA74118276390_012024-O_oqwdoi.webp"
          ]
        },
        {
          "nombre": "BUZZ TRAJE CASCO",
          "precio": 25000,
          "descripcion": "Figura de Buzz Lightyear con traje y casco.",
          "marca": "Disney",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": "en stock",
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 15cm x 10cm",
          "peso": "500g",
          "codigo_producto": "BT01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722431907/187135-800-auto_ub6ujs.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1722431907/187134-800-auto_ueocxo.webp"
          ]
        },
        {
          "nombre": "Figura De Accion Marvel Iron Man 25 Cm Hasbro",
          "precio": 45000,
          "descripcion": "Figura de acción de Iron Man, 25 cm, original de Hasbro. Perfecta para los fanáticos de Marvel y los superhéroes.",
          "marca": "Hasbro",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 10cm x 8cm",
          "peso": "300g",
          "codigo_producto": "AVIM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724433233/D_NQ_NP_832032-MLA75928701562_042024-O_zj7ex2.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724433230/D_NQ_NP_825972-MLA76104966533_042024-O_dtkf91.webp"
          ]
        },
        {
          "nombre": "Polly Pocket juguete Individual 9 Cm Mattel",
          "precio": 12000,
          "descripcion": "juguete individual Polly Pocket de 9 cm, original de Mattel. Ideal para coleccionar y jugar con el mundo en miniatura de Polly Pocket.",
          "marca": "Mattel",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 9,
          "material": "plástico",
          "dimensiones": "9cm x 4cm x 2cm",
          "peso": "50g",
          "codigo_producto": "PP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439352/D_NQ_NP_672013-MLA70490214876_072023-O_qrpcam.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439351/D_NQ_NP_628484-MLA70489960252_072023-O_mlefzy.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439351/D_NQ_NP_836613-MLA70516370141_072023-O_i53bsj.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439351/D_NQ_NP_657448-MLA70516510407_072023-O_voeokt.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439352/D_NQ_NP_627755-MLA70516483245_072023-O_poh2xq.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439351/D_NQ_NP_853801-MLA70516483243_072023-O_fypvvo.webp"
          ]
        },
        {
          "nombre": "Escopeta Lanza Dardos X-Shot Hawk Eye",
          "precio": 30000,
          "descripcion": "Escopeta lanza dardos X-Shot Hawk Eye, ideal para juegos de acción. Incluye dardos y un mecanismo preciso para la mejor experiencia de tiro.",
          "marca": "X-Shot",
          "edad": "6+",
          "categoria": "juguete de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "50cm x 15cm x 5cm",
          "peso": "500g",
          "codigo_producto": "XSHE01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440132/D_NQ_NP_714365-MLA53142961328_012023-O_xwnzwp.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440131/D_NQ_NP_843196-MLA53142978329_012023-O_nnphj7.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440130/D_NQ_NP_838774-MLA53142948415_012023-O_axrs3o.webp"
          ]
        },
        {
          "nombre": "Escopeta Lanza Dardos X-Shot Hawk Eye x8",
          "precio": 17000,
          "descripcion": "Escopeta lanza dardos X-Shot Hawk Eye con 8 dardos adicionales. Perfecta para aumentar la diversión en los juegos de acción.",
          "marca": "X-Shot",
          "edad": "6+",
          "categoria": "juguete de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "50cm x 15cm x 5cm",
          "peso": "500g",
          "codigo_producto": "XSHE02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440132/D_NQ_NP_714365-MLA53142961328_012023-O_xwnzwp.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440131/D_NQ_NP_843196-MLA53142978329_012023-O_nnphj7.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440130/D_NQ_NP_838774-MLA53142948415_012023-O_axrs3o.webp"
          ]
        },
        {
          "nombre": "Escopeta Lanza Dardos X-Shot Hawk Eye x12",
          "precio": 23000,
          "descripcion": "Escopeta lanza dardos X-Shot Hawk Eye con 12 dardos. Ideal para juegos de acción con mayor capacidad de tiro.",
          "marca": "X-Shot",
          "edad": "6+",
          "categoria": "juguete de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "50cm x 15cm x 5cm",
          "peso": "550g",
          "codigo_producto": "XSHE03",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440132/D_NQ_NP_714365-MLA53142961328_012023-O_xwnzwp.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440131/D_NQ_NP_843196-MLA53142978329_012023-O_nnphj7.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440130/D_NQ_NP_838774-MLA53142948415_012023-O_axrs3o.webp"
          ]
        },
        {
          "nombre": "Pistola Zuru X-shot Lanza Dardos Dino Striker X16",
          "precio": 25000,
          "descripcion": "Pistola lanza dardos Zuru X-shot Dino Striker con capacidad para 16 dardos. Perfecta para los pequeños aventureros.",
          "marca": "Zuru",
          "edad": "6+",
          "categoria": "juguete de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 10cm x 4cm",
          "peso": "350g",
          "codigo_producto": "ZSDS01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440337/D_NQ_NP_757659-MLA70662248293_072023-O_hvevnm.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440338/D_NQ_NP_730108-MLA70633452546_072023-O_vtvfly.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440338/D_NQ_NP_638580-MLA70633579614_072023-O_mqntjl.webp"
          ]
        },
        {
          "nombre": "Pistola Zuru X-shot Lanza Dardos Dino Striker X8",
          "precio": 15000,
          "descripcion": "Pistola lanza dardos Zuru X-shot Dino Striker con capacidad para 8 dardos. Ideal para juegos de acción rápidos y divertidos.",
          "marca": "Zuru",
          "edad": "6+",
          "categoria": "juguete de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "25cm x 8cm x 4cm",
          "peso": "300g",
          "codigo_producto": "ZSDS02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440338/D_NQ_NP_730108-MLA70633452546_072023-O_vtvfly.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724440338/D_NQ_NP_638580-MLA70633579614_072023-O_mqntjl.webp"
          ]
        },
        {
          "nombre": "Súperman 50cm",
          "precio": 50000,
          "descripcion": "Figura de acción de Súperman de 50 cm, ideal para los fanáticos de DC Comics. Perfecto para recrear escenas heroicas.",
          "marca": "DC Comics",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "50cm x 20cm x 10cm",
          "peso": "700g",
          "codigo_producto": "DCSP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724441396/90_boneco_superman_1098_brinquedos_rosita_4429_2_f654c2c35cdd306060a8ac641a56c922_bv9gze.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724441396/90_boneco_superman_1098_brinquedos_rosita_4429_4_1042263736d93874aaa05f288a34d46b_gv7nmm.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724441396/90_boneco_superman_1098_brinquedos_rosita_4429_1_4efc0669c014d283e8feb5b9ef0debb9_sy6q6w.jpg"
          ]
        },
        {
          "nombre": "Batman 50 cm",
          "precio": 50000,
          "descripcion": "Figura de acción de Batman de 50 cm, un imprescindible para los fanáticos de DC Comics. Ideal para recrear batallas épicas.",
          "marca": "DC Comics",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "50cm x 20cm x 10cm",
          "peso": "700g",
          "codigo_producto": "DCBM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724441453/180_boneco_batman_40cm_baby_brink_baby_brink_e_brinquedos_rosita_531_1_0e6b8a4992311017ec7705ec1d390e28_r6s0yo.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724441454/180_boneco_batman_40cm_baby_brink_baby_brink_e_brinquedos_rosita_531_2_c44e33aba529d21bba257c72441aa880_coodxo.jpg"
          ]
        },
        {
          "nombre": "Flash 50cm",
          "precio": 50000,
          "descripcion": "Figura de acción de Flash de 50 cm, ideal para los fanáticos de Marvel. Perfecto para recrear escenas heroicas.",
          "marca": "Marvel",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "50cm x 20cm x 10cm",
          "peso": "700g",
          "codigo_producto": "MIM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724442045/BONECO-ROSITA-FLASH-1097_2_gsuegh.jpg",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724442045/BONECO-ROSITA-FLASH-1097_1_pwfxun.jpg"
          ]
        },
        {
          "nombre": "Thor 50 cm",
          "precio": 150000,
          "descripcion": "Figura de acción de Thor de 50 cm, un imprescindible para los fanáticos de Marvel. Ideal para recrear batallas épicas.",
          "marca": "Marvel",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "50cm x 20cm x 10cm",
          "peso": "700g",
          "codigo_producto": "MTH01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724442094/D_NQ_NP_874365-MLA51933267898_102022-O_cyntzo.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724442094/D_NQ_NP_864452-MLA51933404343_102022-O_oj6jsd.webp"
          ]
        },
        {
          "nombre": "Máscara Iron Man Ditoys",
          "precio": 12000,
          "descripcion": "Máscara de Iron Man de Ditoys, ideal para disfraces y juegos de rol. Ofrece un diseño detallado y ajustable.",
          "marca": "Ditoys",
          "edad": "6+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 20cm x 10cm",
          "peso": "200g",
          "codigo_producto": "DT01",
          "imagen": [
            "Uhttps://res.cloudinary.com/dxsl6lphv/image/upload/v1724453061/D_NQ_NP_682091-MLU72576475260_112023-O_qwqh2s.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724453060/D_NQ_NP_632408-MLU75164504209_032024-O_f3afa6.webp"
          ]
        },
        {
          "nombre": "Hombre Araña Ditoys",
          "precio": 12000,
          "descripcion": "Figura de Hombre Araña de Ditoys, perfecta para los fanáticos del trepador arácnido. Diseño detallado y adecuado para coleccionistas.",
          "marca": "Ditoys",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 10cm x 5cm",
          "peso": "250g",
          "codigo_producto": "DT02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724453060/D_NQ_NP_771547-MLA75664466440_042024-O_s4ypvj.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724453060/D_NQ_NP_639652-MLA78017057489_072024-O_w8brrh.webp"
          ]
        },
        {
          "nombre": "Máscara Hombre Araña Hasbro",
          "precio": 30000,
          "descripcion": "Máscara de Hombre Araña de Hasbro, ideal para disfraces y juegos de rol. Ofrece un diseño detallado y ajuste cómodo.",
          "marca": "Hasbro",
          "edad": "6+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "22cm x 22cm x 10cm",
          "peso": "250g",
          "codigo_producto": "HS02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724453060/D_NQ_NP_771547-MLA75664466440_042024-O_s4ypvj.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724453060/D_NQ_NP_639652-MLA78017057489_072024-O_w8brrh.webp"
          ]
        },
        {
          "nombre": "Playmobil Cemento",
          "precio": 140000,
          "descripcion": "Set de Playmobil Cemento, ideal para recrear escenarios de construcción con detalles realistas. Incluye figuras y accesorios.",
          "marca": "Playmobil",
          "edad": "4+",
          "categoria": "juego de construcción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "40cm x 30cm x 20cm",
          "peso": "1kg",
          "codigo_producto": "PM01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501485/D_NQ_NP_638128-MLA73196075773_122023-O_sdk2yk.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501485/D_NQ_NP_830706-MLA74193914652_012024-O_zsj4xc.webp"
          ]
        },
        {
          "nombre": "City Action Avión Policía",
          "precio": 150000,
          "descripcion": "Avión de policía City Action, ideal para operaciones de rescate en la ciudad. Incluye accesorios y detalles realistas.",
          "marca": "City Action",
          "edad": "4+",
          "categoria": "juego de construcción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "35cm x 25cm x 15cm",
          "peso": "800g",
          "codigo_producto": "CA01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501485/D_NQ_NP_827543-MLA53075005317_122022-O_obvdte.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501485/D_NQ_NP_901434-MLA53074935836_122022-O_al6b5i.webp"
          ]
        },
        {
          "nombre": "Playmobil 123 Coche Zoo Con Remolque De Caballo",
          "precio": 80000,
          "descripcion": "Coche Playmobil 123 con remolque de caballo y accesorios para el zoo. Ideal para juegos educativos y recreativos.",
          "marca": "Playmobil",
          "edad": "1+",
          "categoria": "juego de construcción",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "30cm x 20cm x 15cm",
          "peso": "600g",
          "codigo_producto": "PM12301",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501485/D_NQ_NP_699922-MLA74192670278_012024-O_qj8tl8.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501486/D_NQ_NP_775482-MLA73731050828_012024-O_cmrdks.webp"
          ]
        },
        {
          "nombre": "Mamá con Mellizos",
          "precio": 35000,
          "descripcion": "Figura de mamá con mellizos, ideal para recrear escenarios familiares. Detalles realistas y materiales seguros para niños.",
          "marca": "Playmobil",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "12cm x 8cm x 6cm",
          "peso": "250g",
          "codigo_producto": "PM02",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501485/D_NQ_NP_776480-MLA44439219015_122020-O_wji9pd.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501486/D_NQ_NP_841033-MLU71275538713_082023-O_a7qjes.webp"
          ]
        },
        {
          "nombre": "Playmobil Sorpresitas",
          "precio": 22000,
          "descripcion": "Sorpresitas Playmobil, colección de figuras y accesorios sorpresivos. Perfecto para coleccionistas y fanáticos.",
          "marca": "Playmobil",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "10cm x 5cm x 5cm",
          "peso": "100g",
          "codigo_producto": "PM03",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501486/D_NQ_NP_970327-MLA44459106578_122020-O_ou5rrk.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724501486/D_NQ_NP_885498-MLA44459088833_122020-O_gsgel2.webp"
          ]
        },
        {
          "nombre": "Playmobil Special Plus",
          "precio": 21000,
          "descripcion": "Playmobil Special Plus, set con figuras y accesorios especiales. Perfecto para coleccionistas y entusiastas de Playmobil.",
          "marca": "Playmobil",
          "edad": "4+",
          "categoria": "figura de acción",
          "disponibilidad": true,
          "stock": 5,
          "material": "plástico",
          "dimensiones": "15cm x 10cm x 5cm",
          "peso": "300g",
          "codigo_producto": "PM05",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724503730/D_NQ_NP_710692-MLA52195658837_102022-O_zsfjk5.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724503730/D_NQ_NP_746486-MLA77064176641_062024-O_jxq7il.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724503730/D_NQ_NP_603474-MLA77064146999_062024-O_z8xh4w.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724503730/D_NQ_NP_880346-MLA77064176663_062024-O_wqvs7c.webp"
          ]
        },
        {
          "nombre": "Flokys juguetes",
          "precio": 4500,
          "descripcion": "Flokys juguetes, adorables juguetes con detalles tiernos y materiales suaves. Ideal para niños y coleccionistas.",
          "marca": "Flokys",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 5,
          "material": "plástico",
          "dimensiones": "10cm x 5cm x 5cm",
          "peso": "150g",
          "codigo_producto": "FLO01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724504292/D_NQ_NP_669235-MLU74274945171_012024-O_whspqs.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724504292/D_NQ_NP_856202-MLA44971217747_022021-O_swntua.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724504291/D_NQ_NP_769046-MLA50820052381_072022-O_lvfjim.webp"
          ]
        },
        {
          "nombre": "Polly Pocket Disfraces",
          "precio": 40000,
          "descripcion": "Polly Pocket con disfraces adicionales, incluye varios trajes para cambiar y personalizar a la juguete.",
          "marca": "Polly Pocket",
          "edad": "4+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "8cm x 6cm x 4cm",
          "peso": "150g",
          "codigo_producto": "PP02",
          "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725577274/D_NQ_NP_876170-MLA77343394041_062024-O_zwvqfy.webp"]
        },
        {
          "nombre": "Dinosaurio a Cuerda",
          "precio": 5500,
          "descripcion": "Dinosaurio a cuerda que camina cuando se le da cuerda. Divertido y fácil de usar.",
          "marca": "Dino Toys",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 2,
          "material": "plástico",
          "dimensiones": "15cm x 8cm x 5cm",
          "peso": "100g",
          "codigo_producto": "DC01",
          "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725577229/D_NQ_NP_603395-MLA49264175283_032022-O_y51hyk.webp"]
        },
        {
          "nombre": "Maletín",
          "precio": 50000,
          "descripcion": "Elegante maletín para transportar y organizar tus pertenencias de manera segura.",
          "marca": "Executive Gear",
          "edad": "N/A",
          "categoria": "accesorios",
          "disponibilidad": true,
          "stock": 1,
          "material": "cuero y metal",
          "dimensiones": "45cm x 35cm x 10cm",
          "peso": "1.2kg",
          "codigo_producto": "MG01",
          "imagen": ["Uhttps://res.cloudinary.com/dxsl6lphv/image/upload/v1725576998/D_NQ_NP_698190-MLA42271662646_062020-O_ihnz8u.webp"]
        },
        {
          "nombre": "Monopatín",
          "precio": 38000,
          "descripcion": "Monopatín resistente, ideal para principiantes y avanzados. Con un diseño llamativo y ruedas de alta calidad.",
          "marca": "SkatePro",
          "edad": "8+",
          "categoria": "juego",
          "disponibilidad": true,
          "stock": 2,
          "material": "madera y metal",
          "dimensiones": "80cm x 20cm x 10cm",
          "peso": "2.5kg",
          "codigo_producto": "SP01",
          "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725576564/172567-800-800_i1xagn.webp"]
        },
        {
          "nombre": "Fisher Price Estimulación Temprana Auto De Descubrimiento",
          "precio": 35000,
          "descripcion": "Auto de descubrimiento Fisher Price diseñado para la estimulación temprana, con luces y sonidos para los más pequeños.",
          "marca": "Fisher Price",
          "edad": "6 meses+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico",
          "dimensiones": "20cm x 15cm x 10cm",
          "peso": "500g",
          "codigo_producto": "FP01",
          "imagen": ["https://res.cloudinary.com/dxsl6lphv/image/upload/v1725576997/D_NQ_NP_718842-MLA52284489552_112022-O_hgr2a7.webp", "https://res.cloudinary.com/dxsl6lphv/image/upload/v1725576998/D_NQ_NP_792086-MLA52081770832_102022-O_blvop8.webp"]
        },
        {
          "nombre": "juguete Princesas Rapunzel 30 Cm Disney Original Mattel",
          "precio": 45000,
          "descripcion": "juguete de Rapunzel de 30 cm, original de Disney y Mattel. Perfecta para recrear escenas del clásico cuento de hadas.",
          "marca": "Mattel",
          "edad": "3+",
          "categoria": "juguete",
          "disponibilidad": true,
          "stock": 1,
          "material": "plástico y tela",
          "dimensiones": "30cm x 10cm x 5cm",
          "peso": "250g",
          "codigo_producto": "RAP01",
          "imagen": [
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439352/D_NQ_NP_964159-MLA76489852791_052024-O_zyjzla.webp",
            "https://res.cloudinary.com/dxsl6lphv/image/upload/v1724439351/D_NQ_NP_746271-MLA76299687918_052024-O_nvjswu.webp"
          ]
        }
      
      
]);


