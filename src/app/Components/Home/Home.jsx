import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Slider from "../Slider/Slider.jsx";
import Ofertas from "../Ofertas/Ofertas";
import Ofertas2 from "../Ofertas2/Ofertas2";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import addDocuments from "@/app/Firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { handleAuthStateChanged } from "@/app/utils/handleAuthStateChanged";

import styles from "./Home.module.css";
export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products);
  useEffect(() => {
    handleAuthStateChanged(dispatch)
  })


  // ! Esta funcion esta comenentada para después poder cargar productos
  const handlerClick = () => {
    addDocuments()
  }

  return (
    <div className={styles.container}>
      <button onClick={handlerClick}></button>
      <Navbar />
      <Slider />
      <Ofertas products={products} />
      <Ofertas2 products={products} />
      <Footer />
    </div>
  );
}
