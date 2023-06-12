import React from "react";
import Link from "next/link";
import PetVenture from "../../../../public/img/PetVenture.svg";
import styles from "./Navbar.module.css";
import { logout } from "@/app/Firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUserState } from "../../../../redux/actions";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userState = useSelector((state) => state.userState);
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo);
  const dispatch = useDispatch();
  const handlerLogout = () => {
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
            <Link href="/formulario">Crear Producto</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
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
              <img src={userInfo.profilePicture} width="50px" height="50px" />
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
