import React from "react";
import styles from "./Nosotros.module.css";
import Link from "next/link";


const Nosotros = () => {
  return (

    <div className={styles.container}>

      <div className={styles.text}>
        <h2>¡Bienvenido a nuestra página de compraventa de productos para animales! </h2>

        <h3> En nuestra plataforma, te ofrecemos una experiencia única para encontrar todo lo que necesitas para tus adorables amigos peludos. Ya sea que tengas perros, gatos, aves, peces u otros animales, aquí encontrarás una amplia variedad de productos de alta calidad.

          Nuestra página está diseñada para ser intuitiva y fácil de usar.


          Puedes explorar una amplia gama de categorías de productos, desde alimentos y juguetes hasta accesorios y productos de cuidado. También puedes buscar productos específicos o filtrarlos por marca, tamaño, raza y más para encontrar exactamente lo que necesitas.

          Además, ofrecemos una plataforma segura y confiable para que los vendedores puedan mostrar y vender sus productos. Puedes estar tranquilo sabiendo que todos los vendedores han sido verificados y que los productos cumplen con nuestros estándares de calidad.

          Nuestro objetivo es brindarte una experiencia de compra y venta sin complicaciones. Si tienes alguna pregunta o necesitas ayuda, nuestro equipo de atención al cliente estará encantado de asistirte.

          ¡Únete a nuestra comunidad de amantes de los animales y descubre la forma más conveniente de comprar y vender productos para tus mascotas!
        </h3>
      </div>
      <Link href="/">  <button className={styles.submitButton}>Go back</button>   </Link>
    </div>
  );
};

export default Nosotros;