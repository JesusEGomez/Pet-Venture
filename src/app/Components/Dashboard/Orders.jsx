import React, { useState } from "react";
import styles from "./orders.module.css";
import { getAllPurchases } from "@/app/Firebase/firebaseConfig";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getRowIdFromRowModel } from "@mui/x-data-grid/internals";

function Orders() {
  // const [purchases, setPurchases] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const getPurcheases = async () => {
      const response = await getAllPurchases();
      setDataArray(response);
    };
    getPurcheases();
  }, []);

  // let purchase = [];

  const purchase = dataArray;
  console.log("response", dataArray);
  const rows = dataArray.map((item, i) => ({
    id: i + 1,

    col1: item.name,
    col2: item.brand,
    col3: item.price / item.quantity,
    col7: item.quantity,
    col5: item.stock,
    col9: item.user,
    col13: item.fecha,
    col14: item.category,
    col15: item.orderId,
  }));
  const columns = [
    // { field: "id", hide: true },
    { field: "id", headerName: "ID", width: 150 },
    { field: "col1", headerName: "NAME", width: 150 },

    { field: "col2", headerName: "BRAND", width: 150 },
    { field: "col13", headerName: "DATE", width: 150 },

    { field: "col3", headerName: "PRICE", width: 150 },
    { field: "col14", headerName: "CATEGORY", width: 150 },
    { field: "col7", headerName: "QUANTITY", width: 150 },
    { field: "col15", headerName: "ORDER ID", width: 150 },
    { field: "col9", headerName: "USER", width: 150 },
    { field: "col5", headerName: "STOCK", width: 150 },
  ];

  console.log(purchase);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>ORDERS</h1>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default Orders;
