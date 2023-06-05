import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions";
import Card from "../Card/Card";
import styles from "./Products.module.css";

export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.filteredProducts);

  if (!allProducts || allProducts.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.notFound}>
          No se encontraron resultados - Resetear filtros, por favor.
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.productos}>
      {allProducts.map(({ image, name }, i) => (
        <Card key={i} image={image} name={name} />
      ))}
    </div>
  );
}
