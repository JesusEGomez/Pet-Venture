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
import axios from "axios";
import WhatsApp from "../WhatsApp/WhatsApp";
import { getAllPurchases } from "@/app/Firebase/firebaseConfig";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const userInfo = useSelector((state) => state.userInfo);
  const carrito = useSelector((state) => state.carrito);

  useEffect(() => {
    console.log("userInfo", userInfo);
    handleAuthStateChanged(dispatch);
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    const id = urlParams.get("payment_id");
    const temporalCarrito = JSON.parse(localStorage.getItem("temporalCarrito"));
    const user = JSON.parse(localStorage.getItem("user"));

    const registerPurchase = async () => {

      const response = await getAllPurchases()
      console.log("compras", response.data)



      if (status === "approved") {
        console.log("carrito temporal", temporalCarrito);
        await registerNewPurchase(temporalCarrito, id, user?.username);

        try {
          const response = await axios.post("/api/mailling/Success", {
            email: user.email,
            displayName: user.displayName,
          });
          console.log(response)
        } catch (error) {
          console.error("Hubo un error al enviar el correo:", error);
        }
        let newCarritoUser = []
        if (user?.compras) {
          let fecha = new Date();
          let opciones = { day: "2-digit", month: "2-digit", year: "2-digit" };
          let fechaFormateada = fecha.toLocaleDateString("es-ES", opciones);
          newCarritoUser = [...user.compras]
          temporalCarrito?.forEach(element => {
            newCarritoUser.push({ ...element, fecha: fechaFormateada })
          });

          const tmp = { ...user, compras: [...newCarritoUser], carrito: [] }
          console.log("usuario actualizado", tmp)
          await updateUser(tmp)
        }
        Swal.fire({
          title: "Felicidades!",
          text: "Tu compra ha sido Exitosa",
          icon: "success",
          confirmButtonText: "Continuar",
        });

        localStorage.clear();
      } else if (status === "rejected") {

        try {
          Swal.fire({
            title: "Error",
            text: "Tu compra ha sido Rechazada",
            icon: "error",
            confirmButtonText: "Continuar",
          });
          const response = await axios.post("/api/mailling/Failure", {
            email: user.email,
            displayName: user.displayName,
          });

          console.log(response)

        } catch (error) {
          console.error("Hubo un error al enviar el correo:", error);

        }
        localStorage.clear();
      }
    };
    registerPurchase()

  }, [])


  // ! Esta funcion esta comenentada para despuÃ©s poder cargar productos
  // const handlerClick = () => {
  //   addDocuments();
  // };

  return (
    <div className={styles.container}>
{/*       <button onClick={handlerClick}></button> */}
      <Navbar />
      <Slider />
      <Ofertas products={products} />
      <Ofertas2 products={products} />
      <WhatsApp />
      <Footer />
    </div>
  );
}
