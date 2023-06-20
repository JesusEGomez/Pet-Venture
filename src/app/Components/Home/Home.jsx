import React, { use, useEffect } from "react";
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
import Swal from "sweetalert2";
import { registerNewPurchase, updateUser } from "@/app/Firebase/firebaseConfig";
// import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const userInfo = useSelector((state) => state.userInfo);


  useEffect(() => {
    console.log("userInfo", userInfo)
    handleAuthStateChanged(dispatch)
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status")
    const id = urlParams.get("payment_id")
    const temporalCarrito = JSON.parse(localStorage.getItem("temporalCarrito"));
    const user = JSON.parse(localStorage.getItem("user"));

    const registerPurchase = async () => {
      if (status === "approved") {
        console.log("carrito temporal", temporalCarrito);
        await registerNewPurchase(temporalCarrito, id, user?.username);

        let newCarritoUser = []
        if (user?.compras) {
          newCarritoUser = [...user.compras]
          temporalCarrito?.forEach(element => {
            newCarritoUser.push(element)
          });
          const tmp = { ...user, compras: [...newCarritoUser], carrito: [] }
          console.log("usuario actualizado", tmp)
          await updateUser(tmp)
        }



        Swal.fire({
          title: "Felicidades!",
          text: "Tu compra ah sido Exitosa",
          icon: "success",
          confirmButtonText: "Continuar",
        });
        localStorage.clear();
      }
    };
    registerPurchase()

  }, [])


  // ! Esta funcion esta comenentada para después poder cargar productos
  // const handlerClick = () => {
  //   addDocuments();
  // };

  return (
    <div className={styles.container}>
      {/* <button onClick={handlerClick}></button> */}
      <Navbar />
      <Slider />
      <Ofertas products={products} />
      <Ofertas2 products={products} />
      <Footer />
    </div>
  );
}
