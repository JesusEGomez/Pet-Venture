import {
  GET_BRANDS,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_SUB_CATEGORIES,
  USERS_ERROR,
  // GET_FILTERED_PRODUCTS,
  SET_FILTERED_PRODUCTS,
} from "./actions";

export const initialState = {
 
  filteredProducts: [],
  products: [],
  paginaactual: 1,
  categories: [],
  subCategories: [],
  brands: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };

      case GET_BRANDS:
        return {
          ...state,
          brands: Array.isArray(action.payload) ? [...action.payload] : [],
        };    

    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };

      case GET_SUB_CATEGORIES:
        return {
          ...state,
          subCategories: Array.isArray(action.payload) ? [...action.payload] : [],
        };
      

    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: [...action.payload],
      };

    case USERS_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
}
