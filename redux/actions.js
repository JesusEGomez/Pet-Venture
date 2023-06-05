import axios from "axios";

import { getFakeProducts } from "@/app/fakeApi/getFakeProducts";
import { DYNAMIC_ERROR_CODE } from "next/dist/client/components/hooks-server-context";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SEARCH = "SEARCH";
export const USERS_ERROR = "USERS_ERROR";
export const GET_FILTERED_PRODUCTS = "GET_FILTERED_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORY";
export const GET_SUB_CATEGORIES = "GET_SUB_CATEGORY";
export const GET_BRANDS = "GET_BY_BRAND";
export const DYNAMIC_NAME_SEARCH = "DYNAMIC_NAME_SEARCH";
export const SET_FILTERED_PRODUCTS = "SET_FILTERED_PRODUCTS";

// export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";

export function getProducts() {
  return async function (dispatch) {
    const response = (await axios.get("/api/products")).data;

    // const response = getFakeProducts();
    return dispatch({ type: GET_PRODUCTS, payload: response });
  };
}

// trae las categorias para los filtros

export function getBrands(filteredBrands) {
  console.log(filteredBrands);

  return { type: GET_BRANDS, payload: filteredBrands };
}

export function getCategories() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/api/categories");
      const categories = response.data;
      dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      dispatch({ type: USERS_ERROR, payload: error.message });
    }
  };
}


export function getSubCategories(filteredSubCategories) {
  return { type: GET_SUB_CATEGORIES, payload: filteredSubCategories };
}

export function dynamicSearchName(filteredName) {
  return { type: DYNAMIC_NAME_SEARCH, payload: filteredName };
}

export function setFilteredProducts(products) {
  return { type: SET_FILTERED_PRODUCTS, payload: products };
}

export function getFilteredProducts(filters) {
  let result = "";

  if (filters.name !== "none") {
    result = (n) => n.name.includes(filters.name);
  }

  if (filters.brand !== "none") {
    result = (b) => b.brand.includes(filters.brand);
  }

  

  // if (filters.category !== "none") {
  //   result = (c) => c.category.includes(filters.category);
  // }

  // if (filters.subCategory !== "none") {
  //   result = response.filter((b) =>
  //     b.subCategory.includes(filters.subCategory)
  //   );
  // }

  // if (filters.price !== "none") {
  //   if (filters.price === "low") {
  //     result = response.sort((a, b) => {
  //     a.price -
  //         b.price;
  //     });
  //   } else if (filters.price === "high") {
  //     result = response.sort(
  //       (a, b) =>
  //        b.price -
  //      a.price
  //     );
  //   }
  // }

  console.log("actions", filters);
  console.log("action products", result);

  return {
    type: GET_FILTERED_PRODUCTS,
    payload: result,
  };
}

//& category - filter category
//& subcategory - filter subcategory
//& price - sort price
//& name - filter name
