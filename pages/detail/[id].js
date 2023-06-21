import axios from 'axios';
import React from 'react';
import Link from 'next/link';
import styles from './detail.module.css';
import CommentBox from '@/app/Components/CommentBox/CommentBox';
import { Review } from '@/app/Components/Review/Review';


function ProductDetail({ productId, product }) {

  return (
    <div>
      <div className={styles.container}>
        <img className={styles.img} src={product[0].image} alt="Not found" />
        <div className={styles.infoContainer}>
          <div className={styles.propertyContainer}>
            <h4>Name: </h4> <div>{product[0].name} </div>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Brand: </h4>
            <span> {product[0].brand}</span>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Category: </h4>
            <span> {product[0].category}</span>
          </div>
          <div className={styles.propertyContainer}>

            <h4>Descripcion: </h4>
            <span> {product[0].description} </span>
          </div>
          <div className={styles.propertyContainer}>
            <h4>Price: </h4>
            <span> {product[0].price} </span>
          </div>
          <Link href="/" className={styles.deleteFilter}>
            Volver a Home
          </Link>
          <Link href="/tienda" className={styles.deleteFilter}>
            Volver a la tienda
          </Link>
        </div>
      </div>
      <CommentBox productId={productId} />
      <Review product={product[0]} />
    </div>
  );
}

export default ProductDetail;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(`http://localhost:3000/api/productsById?id=${id}`);
  const product = response.data;

  return {
    props: {
      productId: id,
      product,
    },
  };
}

