import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCarrito,
  decreaseQuantity,
  clearCarrito,
} from "../../../../redux/actions";
import styles from "./NavBarCarrito.module.css";
import Link from "next/link";
import Swal from "sweetalert2";
import MercadoPagoButton from "../mercadoPagoButton/mercadoPagoButton";
import { updateUser } from "@/app/Firebase/firebaseConfig";
import { Button, Grid } from "@nextui-org/react";
import { handleAuthStateChanged } from "@/app/utils/handleAuthStateChanged";
import { addCarrito } from "../../../../redux/actions";
import { useState } from "react";

export default function NavBarCarrito() {
  const carrito = useSelector((state) => state.carrito);
  const userInfo = useSelector((state) => state.userInfo);
  const userState = useSelector((state) => state.userState);
  const [trigger, setTrigger] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromLocalStorage) {
      dispatch({ type: "SET_CARRITO", payload: cartFromLocalStorage });
    } else if (userInfo.carrito?.length !== 0) {
      const userCarrito = [];
      userInfo.carrito?.forEach((element) => {
        userCarrito.push(element);
      });
      dispatch({ type: "SET_CARRITO", payload: userCarrito });
    }

    handleAuthStateChanged(dispatch);
  }, [dispatch, trigger]);

  const handleAddToCart = (productId) => {
    dispatch(addCarrito(productId));
  };

  useEffect(() => {
    console.log(carrito);
    localStorage.setItem("cart", JSON.stringify(carrito));
    localStorage.setItem("user", JSON.stringify(userInfo));
  }, [carrito]);

  const handlerDelete = async (id, quantityToDelete) => {
    dispatch(deleteCarrito(id, quantityToDelete));
    await updateUser(userInfo);

    Swal.fire(
      "Producto borrado del carrito",
      "Se ha eliminado el producto del carrito",
      "success"
    );
  };

  const handlerClick = () => {
    dispatch(clearCarrito);
    localStorage.removeItem("cart");
    console.log(carrito);
    setTrigger(!trigger);
  };

  let totalPrice = 0;

  const isCarritoEmpty = carrito.length === 0;

  return (
    <div className={styles.container}>
      {carrito.map((e) => {
        return (
          <div className={styles.cartCard} key={e.id}>
            <div className={styles.cartCardInfo}>
              {e?.image && (
                <img
                  className={styles.cartCardImage}
                  src={e.image}
                  alt="Not found"
                />
              )}
              <div>Name: {e.name}</div>
              <div>
                Categoria: {e.category}
                <br />
                Precio: {e.price}
                <br />
                Cantidad: {e?.quantity}
              </div>
            </div>

            <Grid>
              <Button
                flat
                color="error"
                auto
                className={styles.cartCardButton}
                onClick={() => handleAddToCart(e?.id)}
              >
                <p>+</p>
              </Button>
              <Button
                flat
                color="error"
                auto
                className={styles.cartCardButton}
                onClick={() => handlerDelete(e?.id)}
              >
                <p>-</p>
              </Button>
            </Grid>
          </div>
        );
      })}
      {carrito.forEach((e) => {
        totalPrice += e?.price;
        // console.log(totalPrice)
      })}
      <div className={styles.precios}>
        Precio Total: {totalPrice}$--
        <button onClick={handlerClick}>Vaciar Carrito</button>
        {isCarritoEmpty ? (
          <>
            <p>--El carrito está vacío--</p>
            <Link href="/tienda">
              <p>Volver a la tienda</p>
            </Link>
          </>
        ) : (
          <>
            {userState === 3 ? (
              <MercadoPagoButton carrito={carrito} />
            ) : (
              <p>--Necesitas Registrarte Para Poder Comprar--</p>
            )}

            <Link href="/tienda">
              <p className={styles.right}>Volver a la tienda</p>
            </Link>
          </>
        )}
      </div>
         
    </div>
  );
}
