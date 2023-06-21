import React, { useState } from "react";
import styles from "./orders.module.css";
import { getAllPurchases } from "@/app/Firebase/firebaseConfig";
import { useEffect } from "react";

function Orders() {
  // const [purchases, setPurchases] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const getPurcheases = async () => {
      const response = await getAllPurchases();
      setDataArray(response);
      console.log("response", response);
    };
    getPurcheases();
  }, []);

  // let purchase = [];

  const purchase = dataArray;

  const rows = dataArray.map((item) => ({
    id: item.id,
    col1: item.name,
    col2: item.brand,
    col3: item.price,
    col4: item.quantity,
    col5: item.stock,
    col11: item.isActive,
    col12: item.user,
    col13: item.fecha,
    col14: item.category,
    col15: item.orderId,
  }));

  console.log(purchase);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>ORDERS</h1>
      </div>
    </div>
  );
}

export default Orders;
