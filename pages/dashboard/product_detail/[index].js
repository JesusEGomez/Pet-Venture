"use client";

import axios from "axios";
import React from "react";

import styles from "./detail.module.css";
import { useState } from "react";

import { useEffect } from "react";
import Link from "next/link";

function ProductDetail() {
  const [product, setProduct] = useState("");

  const currentUrl = window.location.href;
  const id = currentUrl.split("/").pop();

  useEffect(() => {
    const getDbProductById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/productsById?id=${id}`
        );

        setProduct(response.data[0]);
        console.log("response", response.data[0]);
        console.log("product", product, "id", id);
      } catch (error) {
        console.error(error);
      }
    };

    getDbProductById();
  }, []);

  return (
    <div>
      ProductDetail
      <div className={styles.container}>
        <img className={styles.img} src={product?.image} alt="Not found" />
        <div className={styles.infoContainer}>
          <div className={styles.propertyContainer}>
            <h4>Name: </h4> <div>{product?.name} </div>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Brand: </h4>
            <span> {product?.brand}</span>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Category: </h4>
            <span> {product?.category}</span>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Descripcion: </h4>
            <span> {product?.description} </span>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Price: </h4>
            <span> {product?.price} </span>
          </div>{" "}
          <div className={styles.propertyContainer}>
            <h4>Brand url: </h4>
            <span> {product?.brand_url} </span>
          </div>{" "}
          <div className={styles.propertyContainer}>
            <h4>SubCategory: </h4>
            <span> {product?.subCategory} </span>
          </div>{" "}
          <div className={styles.propertyContainer}>
            <h4>Stock: </h4>
            <span> {product?.stock} </span>
          </div>{" "}
          <div className={styles.propertyContainer}>
            <h4>Quantity: </h4>
            <span> {product?.quantity} </span>
          </div>{" "}
          <div className={styles.propertyContainer}>
            <h4>isACTIVE: </h4>
            <span> {product?.isActive} </span>
          </div>
        </div>
      </div>
      <Link href={`/dashboard/products`}> Back </Link>
    </div>
  );
}

export default ProductDetail;

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   console.log(id);
//   const response = await axios.get(
//     `http://localhost:3000/api/productsById?id=${id}`
//   );
//   const product = response.data;

//   return {
//     props: {
//       productId: id,
//       product,
//     },
//   };
// }
