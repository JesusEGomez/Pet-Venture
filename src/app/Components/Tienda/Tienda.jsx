import React, { useEffect, useState } from "react";
import styles from "./Tienda.module.css";
import Filtros from "../Filtros/Filtros";
import Products from "../Products/Products";
import Paginado from "../Paginado/Paginado";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrands,
  getCategories,
  getProducts,
  getSubCategories,
} from "../../../../redux/actions";

const Tienda = () => {
  let products = useSelector((state) => state.products);
  let brands = useSelector((state) => state.brands);
  let categories = useSelector((state) => state.categories);
  let subCategories = useSelector((state) => state.subCategories);

  const dispatch = useDispatch();

  const { allCountries, countriesPerPage, countries } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
    dispatch(getSubCategories());
    dispatch(getBrands());
  }, [dispatch]);

  const CountriesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesCurrentPage, setCountriesCurrentPage] = useState([]);

  useEffect(() => {
    const indexLastCountries = currentPage * CountriesPerPage;
    const indexFirstCountries = indexLastCountries - CountriesPerPage;
    const countriesCurrentPage = countries ? countries.slice(indexFirstCountries, indexLastCountries) : [];


    setCountriesCurrentPage(countriesCurrentPage);
  }, [currentPage, countries]);

  return (
    <div className={styles.container}>
      <Filtros />
      <Products />
      <div>
        <Paginado
          countriesPerPage={CountriesPerPage}
          pagedNumber={setCurrentPage}
          allCountries={products ? products.length : 0}
        />
      </div>
    </div>
  );
};

export default Tienda;
