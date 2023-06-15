import React, { useEffect } from "react";
import Navbar from "../NavBar/NavBar";
import Slider from "../Slider/Slider.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth, registerNewUser, userExist, getUserInfo } from "@/app/firebase/firebaseConfig";
import Ofertas from "../Ofertas/Ofertas";
import Ofertas2 from "../Ofertas2/Ofertas2";
import Footer from "../Footer/Footer";
import { setUserInfo, setUserState } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions";

import addDocuments from "@/app/Firebase/firebaseConfig";

import styles from "./Home.module.css";

export default function Home() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log(user)
      if (user) {
        const isRegistered = userExist(user.uid)
        if (isRegistered) {
          const userInfo = await getUserInfo(user.uid)
          if (userInfo?.processCompleted) {
            dispatch(setUserState(3))
            dispatch(setUserInfo(userInfo))
          }
          else {
            await registerNewUser({
              uid: user.uid,
              displayName: user.displayName,
              profilePicture: user.photoURL,
              username: "",
              processCompleted: false,
              carrito: [],
              compras: []

            })
            dispatch(setUserState(2))
            dispatch(setUserInfo(userInfo))
          }
        }
      } else {
        dispatch(setUserState(1))
      }
    })
  }, []);
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
