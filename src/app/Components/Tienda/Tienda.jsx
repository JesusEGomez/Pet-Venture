import React, { useEffect, useState } from "react";
import styles from "./Tienda.module.css";
import Filtros from "../Filtros/Filtros";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../../../redux/actions";
import Pagination from "../Pagination/Pagination";
import { handleAuthStateChanged } from "@/app/utils/handleAuthStateChanged";

const Tienda = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.filteredProducts);
  const carrito = useSelector((state) => state.carrito);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const endIndex = currentPage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;

  const itemsToShow = allProducts?.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getProducts())
    handleAuthStateChanged(dispatch)
    console.log("carrito de tienda", carrito);
  }, []);

  return (
    <div className={styles.container}>
      <Filtros />
      <Products itemsToShow={itemsToShow} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      // paginate={paginate}
      />
    </div>
  );
};

export default Tienda;
