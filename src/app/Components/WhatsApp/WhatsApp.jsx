import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsApp.module.css";

export default function WhatsApp() {
	return (
		<a
<<<<<<< HEAD
			href='https://api.whatsapp.com/send?phone=+5493513298509&text=Hola!+necesito+más+información+sobre...'
=======
			href='https://api.whatsapp.com/send?phone=5493513298509&text=Hola!+necesito+más+información+sobre...'
>>>>>>> 4c23eeeb43748576023b9e300cff4f8e3455dbc3
			className={styles.whatsappFloat}
			target='_blank'
			rel='noopener noreferrer'
		>
			<FaWhatsapp size={38} color='#fff' />
		</a>
	)
}