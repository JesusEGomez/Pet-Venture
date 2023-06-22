import React from "react";
import Link from "next/link";
import PetVenture from "../../../../public/img/PetVenture.svg";

import styles from "./NavBar.module.css";
import { logout } from "@/app/Firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { clearUserData, setUserState } from "../../../../redux/actions";
import { useSelector } from "react-redux";
import { updateUser } from "@/app/Firebase/firebaseConfig";
import { User } from "@nextui-org/react";

const Navbar = () => {
  const userState = useSelector((state) => state.userState);
  const userInfo = useSelector((state) => state.userInfo);
  const carrito = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const handlerLogout = async () => {
    await updateUser(carrito);
    if (carrito.length !== 0) {
      carrito.forEach((element) => {
        userInfo.carrito.push(element);
      });
    }
    console.log("carrito del user al salir", userInfo.carrito);
    localStorage.clear();
    dispatch(clearUserData());
    logout();
    dispatch(setUserState(1));
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={PetVenture.src} width="300px" height="100px" alt="Logo" />
      </div>

      <div className={styles.menu}>
        <ul className={styles.menu.li}>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>

          <li>
            <Link href="/tienda">Tienda</Link>
          </li>
          <li>
            <Link href="/compras">Mis Compras</Link>
          </li>
          {/* <li>
            <Link href="/formulario">Crear Producto</Link>
          </li> */}
          <li>
            {userInfo.admin ? <Link href="/dashboard">Dashboard</Link> : null}
          </li>
          <li>
            {userState === 3 ? (
              <Link href="/" onClick={handlerLogout}>
                Logout
              </Link>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </li>
          <li>
            {userState === 3 ? (
              <User
                color="success"
                bordered
                size="xl"
                src={userInfo.profilePicture}
                width="50px"
                height="50px"
              />
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
