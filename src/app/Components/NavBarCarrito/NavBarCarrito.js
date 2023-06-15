import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCarrito, decreaseQuantity } from "../../../../redux/actions";
import styles from "./NavBarCarrito.module.css";
import Link from "next/link";
import { useEffect } from "react";
import Swal from "sweetalert2";
import MercadoPagoButton from "../mercadoPagoButton/mercadoPagoButton";
import { updateUser } from "@/app/firebase/firebaseConfig";

export default function NavBarCarrito(props) {
  const carrito = useSelector((state) => state.carrito);
  const userInfo = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (cartFromLocalStorage) {
      dispatch({ type: "SET_CARRITO", payload: cartFromLocalStorage });
    }
    if (userInfo.carrito?.length !== 0) {
      const userCarrito = [...carrito];
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

  const handlerDelete = (id) => {
    const existingProduct = carrito.find((product) => product.id === id);

    if (existingProduct.quantity > 1) {
      // Si la cantidad es mayor a 1, mostrar un prompt para ingresar la cantidad a eliminar
      const quantityToDelete = prompt(
        `Ingrese la cantidad a eliminar (máximo: ${existingProduct.quantity})`,
        "1"
      );
      const quantityToDeleteNumber = parseInt(quantityToDelete, 10);
      if (
        !isNaN(quantityToDeleteNumber) &&
        quantityToDeleteNumber >= 1 &&
        quantityToDeleteNumber <= existingProduct.quantity
      ) {
        dispatch(decreaseQuantity(id, quantityToDeleteNumber));
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La cantidad ingresada es inválida",
        });
      }
    } else {
      // Si la cantidad es igual a 1, eliminar el producto del carrito
      dispatch(deleteCarrito(id));
    }

    let timerInterval;
    Swal.fire({
      title: "Sacando producto del carrito",
      html: "Espere <b></b> milisegundos.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  let totalPrice = 0;

  const groupedCarrito = carrito.reduce((accumulator, currentProduct) => {
    const existingProductIndex = accumulator.findIndex(
      (p) => p.id === currentProduct.id
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, increase the quantity
      const existingProduct = accumulator[existingProductIndex];
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      accumulator.splice(existingProductIndex, 1, updatedProduct);
    } else {
      // If the product doesn't exist, add it to the accumulator with quantity 1
      accumulator.push({ ...currentProduct, quantity: 1 });
    }

    return accumulator;
  }, []);

  const isCarritoEmpty = groupedCarrito.length === 0;

  return (
    <div className={styles.container}>
      {groupedCarrito.map((e) => {
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
        {carrito.forEach((product) => {
          totalPrice += product.price;
        })}
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
            <MercadoPagoButton carrito={carrito} />
            <Link href="/tienda">
              <p className={styles.deleteFilter}>Volver a la tienda</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
