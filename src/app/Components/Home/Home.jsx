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
import { registerNewPurchase } from "@/app/Firebase/firebaseConfig";

import styles from "./Home.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import { NextResponse } from "next/server";
const URL = "http://localhost:3000/api/mailling/Success";

export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products);

  useEffect(() => {
    handleAuthStateChanged(dispatch)
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status")
    const registerPurchease = async () => {
      if (status === "approved") {
        const temporalCarrito = JSON.parse(localStorage.getItem("temporalCarrito"));
        console.log(temporalCarrito)
        registerNewPurchase(temporalCarrito)  
        Swal.fire({
          title: 'Felicidades!',
          text: 'Tu compra ah sido Exitosa',
          icon: 'success',
          confirmButtonText: 'Continuar'
        })
        try {
          const response = await axios.post(URL, {
            email,
            displayName,
          });
          return response;
        } catch (error) {
          console.error("Hubo un error al enviar el correo:", error);
          throw new Error("Hubo un error al enviar el correo.");
        }
        localStorage.clear()
      }
    }
    registerPurchease()

    const cleanUrl = () => {
      const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState({ path: newUrl }, "", newUrl);
    };
    cleanUrl()
  }, [])

  // ! Esta funcion esta comenentada para después poder cargar productos
  const handlerClick = () => {
    addDocuments();
  };

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
