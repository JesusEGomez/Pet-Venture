"use client";

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
  SET_TEMPORAL_CARRITO,
} from "./actions";

export const initialState = {
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
        allProducts: action.payload,
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

      const productoExiste = state.carrito.find(
        (i) => i.id === action.payload.id
      );

      if (productoExiste) {
        const productoModificado = {
          ...productoExiste,
          quantity: productoExiste.quantity + 1,
          price: action.payload.price * (productoExiste.quantity + 1),
        };


        const updatedCarrito = state.carrito.map((producto) =>
          producto.id === action.payload.id ? productoModificado : producto
        );

        return {
          ...state,
          carrito: updatedCarrito,
        };
      } else {
        return {
          ...state,
          carrito: [...state.carrito, action.payload],
        };
      }

    case DELETE_CARRITO:
      const productoExiste2 = state.carrito.find(
        (i) => i.id === action.payload.id
      );

      console.log(productoExiste2, "esto es productoexiste2");
      if (productoExiste2.quantity > 1) {
        const productoModificado = {
          ...productoExiste2,
          quantity: productoExiste2.quantity - 1,
          price:
            productoExiste2.price -
            productoExiste2.price / productoExiste2.quantity,
        };
        return {
          ...state,
          carrito: state.carrito.map((i) =>
            i.id === action.payload.id ? productoModificado : i
          ),
        };
      } else {
        const precioProducto = productoExiste2 ? productoExiste2.price : 0;
        return {
          ...state,
          carrito: state.carrito.filter((i) => i.id !== action.payload.id),
          totalPrice: state.totalPrice - precioProducto,
        };
      }

    case SET_CARRITO:
      return {
        ...state,
        carrito: action.payload,
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
