import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>© 2023 PetVenture. Todos los derechos reservados.</p>
      <div className={styles.footerLinks}>
        <a href="#" className={styles.footerLink}>Lunes a Sábados de 9 a 21 hs</a>
        <a href="#" className={styles.footerLink}>Domingos de 10 a 20 hs</a>
        <a href="#" className={styles.footerLink}>Atención Teléfonica: 0810-220-2345</a>
      </div>
    </footer>
  );
}
