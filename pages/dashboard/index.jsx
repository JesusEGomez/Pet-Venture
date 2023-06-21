import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import NavBar from "@/app/Components/NavBar/NavBar";
import Statistics from "@/app/Components/Dashboard/Statistics";
import Orders from "@/app/Components/Dashboard/Orders";
import React, { useState } from "react";

import UsersDash from "@/app/Components/Dashboard/users/UsersList";
import ProductsDash from "@/app/Components/Dashboard/products/ProductsList";

export default function Dashboard() {
  const [selectedButton, setSelectedButton] = useState("statistics");

  const handleclick = (e) => {
    e.preventDefault();
    setSelectedButton(e.target.name);
  };
  const renderComponent = () => {
    switch (selectedButton) {
      case "users":
        return <UsersDash />;
      case "products":
        return <ProductsDash />;
      case "orders":
        return <Orders />;
      case "statistics":
        return <Statistics />;
      default:
        return <Statistics />;
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* <NavBar /> */}
      <div className={styles.sideBarContainer}>
        <div className={styles.buttonContainer}>
          <div className={styles.topIcon}>Dashboard</div>

          <button name="users" onClick={handleclick} className={styles.buttons}>
            Users
          </button>

          <button
            name="products"
            onClick={handleclick}
            className={styles.buttons}
          >
            Products
          </button>
          <button
            name="orders"
            onClick={handleclick}
            className={styles.buttons}
          >
            Orders
          </button>

          <button
            name="statisitics"
            onClick={handleclick}
            className={styles.buttons}
          >
            Statistics
          </button>
        </div>
      </div>

      <div className={styles.statisticsContainer}>{renderComponent()}</div>
    </div>
  );
}
