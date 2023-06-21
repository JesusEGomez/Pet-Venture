import React, { useEffect, useState } from 'react';
import styles from './CommentBox.module.css';

import axios from 'axios';


export default function CommentBox({ productId }) {
  const [product, setProduct] = useState([])
  console.log(productId)
  useEffect(() => {
    const getSelectProduct = async () => {
      const response = await axios.get(`/api/productsById?id=${productId}`)
      setProduct(response.data)
    }
    getSelectProduct()
    console.log("producto", product)
  }, [])


  return (
    <div className={styles.commentBoxContainer}>
      <h2 className={styles.title}>Opiniones del Producto</h2>
      <div className={styles.commentBox}>
        {product[0]?.comments?.map((comment, index) => (
          <div key={index} className={styles.comment}>
            {comment}
          </div>
        ))}
      </div>

    </div>
  );
};

