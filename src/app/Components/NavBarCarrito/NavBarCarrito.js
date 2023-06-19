import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCarrito, decreaseQuantity } from "../../../../redux/actions";
import styles from "./NavBarCarrito.module.css";
import Link from "next/link";
import { useEffect } from "react";
import Swal from "sweetalert2";
import MercadoPagoButton from "../mercadoPagoButton/mercadoPagoButton";
import { updateUser } from "@/app/firebase/firebaseConfig";

export default function NavBarCarrito() {
  const carrito = useSelector((state) => state.carrito);
  const userInfo = useSelector((state) => state.userInfo);
  const userState = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromLocalStorage) {
      dispatch({ type: "SET_CARRITO", payload: cartFromLocalStorage });
    }else  if (userInfo.carrito?.length !== 0) {
      const userCarrito = [];
      userInfo.carrito?.forEach((element) => {
        userCarrito.push(element);
      });
      dispatch({ type: "SET_CARRITO", payload: userCarrito });
    }
   
    console.log(userInfo.carrito);
  }, [dispatch]);

  useEffect(() => {
    console.log(carrito);
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  const handlerDelete = async (id, quantityToDelete) => {
    dispatch(deleteCarrito(id, quantityToDelete));
    await updateUser(userInfo);
  const handlerDelete = async (id, quantityToDelete) => {
    dispatch(deleteCarrito(id, quantityToDelete));
    await updateUser(userInfo);

    Swal.fire(
      "Producto borrado del carrito",
      "Se ha eliminado el producto del carrito",
      "success"
    );
    Swal.fire(
      "Producto borrado del carrito",
      "Se ha eliminado el producto del carrito",
      "success"
    );
  };

  let totalPrice = 0;

  const groupedCarrito = carrito.reduce((accumulator, currentProduct) => {
    const existingProductIndex = accumulator.findIndex(
      (p) => p.id === currentProduct.id
    );

    if (existingProductIndex !== -1) {
      // Si el producto ya existe, incrementar la cantidad
      // Si el producto ya existe, incrementar la cantidad
      const existingProduct = accumulator[existingProductIndex];
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      accumulator.splice(existingProductIndex, 1, updatedProduct);
    } else {
      // Si el producto no existe, agregarlo al acumulador con cantidad 1
      // Si el producto no existe, agregarlo al acumulador con cantidad 1
      accumulator.push({ ...currentProduct, quantity: 1 });
    }

    return accumulator;
  }, []);

  const isCarritoEmpty = groupedCarrito.length === 0;

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
                SubCategoria: {e.subCategory}
                <br />
                Marca: {e.brand}
                <br />
                Precio: {e.price}
                <br />
                Cantidad: {e.quantity}
              </div>
            </div>
            <button
              className={styles.cartCardButton}
              onClick={() => handlerDelete(e?.id, e?.quantity)}
            >
              <p>Borrar del Carrito</p>
            </button>
          </div>
        );
      })}

      {carrito.forEach((e) => {
        totalPrice += e?.price;
        // console.log(totalPrice)
      })}

      <div className={styles.precios}>
        Precio Total: {totalPrice}$
        {isCarritoEmpty ? (
          <>
            <p>El carrito está vacío</p>
            <Link href="/tienda">
              <p className={styles.deleteFilter}>Volver a la tienda</p>
            </Link>
          </>
        ) : (
          <>
            {userState === 3 ? (
              <MercadoPagoButton carrito={carrito} />
            ) : (
              <p>Necesitas Registrarte Para Poder Comprar</p>
            )}
            <Link href="/tienda">
              <p className={styles.deleteFilter}>Volver a la tienda</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

}