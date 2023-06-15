

import {
  GET_BRANDS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_SUB_CATEGORIES,
  USERS_ERROR,
  // GET_FILTERED_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  GET_PRODUCT_BY_ID,
  SET_USER_STATE,
  SET_USER_INFO,
  ADD_CARRITO,
  DELETE_CARRITO,
  SET_CARRITO,
  ADD_COMMENT,
  CLEAR_USER_DATA,
} from "./actions";

export const initialState = {
  // products: [
  //   {
  //     id: "162rxEEChj4y0fIbxgRV",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     name: "Unico",
  //     brand: "Millex",
  //     category: "aves",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     subCategory: "Jaulas y Nidos",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     price: 350,
  //   },
  //   {
  //     id: "1Hk7fsv9MMGtIpLbChGn",
  //     category: "perros",
  //     price: 2230,
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //     image_url: "https://www.puppis.com.ar/polera-kika-sorf-rojo/p",
  //     brand: "Kika Dog",
  //     name: "Polera Kika Sorf Rojo",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/176526-150-150/216035.jpg?v=637546240223400000",
  //     subCategory: "Ropa",
  //   },
  //   {
  //     id: "1Mmh47ICCNjUCKPhS0gj",
  //     name: "Comedero Brava Transparente Para Aves",
  //     subCategory: "Jaulas y Nidos",
  //     price: 860,
  //     category: "aves",
  //     brand_url: "https://www.puppis.com.ar/ferplast",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/162188-150-150/Comedero-Brava-Transparente-Para-Aves-N%C2%BA1.jpg?v=636480717226900000",
  //     image_url:
  //       "https://www.puppis.com.ar/comedero-brava-transparente-para-aves/p",
  //     brand: "Ferplast",
  //   },
  //   {
  //     id: "1NGvxkv059VYHFHL3oeb",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //     price: 8370,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175142-150-150/232321.png?v=637466597082230000",
  //     brand_url: "https://www.puppis.com.ar/boyu",
  //     brand: "Boyu",
  //     image_url:
  //       "https://www.puppis.com.ar/alimentador-automatico-boyu-digital/p",
  //     category: "peces",
  //     name: "Alimentador Automatico Boyu Digital",
  //   },
  //   {
  //     id: "1ZRY5MnJqZ2CG3GaE9Yt",
  //     price: 480,
  //     category: "perros",
  //     image_url: "https://www.puppis.com.ar/bandana-kika-dog-rosa-rayada/p",
  //     subCategory: "Ropa",
  //     brand: "Kika Dog",
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174356-150-150/229259.jpg?v=637441594582300000",
  //     name: "Bandana Kika Dog Rosa Rayada",
  //   },
  //   {
  //     id: "2EJuESsx7TW6DSUdQD04",
  //     name: "Shampoo Tonalizador Blanco Osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-blanco-osspret/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157379-150-150/Osspret_tonalizador_blanco_fueysx.jpg?v=635773197434970000",
  //     price: 646,
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     category: "perros",
  //     brand: "Osspret",
  //     subCategory: "Shampoo y Acondicionador",
  //   },
  //   {
  //     id: "3tbhEiA0p0zgFaxjEDAj",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     brand: "Millex",
  //     price: 743,
  //     name: "Bebedero Millex para Jaula",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     subCategory: "Comederos y Bebederos",
  //     category: "aves",
  //   },
  //   {
  //     id: "4PLHfVYzoprgnq0Qltea",
  //     name: "Bebedero Millex Pajaros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174154-150-150/238128.jpg?v=637434938625630000",
  //     brand: "Millex",
  //     price: 330,
  //     category: "aves",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-pajaros-280-cc/p",
  //     subCategory: "Jaulas y Nidos",
  //   },
  //   {
  //     id: "4eblBoWdmnUIKdwA7xK8",
  //     brand: "Pennplax",
  //     brand_url: "https://www.puppis.com.ar/pennplax",
  //     subCategory: "Jaulas y Nidos",
  //     name: "Bebedero Automatico Para Pajaros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/170672-150-150/238127.jpg?v=637183440346500000",
  //     price: 170,
  //     category: "aves",
  //     image_url: "https://www.puppis.com.ar/bebedero-automatico-para-pajaros/p",
  //   },
  //   {
  //     id: "4q6MAKzOzBYIWBBHNuMQ",
  //     brand_url: "https://www.puppis.com.ar/cocooning",
  //     category: "perros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175834-150-150/248108.jpg?v=637505570950570000",
  //     image_url: "https://www.puppis.com.ar/campera-cocooning-woody-fashion/p",
  //     price: 4330,
  //     name: "S",
  //     subCategory: "Ropa",
  //     brand: "Cocooning",
  //   },
  //   {
  //     id: "5KeHH2CnTE5blSbL08Sd",
  //     brand: "Millex",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     name: "rascador de hamsters",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     price: 865,
  //     subCategory: "Jaulas y Nidos",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     category: "hamsters",
  //   },
  //   {
  //     id: "5XpMxQuF2zFiJJEG4jFV",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157379-150-150/Osspret_tonalizador_blanco_fueysx.jpg?v=635773197434970000",
  //     brand: "Osspret",
  //     name: "250 Cc",
  //     category: "perros",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-blanco-osspret/p",
  //     price: 943,
  //     subCategory: "Shampoo y Acondicionador",
  //   },
  //   {
  //     id: "5laaSnHNW0oUxAgSipSj",
  //     image_url: "https://www.puppis.com.ar/campera-cocooning-truman-/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175830-150-150/248105.jpg?v=637505567599300000",
  //     brand: "Cocooning",
  //     category: "perros",
  //     subCategory: "Ropa",
  //     name: "L",
  //     price: 4730,
  //     brand_url: "https://www.puppis.com.ar/cocooning",
  //   },
  //   {
  //     id: "5oTPyF2RGrEOT0KZTELx",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     subCategory: "Jaulas y Nidos",
  //     price: 1208,
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     brand: "Millex",
  //     category: "perros",
  //     name: "caja grande",
  //   },
  //   {
  //     id: "5ybAK0CQ4qK7YT9uKLlW",
  //     price: 4594,
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     category: "hamsters",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     brand: "Millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     name: "rascador de hamsters",
  //     subCategory: "Jaulas y Nidos",
  //   },
  //   {
  //     id: "6fNh0jjRy46Jee2ScqZM",
  //     price: 4330,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175834-150-150/248108.jpg?v=637505570950570000",
  //     brand: "Cocooning",
  //     image_url: "https://www.puppis.com.ar/campera-cocooning-woody-fashion/p",
  //     name: "Campera Cocooning Woody Fashion",
  //     category: "perros",
  //     subCategory: "Ropa",
  //     brand_url: "https://www.puppis.com.ar/cocooning",
  //   },
  //   {
  //     id: "6jbN1e0bYVx5yrsxSOH7",
  //     category: "perros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157372-150-150/Osspret_Enjuague_moskl8.jpg?v=635773197353430000",
  //     name: "250 Cc",
  //     subCategory: "Shampoo y Acondicionador",
  //     brand: "Osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/enjuague-reacondicionador-osspret/p",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     price: 8743,
  //   },
  //   {
  //     id: "7Go6taSr595XR6UPXGJh",
  //     category: "aves",
  //     brand: "Millex",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     price: 7454,
  //     subCategory: "Comederos y Bebederos",
  //     name: "Unico",
  //   },
  //   {
  //     id: "7yq0Nlkf70PcoWSN6nF3",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157379-150-150/Osspret_tonalizador_blanco_fueysx.jpg?v=635773197434970000",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-blanco-osspret/p",
  //     brand: "Osspret",
  //     price: 843,
  //     name: "250 Cc",
  //     category: "perros",
  //     subCategory: "Shampoo y Acondicionador",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //   },
  //   {
  //     id: "8sbGTkJj1C5FaAASp8Hb",
  //     subCategory: "Comederos y Bebederos",
  //     price: 330,
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174154-150-150/238128.jpg?v=637434938625630000",
  //     category: "aves",
  //     name: "Bebedero Millex Pajaros",
  //     brand: "Millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-pajaros-280-cc/p",
  //   },
  //   {
  //     id: "9Fq1GSVxbThQmWUr8pPc",
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //     brand: "Kika Dog",
  //     category: "perros",
  //     subCategory: "Ropa",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/176526-150-150/216035.jpg?v=637546240223400000",
  //     name: "L",
  //     image_url: "https://www.puppis.com.ar/polera-kika-sorf-rojo/p",
  //     price: 2230,
  //   },
  //   {
  //     id: "9ThNHtY2CgpxX38XYd7L",
  //     name: "Tiritas Dr. Zoo De Atún con Arroz",
  //     price: 140,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/162810-150-150/Tiritas-Atun.jpg?v=636537021483900000",
  //     image_url:
  //       "https://www.puppis.com.ar/tiritas-dr--zoo-de-atun-con-arroz/p",
  //     subCategory: "Snacks",
  //     brand_url: "https://www.puppis.com.ar/dr--zoo",
  //     brand: "Dr. Zoo",
  //     category: "gatos",
  //   },
  //   {
  //     id: "9VO1gNKNmPhQpge7032y",
  //     category: "gatos",
  //     name: "Collar Pawise Flor Verde",
  //     brand_url: "https://www.puppis.com.ar/pawise",
  //     image_url: "https://www.puppis.com.ar/collar-pawise-flor-verde/p",
  //     subCategory: "Collares",
  //     price: 680,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/183194-150-150/237685.jpg?v=637698186540470000",
  //     brand: "Pawise",
  //   },
  //   {
  //     id: "ArqzFh7eUVdcZq2rcoIh",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174153-150-150/238125.jpg?v=637434938623600000",
  //     image_url:
  //       "https://www.puppis.com.ar/bebedero-millex-para-medicamentos-40-cc/p",
  //     subCategory: "Comederos y Bebederos",
  //     price: 150,
  //     brand: "Millex",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     name: "Bebedero Millex para Medicamentos",
  //     category: "aves",
  //   },
  //   {
  //     id: "BMG2lXUe9zUXXW5aA0Sr",
  //     brand_url: "https://www.puppis.com.ar/golomiau",
  //     subCategory: "Snacks",
  //     name: "Bocaditos De Mar Golomiau",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/167805-150-150/234008.jpg?v=637039823707370000",
  //     price: 599,
  //     brand: "Golomiau",
  //     category: "gatos",
  //     image_url: "https://www.puppis.com.ar/bocaditos-de-mar-golomiau-/p",
  //   },
  //   {
  //     id: "BuZx9iLG88hASCEZK4G7",
  //     subCategory: "Shampoo y Acondicionador",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/158358-150-150/335164.jpg?v=635991063147270000",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-perro-porta--seco-x500ml-pesps/p",
  //     brand: "Porta",
  //     category: "perros",
  //     name: "Shampoo Perro Porta Seco",
  //     brand_url: "https://www.puppis.com.ar/porta",
  //     price: 1210,
  //   },
  //   {
  //     id: "Cz6z1dwQzPeIV1DKzHjB",
  //     price: 140,
  //     image_url:
  //       "https://www.puppis.com.ar/tiritas-dr--zoo-de-salmon-grillado/p",
  //     subCategory: "Snacks",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/162812-150-150/Tiritas-Salmon.jpg?v=636537021823000000",
  //     category: "gatos",
  //     name: "Tiritas Dr. Zoo De Salmón Grillado",
  //     brand_url: "https://www.puppis.com.ar/dr--zoo",
  //     brand: "Dr. Zoo",
  //   },
  //   {
  //     id: "DM7Jl9fgnXDTcnABEJle",
  //     price: 845,
  //     image_url:
  //       "https://www.puppis.com.ar/tiritas-dr--zoo-de-coctel-de-camarones/p",
  //     brand: "Dr. Zoo",
  //     category: "gatos",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/162811-150-150/Tiritas-Camarones.jpg?v=636537021701970000",
  //     name: "40 Gr",
  //     subCategory: "Snacks",
  //     brand_url: "https://www.puppis.com.ar/dr--zoo",
  //   },
  //   {
  //     id: "DtK8OnPBWRSf6yA52ugQ",
  //     price: 830,
  //     name: "Shampoo Antiparasitario Pulguicida Osspret",
  //     subCategory: "Shampoo y Acondicionador",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157394-150-150/GATOSNUEVA_spziks.jpg?v=635773197597300000",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     category: "perros",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-antiparasitario-pulguicida-osspret/p",
  //     brand: "Osspret",
  //   },
  //   {
  //     id: "FV7tfGKvEcs5Gsfuz0il",
  //     brand: "Pawise",
  //     image_url: "https://www.puppis.com.ar/arnes-pawise-kitten-con-correa/p",
  //     price: 1130,
  //     category: "gatos",
  //     brand_url: "https://www.puppis.com.ar/pawise",
  //     name: "Arnes Pawise Kitten Con Correa",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/168163-150-150/237430.jpg?v=637054434198300000",
  //     subCategory: "Collares",
  //   },
  //   {
  //     id: "Gm4iMVGsonyRAERW4XlK",
  //     category: "gatos",
  //     subCategory: "Collares",
  //     name: "Collar Pawise Para Gatos Con Moño Rojo",
  //     price: 6877,
  //     brand_url: "https://www.puppis.com.ar/pawise",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/168195-150-150/237437.jpg?v=637054434335630000",
  //     brand: "Pawise",
  //     image_url:
  //       "https://www.puppis.com.ar/collar-pawise-para-gatos-con-mono-rojo/p",
  //   },
  //   {
  //     id: "IL3o8TBQSYrE9fMrQv4A",
  //     price: 410,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/158745-150-150/238378-01.jpg?v=636078223396070000",
  //     category: "aves",
  //     name: "Comedero Tolva Exterior Con Tapa Y Agarre Para Aves",
  //     brand_url: "https://www.puppis.com.ar/meadow-pet",
  //     image_url:
  //       "https://www.puppis.com.ar/comedero-tolva-exterior-con-tapa-y-agarre-para-aves-pps25082016-02/p",
  //     brand: "Meadow Pet",
  //     subCategory: "Jaulas y Nidos",
  //   },
  //   {
  //     id: "IRjYUBM955HlHXBoDP9e",
  //     price: 150,
  //     subCategory: "Jaulas y Nidos",
  //     category: "aves",
  //     name: "Bebedero Millex para Pájaros",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-pajaros/p",
  //     brand: "Millex",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/173380-150-150/238130.jpg?v=637395949267600000",
  //   },
  //   {
  //     id: "IjvFI1QwlUj8M0giNtp8",
  //     brand: "Millex",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/173447-150-150/238129.jpg?v=637396734064470000",
  //     price: 290,
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-pajaros/p",
  //     name: "Bebedero Millex Pajaros",
  //     subCategory: "Jaulas y Nidos",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     category: "aves",
  //   },
  //   {
  //     id: "K5oOn6RVHafCadVpplpn",
  //     category: "hamsters",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     price: 777,
  //     brand: "Millex",
  //     subCategory: "Jaulas y Nidos",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //   },
  //   {
  //     id: "MFia3Xp2ZgegqCc1zpEL",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-algas-vitalizador-y-abrillantador-osspret/p",
  //     category: "perros",
  //     brand: "Osspret",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     price: 888,
  //     subCategory: "Shampoo y Acondicionador",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157369-150-150/Osspret_algas_iktkop.jpg?v=635773197331430000",
  //     name: "250 Cc",
  //   },
  //   {
  //     id: "MlsTiCjrOr5XgfV1aC9A",
  //     category: "gatos",
  //     brand_url: "https://www.puppis.com.ar/innovar",
  //     image_url:
  //       "https://www.puppis.com.ar/chocolate-blanco-innovar-para-gato/p",
  //     brand: "Innovar",
  //     subCategory: "Snacks",
  //     price: 120,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174919-150-150/447007.jpg?v=637457621673470000",
  //     name: "Chocolate Blanco Innovar para Gato",
  //   },
  //   {
  //     id: "N7lsCUxMygmt6bv5X4ag",
  //     price: 410,
  //     brand_url: "https://www.puppis.com.ar/meadow-pet",
  //     image_url:
  //       "https://www.puppis.com.ar/comedero-tolva-exterior-con-tapa-y-agarre-para-aves-pps25082016-02/p",
  //     brand: "Meadow Pet",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/158745-150-150/238378-01.jpg?v=636078223396070000",
  //     category: "aves",
  //     name: "Comedero Tolva Exterior Con Tapa Y Agarre Para Aves",
  //     subCategory: "Comederos y Bebederos",
  //   },
  //   {
  //     id: "NIfPuLFxXcP6KXiExOSQ",
  //     price: 2720,
  //     brand_url: "https://www.puppis.com.ar/marina",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //     image_url: "https://www.puppis.com.ar/air-pump-marina-75-salida-doble/p",
  //     name: "Air Pump Marina 75 Salida Doble",
  //     brand: "Marina",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/183768-150-150/11112_MA_airpu_PKGA_INT.jpg?v=637713746309670000",
  //     category: "peces",
  //   },
  //   {
  //     id: "OxSNgcyIIuAWI4HVAZBj",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/170735-150-150/234007.jpg?v=637189485317300000",
  //     subCategory: "Snacks",
  //     price: 676,
  //     brand: "Golomiau",
  //     name: "Bocaditos De Granja Golomiau",
  //     category: "gatos",
  //     image_url: "https://www.puppis.com.ar/bocaditos-de-granja-golomiau/p",
  //     brand_url: "https://www.puppis.com.ar/golomiau",
  //   },
  //   {
  //     id: "PT7yjvRcd2wUGNotOAFu",
  //     brand_url: "https://www.puppis.com.ar/marina",
  //     image_url: "https://www.puppis.com.ar/air-pump-marina-50-salida-simple/p",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //     name: "Air Pump Marina 50 Salida Simple",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/183765-150-150/11110_MA_airpu_PKGA_INT.jpg?v=637713737736770000",
  //     category: "peces",
  //     brand: "Marina",
  //     price: 2500,
  //   },
  //   {
  //     id: "PuZlpi3AZz5iRvyHlvnP",
  //     brand: "Marina",
  //     image_url: "https://www.puppis.com.ar/limpiador-marina-magnetico-/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/183770-150-150/110231.jpg?v=637713751451630000",
  //     brand_url: "https://www.puppis.com.ar/marina",
  //     price: 2990,
  //     name: "Limpiador Marina Magnético",
  //     category: "peces",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //   },
  //   {
  //     id: "Q64NQxuKwmgwoy26mYwW",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     category: "mesas",
  //     brand: "Millex",
  //     name: "mesa de madera",
  //     subCategory: "Jaulas y Nidos",
  //     price: 4545,
  //   },
  //   {
  //     id: "R0cBybCUTL2lQvaxqMp5",
  //     brand_url: "https://www.puppis.com.ar/cocooning",
  //     subCategory: "Ropa",
  //     category: "perros",
  //     name: "M",
  //     price: 4330,
  //     brand: "Cocooning",
  //     image_url: "https://www.puppis.com.ar/campera-cocooning-woody-fashion/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175834-150-150/248108.jpg?v=637505570950570000",
  //   },
  //   {
  //     id: "T3Weuu5dmGXkz8H3N5vw",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-hipoalergenico-medicado-osspret/p",
  //     price: 670,
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     subCategory: "Shampoo y Acondicionador",
  //     name: "Shampoo Hipoalergénico Medicado Osspret",
  //     category: "perros",
  //     brand: "Osspret",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157374-150-150/osspret-medicado-hipoalergenico_gleb8c.jpg?v=635773197373200000",
  //   },
  //   {
  //     id: "UIrvejkC0wmms8DhimkU",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/173447-150-150/238129.jpg?v=637396734064470000",
  //     price: 2988,
  //     brand: "Millex",
  //     name: "Bebedero Millex Pajaros",
  //     subCategory: "Comederos y Bebederos",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-pajaros/p",
  //     category: "aves",
  //   },
  //   {
  //     id: "VELslqIa7JOwC38aMo7C",
  //     name: "Cañita Puppis Insecto",
  //     image_url: "https://www.puppis.com.ar/caniita-puppis-insecto/p",
  //     subCategory: "Juguetes",
  //     brand: "Puppis",
  //     category: "gatos",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/184975-150-150/269212.jpg?v=637792442739330000",
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //     price: 810,
  //   },
  //   {
  //     id: "Vj9lNvkNrYNX1UCRyXZV",
  //     category: "perros",
  //     subCategory: "Ropa",
  //     name: "XL",
  //     price: 4600,
  //     image_url:
  //       "https://www.puppis.com.ar/campera-kika-dog-metalizada-plata/p",
  //     brand: "Kika Dog",
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/181125-150-150/CamPlata-p--1-.jpg?v=637626409659300000",
  //   },
  //   {
  //     id: "WRixnKbUcrwCEOc5PYca",
  //     subCategory: "Snacks",
  //     category: "gatos",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/167805-150-150/234008.jpg?v=637039823707370000",
  //     name: "45 Gr",
  //     price: 888,
  //     image_url: "https://www.puppis.com.ar/bocaditos-de-mar-golomiau-/p",
  //     brand_url: "https://www.puppis.com.ar/golomiau",
  //     brand: "Golomiau",
  //   },
  //   {
  //     id: "X1LHGEXTaQ7xXIrBudqG",
  //     name: "Separador Boyu Perforado",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175148-150-150/232328.png?v=637466597102730000",
  //     brand: "Boyu",
  //     category: "peces",
  //     brand_url: "https://www.puppis.com.ar/boyu",
  //     image_url: "https://www.puppis.com.ar/separador-boyu-perforado/p",
  //     price: 2830,
  //   },
  //   {
  //     id: "XFdItCGQVsEaPfcgYskq",
  //     category: "perros",
  //     price: 4600,
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //     image_url:
  //       "https://www.puppis.com.ar/campera-kika-dog-metalizada-plata/p",
  //     brand: "Kika Dog",
  //     name: "S",
  //     subCategory: "Ropa",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/181125-150-150/CamPlata-p--1-.jpg?v=637626409659300000",
  //   },
  //   {
  //     id: "Z3ZI45K1wYpzoDs9385P",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     price: 150,
  //     category: "aves",
  //     brand: "Millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-pajaros/p",
  //     subCategory: "Comederos y Bebederos",
  //     name: "Bebedero Millex para Pájaros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/173380-150-150/238130.jpg?v=637395949267600000",
  //   },
  //   {
  //     id: "ZhvJDGmMD3NPNPobZqRQ",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174153-150-150/238125.jpg?v=637434938623600000",
  //     price: 150,
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image_url:
  //       "https://www.puppis.com.ar/bebedero-millex-para-medicamentos-40-cc/p",
  //     subCategory: "Jaulas y Nidos",
  //     brand: "Millex",
  //     category: "aves",
  //     name: "Bebedero Millex para Medicamentos",
  //   },
  //   {
  //     id: "aujEbvY5OKYfSxMn1ndC",
  //     name: "Repuesto Filtro Esponja Marina",
  //     price: 140,
  //     brand_url: "https://www.puppis.com.ar/marina",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/173434-150-150/228547.jpg?v=637396734007100000",
  //     brand: "Marina",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //     image_url: "https://www.puppis.com.ar/repuesto-filtro-esponja-marina/p",
  //     category: "peces",
  //   },
  //   {
  //     id: "bKJNQPxXmS1J54LTRaCu",
  //     category: "perros",
  //     price: 830,
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     brand: "Osspret",
  //     name: "Shampoo Antiparasitario Pulguicida Osspret",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157394-150-150/GATOSNUEVA_spziks.jpg?v=635773197597300000",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-antiparasitario-pulguicida-osspret/p",
  //     subCategory: "Shampoo y Acondicionador",
  //   },
  //   {
  //     id: "c2ePxyJMtkyUwSnPV4fH",
  //     name: "Campera Kika Dog Metalizada Plata",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/181125-150-150/CamPlata-p--1-.jpg?v=637626409659300000",
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //     image_url:
  //       "https://www.puppis.com.ar/campera-kika-dog-metalizada-plata/p",
  //     category: "perros",
  //     subCategory: "Ropa",
  //     brand: "Kika Dog",
  //     price: 4600,
  //   },
  //   {
  //     id: "cLMncNvBDo2ha5UVNwi6",
  //     subCategory: "Ropa",
  //     price: 1500,
  //     category: "perros",
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //     brand: "Puppis",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174300-150-150/269114.jpg?v=637439101602830000",
  //     name: "Toalla Puppis Microfibra Turquesa",
  //     image_url:
  //       "https://www.puppis.com.ar/toalla-puppis-microfibra-turquesa/p",
  //   },
  //   {
  //     id: "cb22BnOL4QFtzDumMRq9",
  //     name: "Shampoo Algas Vitalizador Y Abrillantador Osspret",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157369-150-150/Osspret_algas_iktkop.jpg?v=635773197331430000",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-algas-vitalizador-y-abrillantador-osspret/p",
  //     subCategory: "Shampoo y Acondicionador",
  //     category: "perros",
  //     brand: "Osspret",
  //     price: 587,
  //   },
  //   {
  //     id: "djZGr8Bu882QwA3cBLif",
  //     category: "perros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157378-150-150/Osspret_tonalizador_negro_dokwar.jpg?v=635773197425030000",
  //     subCategory: "Shampoo y Acondicionador",
  //     name: "Shampoo Tonalizador Negro Osspret",
  //     brand: "Osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-negro-osspret/p",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     price: 880,
  //   },
  //   {
  //     id: "dl1qhUkWNau8xUE9ixE9",
  //     name: "45 Gr",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/170735-150-150/234007.jpg?v=637189485317300000",
  //     brand: "Golomiau",
  //     image_url: "https://www.puppis.com.ar/bocaditos-de-granja-golomiau/p",
  //     brand_url: "https://www.puppis.com.ar/golomiau",
  //     subCategory: "Snacks",
  //     category: "gatos",
  //     price: 888,
  //   },
  //   {
  //     id: "dlYHT5xM2GGkT4Sx2OTb",
  //     brand: "Porta",
  //     subCategory: "Shampoo y Acondicionador",
  //     category: "perros",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-perro-porta--seco-x500ml-pesps/p",
  //     price: 1210,
  //     name: "Shampoo Perro Porta Seco",
  //     brand_url: "https://www.puppis.com.ar/porta",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/158358-150-150/335164.jpg?v=635991063147270000",
  //   },
  //   {
  //     id: "fTuMeCHvXn9odL1XlLtb",
  //     price: 150,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174926-150-150/447006.jpg?v=637457622952470000",
  //     brand_url: "https://www.puppis.com.ar/innovar",
  //     subCategory: "Snacks",
  //     brand: "Innovar",
  //     category: "gatos",
  //     image_url:
  //       "https://www.puppis.com.ar/chocolate-negro-innovar-para-gato/p",
  //     name: "Chocolate Negro Innovar para Gato",
  //   },
  //   {
  //     id: "fi7vRH7WS53N6HgsZsBj",
  //     price: 855,
  //     image_url:
  //       "https://www.puppis.com.ar/enjuague-reacondicionador-osspret/p",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     brand: "Osspret",
  //     category: "perros",
  //     subCategory: "Shampoo y Acondicionador",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157372-150-150/Osspret_Enjuague_moskl8.jpg?v=635773197353430000",
  //     name: "Enjuague Reacondicionador Osspret",
  //   },
  //   {
  //     id: "foSlLHgpzMLGpY7yBTm2",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/180504-150-150/237613.jpg?v=637590641812470000",
  //     name: "Arnes y Correa Rascals Rojo",
  //     subCategory: "Collares",
  //     brand_url: "https://www.puppis.com.ar/rascals",
  //     brand: "Rascals",
  //     image_url: "https://www.puppis.com.ar/arnes-y-correa-rascals-rojo/p",
  //     category: "gatos",
  //     price: 1680,
  //   },
  //   {
  //     id: "gkF3Q466LHTSEFiLbS4D",
  //     category: "gatos",
  //     brand_url: "https://www.puppis.com.ar/pawise",
  //     price: 680,
  //     brand: "Pawise",
  //     subCategory: "Collares",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/183195-150-150/237686.jpg?v=637698186543730000",
  //     name: "Collar Pawise Flor Rosa",
  //     image_url: "https://www.puppis.com.ar/collar-pawise-flor-rosa/p",
  //   },
  //   {
  //     id: "gktu5BbSxKdHnzlDIhzM",
  //     brand_url: "https://www.puppis.com.ar/pawise",
  //     name: "Collar Pawise Diamond Rosa",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/168197-150-150/237433.jpg?v=637054434343900000",
  //     image_url: "https://www.puppis.com.ar/collar-pawise-diamond-rosa/p",
  //     category: "gatos",
  //     price: 880,
  //     brand: "Pawise",
  //     subCategory: "Collares",
  //   },
  //   {
  //     id: "hFv9p11QQiS3YBxEX4Rx",
  //     name: "Shampoo Tonalizador Negro Osspret",
  //     price: 880,
  //     category: "perros",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-negro-osspret/p",
  //     subCategory: "Shampoo y Acondicionador",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157378-150-150/Osspret_tonalizador_negro_dokwar.jpg?v=635773197425030000",
  //     brand: "Osspret",
  //   },
  //   {
  //     id: "i5WlQRxupZhFMCiE1Mk6",
  //     subCategory: "Shampoo y Acondicionador",
  //     brand: "Osspret",
  //     category: "perros",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/enjuague-reacondicionador-osspret/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157372-150-150/Osspret_Enjuague_moskl8.jpg?v=635773197353430000",
  //     name: "250 Cc",
  //     price: 888,
  //   },
  //   {
  //     id: "jH919H9xMaf1OeHedGGJ",
  //     subCategory: "Jaulas y Nidos",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     name: "Bebedero Millex para Jaula",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     category: "aves",
  //     price: 999,
  //     brand: "Millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //   },
  //   {
  //     id: "jVVzbWocxhEBz11SlIZz",
  //     name: "Pelota Puppis Catnip",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175646-150-150/269167.png?v=637499498566200000",
  //     brand: "Puppis",
  //     category: "gatos",
  //     subCategory: "Juguetes",
  //     image_url: "https://www.puppis.com.ar/pelota-puppis-catnip/p",
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //     price: 493,
  //   },
  //   {
  //     id: "jtd4dHnGcI8M4cNzLJ0e",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     price: 999,
  //     name: "alta",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     brand: "Millex",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     subCategory: "Jaulas y Nidos",
  //     category: "casas",
  //   },
  //   {
  //     id: "kGY4mbdrPrkqhCS324wi",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     brand: "Millex",
  //     price: 843,
  //     subCategory: "Jaulas y Nidos",
  //     category: "hamsters",
  //     name: "rascador de hamsters",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //   },
  //   {
  //     id: "km4BPuuBmmtJHCa01ZSC",
  //     brand: "Osspret",
  //     category: "perros",
  //     price: 934,
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     subCategory: "Shampoo y Acondicionador",
  //     name: "Shampoo Tonalizador Blanco Osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-blanco-osspret/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157379-150-150/Osspret_tonalizador_blanco_fueysx.jpg?v=635773197434970000",
  //   },
  //   {
  //     id: "lPSTw7dl7ycNucF7I6bm",
  //     category: "perros",
  //     name: "Shampoo Tonalizador Bronce Osspret",
  //     subCategory: "Shampoo y Acondicionador",
  //     price: 880,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157377-150-150/maximo-bronce-big_czw4g0.jpg?v=635773197414870000",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-bronce-osspret/p",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     brand: "Osspret",
  //   },
  //   {
  //     id: "mE9FxIg92tZMrA60jhpr",
  //     price: 480,
  //     name: "Bandana Kika Dog Lino Rayas",
  //     category: "perros",
  //     image_url: "https://www.puppis.com.ar/bandana-kika-dog-lino-rayas/p",
  //     brand: "Kika Dog",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174355-150-150/229258.jpg?v=637441594578530000",
  //     subCategory: "Ropa",
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //   },
  //   {
  //     id: "nEB5oxYYcXllFtZJ9rTZ",
  //     price: 670,
  //     brand: "Marina",
  //     name: "Repuesto Marina Filtro de Carbon Slim",
  //     category: "peces",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //     image_url:
  //       "https://www.puppis.com.ar/repuesto-marina-filtro-de-carbon-slim/p",
  //     brand_url: "https://www.puppis.com.ar/marina",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174753-150-150/228546.jpg?v=637452603594270000",
  //   },
  //   {
  //     id: "nWjMciwjM5fHT2seZBh4",
  //     brand: "Kika Dog",
  //     category: "perros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/181125-150-150/CamPlata-p--1-.jpg?v=637626409659300000",
  //     brand_url: "https://www.puppis.com.ar/kika-dog",
  //     name: "M",
  //     image_url:
  //       "https://www.puppis.com.ar/campera-kika-dog-metalizada-plata/p",
  //     price: 4600,
  //     subCategory: "Ropa",
  //   },
  //   {
  //     id: "nbHwQxIuGY7SoIGISfNY",
  //     price: 400,
  //     name: "Juguete con Plumas Puppis Candy Verde",
  //     subCategory: "Juguetes",
  //     image_url: "https://www.puppis.com.ar/juguete-puppis-plumas/p",
  //     brand: "Puppis",
  //     category: "gatos",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/184981-150-150/269218.jpg?v=637792442763000000",
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //   },
  //   {
  //     id: "oVENBHpiwTSTo8L7r04j",
  //     price: 560,
  //     name: "Juguete Lazy Cat Palito con Plumas",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/177320-150-150/244195.jpg?v=637567929843600000",
  //     subCategory: "Juguetes",
  //     category: "gatos",
  //     brand_url: "https://www.puppis.com.ar/lazy-cat",
  //     brand: "Lazy Cat",
  //     image_url:
  //       "https://www.puppis.com.ar/juguete-lazy-cat-palito-con-plumas/p",
  //   },
  //   {
  //     id: "olZJVBv6PX4dZO1GUMCJ",
  //     subCategory: "Comederos y Bebederos",
  //     brand_url: "https://www.puppis.com.ar/ferplast",
  //     brand: "Ferplast",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/162188-150-150/Comedero-Brava-Transparente-Para-Aves-N%C2%BA1.jpg?v=636480717226900000",
  //     category: "aves",
  //     name: "Comedero Brava Transparente Para Aves",
  //     price: 860,
  //     image_url:
  //       "https://www.puppis.com.ar/comedero-brava-transparente-para-aves/p",
  //   },
  //   {
  //     id: "pByNebRWYZMsMsJg4iIf",
  //     subCategory: "Shampoo y Acondicionador",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-tonalizador-bronce-osspret/p",
  //     price: 880,
  //     brand: "Osspret",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157377-150-150/maximo-bronce-big_czw4g0.jpg?v=635773197414870000",
  //     name: "Shampoo Tonalizador Bronce Osspret",
  //     category: "perros",
  //   },
  //   {
  //     id: "pdLYtIROtHg2rJchrSHU",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-algas-vitalizador-y-abrillantador-osspret/p",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     name: "250 Cc",
  //     category: "perros",
  //     subCategory: "Shampoo y Acondicionador",
  //     brand: "Osspret",
  //     price: 345,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157369-150-150/Osspret_algas_iktkop.jpg?v=635773197331430000",
  //   },
  //   {
  //     id: "qYGDhp8WsMfhW3W0QKF6",
  //     image_url: "https://www.puppis.com.ar/hierba-puppis-para-gatos/p",
  //     subCategory: "Juguetes",
  //     category: "gatos",
  //     brand: "Puppis",
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175648-150-150/269170.png?v=637499498573870000",
  //     price: 325,
  //     name: "Hierba Puppis para Gatos",
  //   },
  //   {
  //     id: "rEmGR7WDJi0k01YS3Utg",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     category: "perros",
  //     subCategory: "Shampoo y Acondicionador",
  //     brand: "Osspret",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157369-150-150/Osspret_algas_iktkop.jpg?v=635773197331430000",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-algas-vitalizador-y-abrillantador-osspret/p",
  //     name: "Shampoo Algas Vitalizador Y Abrillantador Osspret",
  //     price: 444,
  //   },
  //   {
  //     id: "rSMrwAxp4vLyr0ioVYPm",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157374-150-150/osspret-medicado-hipoalergenico_gleb8c.jpg?v=635773197373200000",
  //     subCategory: "Shampoo y Acondicionador",
  //     image_url:
  //       "https://www.puppis.com.ar/shampoo-hipoalergenico-medicado-osspret/p",
  //     price: 670,
  //     brand: "Osspret",
  //     category: "perros",
  //     name: "Shampoo Hipoalergénico Medicado Osspret",
  //   },
  //   {
  //     id: "rhofPAPiVeiWlG3FRSr9",
  //     image_url: "https://www.puppis.com.ar/pilotin-pets-pro-transparente/p",
  //     brand_url: "https://www.puppis.com.ar/pets-pro",
  //     brand: "Pets Pro",
  //     name: "Pilotin Pets Pro Transparente",
  //     subCategory: "Ropa",
  //     category: "perros",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174842-150-150/255196.jpg?v=637452603848330000",
  //     price: 1550,
  //   },
  //   {
  //     id: "s4hUOisRxrEFkMCATJ5K",
  //     brand_url: "https://www.puppis.com.ar/osspret",
  //     name: "Enjuague Reacondicionador Osspret",
  //     subCategory: "Shampoo y Acondicionador",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/157372-150-150/Osspret_Enjuague_moskl8.jpg?v=635773197353430000",
  //     image_url:
  //       "https://www.puppis.com.ar/enjuague-reacondicionador-osspret/p",
  //     brand: "Osspret",
  //     category: "perros",
  //     price: 2453,
  //   },
  //   {
  //     id: "sGnRECb9Xv2nGKfFnc9R",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/184980-150-150/269217.jpg?v=637792442758600000",
  //     name: "Pelota Puppis Sisal",
  //     brand: "Puppis",
  //     image_url: "https://www.puppis.com.ar/pelota-puppis-sisal/p",
  //     subCategory: "Juguetes",
  //     price: 400,
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //     category: "gatos",
  //   },
  //   {
  //     id: "sH6fueMe1JuVsGy38NEb",
  //     image_url:
  //       "https://www.puppis.com.ar/tiritas-dr--zoo-de-coctel-de-camarones/p",
  //     price: 1999,
  //     name: "Tiritas Dr. Zoo De Cóctel de Camarones",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/162811-150-150/Tiritas-Camarones.jpg?v=636537021701970000",
  //     brand: "Dr. Zoo",
  //     brand_url: "https://www.puppis.com.ar/dr--zoo",
  //     category: "gatos",
  //     subCategory: "Snacks",
  //   },
  //   {
  //     id: "srkKLDXKcLv13O7VxfNa",
  //     category: "gatos",
  //     subCategory: "Juguetes",
  //     brand: "Puppis",
  //     image_url: "https://www.puppis.com.ar/caniita-puppis-plumas/p",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/184976-150-150/269213.jpg?v=637792442744100000",
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //     price: 990,
  //     name: "Cañita Puppis Plumas",
  //   },
  //   {
  //     id: "uUehkGI1E8DCnE0Bfbzg",
  //     category: "perros",
  //     price: 4730,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175830-150-150/248105.jpg?v=637505567599300000",
  //     subCategory: "Ropa",
  //     brand_url: "https://www.puppis.com.ar/cocooning",
  //     name: "Campera Cocooning Truman",
  //     brand: "Cocooning",
  //     image_url: "https://www.puppis.com.ar/campera-cocooning-truman-/p",
  //   },
  //   {
  //     id: "v4dSsiqdwQRSAoMNenW5",
  //     brand: "Rascals",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/180507-150-150/237614.jpg?v=637590641823100000",
  //     image_url: "https://www.puppis.com.ar/arnes-y-correa-rascals-negro/p",
  //     price: 1680,
  //     category: "gatos",
  //     name: "Arnes y Correa Rascals Negro",
  //     subCategory: "Collares",
  //     brand_url: "https://www.puppis.com.ar/rascals",
  //   },
  //   {
  //     id: "vrloszJXs0DttKJhM1jK",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/185003-150-150/269207.jpg?v=637792442858430000",
  //     price: 810,
  //     brand_url: "https://www.puppis.com.ar/puppis",
  //     brand: "Puppis",
  //     image_url: "https://www.puppis.com.ar/caniita-puppis-mariposa/p",
  //     name: "Cañita Puppis Mariposa",
  //     subCategory: "Juguetes",
  //     category: "gatos",
  //   },
  //   {
  //     id: "vyx9EjXP7eeppt5Zck8h",
  //     subCategory: "Aireadores, Filtros, Bombas y Calefactores",
  //     category: "peces",
  //     brand: "Catit",
  //     price: 1000,
  //     name: "Filtro de Carbon Catit Hooded",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174062-150-150/227078.jpg?v=637434938385970000",
  //     brand_url: "https://www.puppis.com.ar/catit",
  //     image_url: "https://www.puppis.com.ar/filtro-de-carbon-catit-hooded/p",
  //   },
  //   {
  //     id: "w6696DwAn4xhZLICU3Qq",
  //     brand_url: "https://www.puppis.com.ar/cocooning",
  //     price: 4730,
  //     image_url: "https://www.puppis.com.ar/campera-cocooning-truman-/p",
  //     subCategory: "Ropa",
  //     brand: "Cocooning",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/175830-150-150/248105.jpg?v=637505567599300000",
  //     category: "perros",
  //     name: "S",
  //   },
  //   {
  //     id: "wTEdsj2mvX9l6lDXooCE",
  //     brand_url: "https://www.puppis.com.ar/pennplax",
  //     brand: "Pennplax",
  //     category: "aves",
  //     price: 170,
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/170672-150-150/238127.jpg?v=637183440346500000",
  //     name: "Bebedero Automatico Para Pajaros",
  //     image_url: "https://www.puppis.com.ar/bebedero-automatico-para-pajaros/p",
  //     subCategory: "Comederos y Bebederos",
  //   },
  //   {
  //     id: "x1nCpsDClRR52UAnJDxR",
  //     name: "rascador de hamsters",
  //     image_url: "https://www.puppis.com.ar/bebedero-millex-para-jaula/p",
  //     subCategory: "Jaulas y Nidos",
  //     brand_url: "https://www.puppis.com.ar/millex",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/174149-150-150/238114.jpg?v=637434938615030000",
  //     price: 1089,
  //     brand: "Millex",
  //     category: "hamsters",
  //   },
  //   {
  //     id: "yl6kkxNwxR0lqIX8aDjC",
  //     price: 680,
  //     category: "gatos",
  //     brand: "Pawise",
  //     subCategory: "Collares",
  //     image:
  //       "https://puppis.vteximg.com.br/arquivos/ids/168194-150-150/237438.jpg?v=637054434332500000",
  //     brand_url: "https://www.puppis.com.ar/pawise",
  //     name: "Collar Pawise Para Gatos Con Moño Azul",
  //     image_url:
  //       "https://www.puppis.com.ar/collar-pawise-para-gatos-con-mono-azul/p",
  //   },
  // ],
  filteredProducts: [],
  products: [],
  paginaactual: 1,
  categories: [],
  subCategories: [],
  brands: [],
  productDetail: [],
  userState: 1,
  userInfo: [],
  carrito: [],
  compras: [], //agrego estado de compras del usuario.
  comments: {},
};

try {
  if (typeof window !== "undefined") {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      initialState.comments = JSON.parse(storedComments);
    }
  }
} catch (error) {
  console.error("Error al acceder al localStorage:", error);
}
// * Estados del usuario
//* 1: No legueado, 2: autenticado, 3: Registrado

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        productDetail: action.payload,
        paginaactual: 1,
      };

    case GET_BRANDS:
      return {
        ...state,
        brands: [...action.payload],
        paginaactual: 1,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
        paginaactual: 1,
      };

    case GET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: [...action.payload],
        paginaactual: 1,
      };

    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: [...action.payload],
        paginaactual: 1,
      };

    case ADD_CARRITO:
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };

    // En el reducer correspondiente

    case DELETE_CARRITO:
      const { id, quantityToDelete } = action.payload;
      const productIndex = state.carrito.findIndex(
        (product) => product.id === id
      );

      if (productIndex !== -1) {
        const updatedCart = [...state.carrito];
        const product = updatedCart[productIndex];

        if (product.quantity > quantityToDelete) {
          // Si la cantidad es mayor a quantityToDelete, decrementar la cantidad
          updatedCart[productIndex] = {
            ...product,
            quantity: product.quantity - quantityToDelete,
          };
        } else {
          // Si la cantidad es menor o igual a quantityToDelete, eliminar el producto del carrito
          updatedCart.splice(productIndex, 1);
        }
        state.userInfo.carrito = updatedCart;

        return {
          ...state,
          carrito: updatedCart,
        };
      }

      return state;

      // Filtrar los productos eliminados (null) del carrito
      const filteredCart = updatedCart.filter((product) => product !== null);

      return {
        ...state,
        carrito: filteredCart,
      };

      return {
        ...state,
        carrito: updatedCart,
      };

    case SET_CARRITO:
      return {
        ...state,
        carrito: action.payload,
        compras: action.compras, // probando.
      };

    case ADD_COMMENT:
      const { productId, comment } = action.payload;
      const updatedComments = {
        ...state.comments,
        [productId]: [...(state.comments[productId] || []), comment],
      };
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      return {
        ...state,
        comments: updatedComments,
      };

    case USERS_ERROR:
      return {
        error: action.payload,
      };

    case SET_USER_STATE:
      return {
        ...state,
        userState: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case CLEAR_USER_DATA:
      return {
        ...state,
        userInfo: [],
        carrito: [],
      };
    default:
      return state;
  }
}