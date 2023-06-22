import { useSelector } from "react-redux";
import styles from './Compras.module.css'

export default function Compras() {
    const userInfo = useSelector((state) => state.userInfo);
  
    return (
      <div className={styles.container}>
        <div>
            <h1>Mis compras</h1>
          {userInfo.compras.map((e) => (
            <div key={e.id}>
                <img  src={e.image} alt="Not found" />
              <div>{e.name}</div>
              <div>Categoria :{e.category}</div>
              <div>Cantidad {e.quantity}</div>
              <div>total pagado {e.price}</div>
              

              

            </div>
          ))}
        </div>
      </div>
    );
  }
  