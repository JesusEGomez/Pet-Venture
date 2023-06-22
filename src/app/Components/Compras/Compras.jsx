import { useSelector } from "react-redux";
import styles from './Compras.module.css';
import Link from "next/link";

export default function Compras() {
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis compras</h1>
      {userInfo.compras.map((e) => (
        <div className={styles.compra} key={e.id}>
          <div className={styles.imagenContainer}>
            <img className={styles.imagen} src={e.image} alt="Not found" />
          </div>
          <div className={styles.datosContainer}>
            <div className={styles.nombre}>{e.name}</div>
            <div className={styles.categoria}>Categoría: {e.category}</div>
            <div className={styles.cantidad}>Cantidad: {e.quantity}</div>
            <div className={styles.precio}>Total pagado: {e.price}$</div>
            <div className={styles.fecha}>Fecha de compra: {e.date}</div>
          </div>
          
          
        </div>

      ))}
      <Link href="/tienda">
              <p className={styles.right}>Volver a la tienda</p>
            </Link>
    </div>
  );
}
