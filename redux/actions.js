"use client";

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
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";
export const CLEAR_USER_DATA = "CLEAR_USER_DATA";
export const ADD_CARRITO = "ADD_CARRITO";
export const DELETE_CARRITO = "DELETE_CARRITO";
export const SET_USER_STATE = "SET_USER_STATE";
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_CARRITO = "SET_CARRITO";
// actionTypes.js



export const ADD_COMMENT = "ADD_COMMENT";
// export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";

export function getProducts() {
  return async function (dispatch) {
    const response = (await axios.get("/api/products")).data;

    // const response = getFakeProducts();

    return dispatch({ type: GET_PRODUCTS, payload: response });
  };
}

// Carrito
export function addCarrito(id) {
  return async function (dispatch, getState) {
    const response = await axios.get(`/api/productsById?id=${id}`);
    const producto = response.data[0];
    dispatch({ type: ADD_CARRITO, payload: producto });

    const { carrito } = getState();
    localStorage.setItem("cart", JSON.stringify(carrito));

    return producto;
  };
}

// Borra productos del carrito
export function deleteCarrito(id, quantityToDelete) {
  return {
    type: DELETE_CARRITO,
    payload: { id, quantityToDelete },
  };
}

// Producto por ID
export function getProcuctById(id) {
  return async function (dispatch) {
    const response = (await axios.get(`/api/productsById?id=${id}`)).data;

    return dispatch({ type: GET_PRODUCT_BY_ID, payload: response });
  };
}
// trae las categorias para los filtros
//ojo muchas peticiones
export function getBrands(filteredBrands) {
  console.log(filteredBrands);

  return { type: GET_BRANDS, payload: filteredBrands };
}

export function getCategories(filteredCategories) {
  return { type: GET_CATEGORIES, payload: filteredCategories };
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

  return {
    type: GET_FILTERED_PRODUCTS,
    payload: result,
  };
}
export function setCarrito(carrito) {
  return { type: SET_CARRITO, payload: carrito };
}

// * Actions de usuario
export function setUserState(state) {
  return { type: SET_USER_STATE, payload: state };
}

export function setUserInfo(info) {
  return { type: SET_USER_INFO, payload: info };
}
export const addComment = (productId, comment) => {
  return {
    type: ADD_COMMENT,
    payload: {
      productId,
      comment,
    },
  };
};
export function clearUserData() {
  return { type: CLEAR_USER_DATA };
}
