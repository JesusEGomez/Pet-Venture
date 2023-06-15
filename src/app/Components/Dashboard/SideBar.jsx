import React from "react";
import styles from "./sideBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function SideBar({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.icons}>
          <Link href={"/dashboard"}>
            <div className={styles.topIcon}></div>
          </Link>
          <span className={styles.span}></span>
        </div>
        <div className={styles.icons}>
          <Link href={"/dashboard/customers"}>
            <div className={styles.restIcons}>Customers</div>
          </Link>
          <span className={styles.span}></span>
        </div>
        <div className={styles.icons}>
          <Link href={"/dashboard/orders"}>
            <div className={styles.restIcons}>Orders</div>
          </Link>
          <span className={styles.span}></span>
        </div>{" "}
        <div className={styles.icons}>
          <Link href={"/dashboard/statistics"}>
            <div className={styles.restIcons}>Statistics</div>
          </Link>
          <span className={styles.span}></span>
        </div>{" "}
        <div className={styles.icons}>
          <Link href={"/dashboard/products"}>
            <div className={styles.restIcons}>Products</div>
          </Link>
          <span className={styles.span}></span>
        </div>
      </div>
      <main className={styles.main}> {children}</main>
    </div>
  );
}
