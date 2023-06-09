import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Slider from "../Slider/Slider.jsx";

import Ofertas from "../Ofertas/Ofertas";
import Ofertas2 from "../Ofertas2/Ofertas2";
import Footer from "../Footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions";

import styles from "./Home.module.css";

export default function Home() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getProducts());
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <Slider />
      <Ofertas products={products} />
      <Ofertas2 products={products} />
      <Footer />
    </div>
  );
}
