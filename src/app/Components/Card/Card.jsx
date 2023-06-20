import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";
import { addCarrito, deleteCarrito } from "../../../../redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Card(props) {
  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    dispatch(addCarrito(productId));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.carrito}>
        <button
          className={styles.deleteFilter}
          onClick={() => handleAddToCart(props.id)}
        >
          {/* {console.log(props.id)} */}
          <p>Añadir al Carrito</p>
        </button>
      </div>
      <div className={styles.card}>
        <img className={styles.img} src={props.image} alt="Not found" />
        <div className={styles.productInfo}>
          <div>
            <h5 className={styles.title}>{props.name}</h5>
          </div>
          <div>
            <h5 className={styles.title}>Marca: {props.brand}</h5>
          </div>
          <div>
            <h5 className={styles.title}>Precio: {props.price}</h5>
          </div>
          <div>
            <Link href={`/detail/${props.id}`}>Detalle</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
