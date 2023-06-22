import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../../redux/actions";
import styles from "./ofertas.module.css";

import Card from "../Card/Card";

export default function Ofertas(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.ofertasContainer}>
      <h2 className={styles.ofertasTitle}>Ofertas del Día</h2>
      <div className={styles.ofertasGrid}>
        {props.products.slice(0, 8).map((p, i) => (
          <Card
            key={i}
            image={p.image}
            name={p.name}
            category={p.category}
            subCategory={p.subCategory}
            brand_URL={p.brand_URL}
            image_URL={p.image_URL}
            price={p.price}
            brand={p.brand}
            id={p.id}
          />
        ))}
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://www.hipermania.com.ar/imgs/mcat/mcat-banner-perros.png?v=8"
          alt="Imagen"
          className={styles.offerImage}
        />
        <img
          src="https://www.nestle.com.ar/sites/g/files/pydnoa481/files/Banner%20Dog%20Chow.jpg"
          alt="Imagen"
          className={styles.offerImage}
        />
      </div>
    </div>
  );
}
