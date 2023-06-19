import { useState, useEffect } from "react"
import axios from "axios";
import styles from "./mercadoPago.button.module.css"
import { Loader } from "../Loader/Loader";
import { setTemporalCarrito } from "../../../../redux/actions";
import { useDispatch } from "react-redux";


const MercadoPagoButton = ({ carrito }) => {
    const [url, setUrl] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const generateLink = async () => {
            setLoading(true)
            try {
                const { data: preference } = await axios.post("/api/checkout", {
                    carrito
                });

                setUrl(preference.url);
            } catch (error) {
                console.error(error);
            }
            setLoading(false)
        };
        console.log("este es el carrito", carrito)
        localStorage.setItem("temporalCarrito", JSON.stringify(carrito));
        generateLink();
    }, [carrito]);
    return (
        <div>
            {loading ? (
                <button className={styles.button} disabled>
                    <Loader />
                </button>
            ) : ( 
                <a className={styles.button} href={url}>
                    Pagar ahora
                </a>
            )}
        </div>
    )
}

export default MercadoPagoButton