import React from "react";
import styles from "./statistics.module.css";
import { useState } from "react";
import { getAllPurchases } from "@/app/Firebase/firebaseConfig";
import { useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut, Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
function Statistics() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const getPurcheases = async () => {
      const response = await getAllPurchases();
      setDataArray(response);
    };
    getPurcheases();
  }, []);

  let numProducts = dataArray.length;
  let totalRevenue = 0;
  for (const product of dataArray) {
    totalRevenue += product.price;
  }

  let averagePurchaseValue = 0;
  for (const product of dataArray) {
    averagePurchaseValue = product.price;
  }
  let averageTicket = Math.floor(totalRevenue / numProducts);

  console.log("averageTicket", averageTicket);

  const bestSellingItem = () => {};

  const categoryPieChart = () => {};

  const categories = dataArray.map((c) => c.category);
  let uniqueCategories = new Set(categories);
  console.log("uniqueCategories", uniqueCategories);

  console.log("categories", categories);

  const categoryCount = {};

  categories.forEach((element) => {
    if (categoryCount.hasOwnProperty(element)) {
      categoryCount[element]++;
    } else {
      categoryCount[element] = 1;
    }
  });

  //& PIE CHART

  const data = {
    labels: [...uniqueCategories],
    datasets: [
      {
        data: [...Object.values(categoryCount)], //values
        backgroundColor: [
          "yellow",
          "blueviolet",
          "tomato",
          "orangered",
          "blue",
          "green",

          "purple",
          "red",
          "aqua",
          "beige",
        ],
      },
    ],
  };
  const options = {};
  // <Doughnut data={[...array]} />;

  console.log("categoryCount", categoryCount);
  console.log("categories", categories);

  // console.log("totalRevenue", totalRevenue);
  // console.log("bestSellingItem", bestSellingItem);
  // console.log("categoryPieChart", categoryPieChart);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>STATISTICS</h1>
      </div>
      <div className={styles.elements}>
        <div className={styles.categoryPieChart}>
          <Pie data={data} options={options}></Pie>
        </div>
        <div>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>Total Revenue</h4>
              <h4 className={styles.cardValue}>
                $ {totalRevenue.toLocaleString("en-US")}
              </h4>
            </div>
            {/* <div className={styles.card}>
          <h4 className={styles.cardTitle}>Popular Products</h4>
          <h4 className={styles.cardValue}>{}</h4>
        </div> */}
            <div className={styles.card}>
              <h4 className={styles.cardTitle}>Average Ticket</h4>
              <h4 className={styles.cardValue}>
                $ {averageTicket.toLocaleString("en-US")}
              </h4>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default Statistics;
