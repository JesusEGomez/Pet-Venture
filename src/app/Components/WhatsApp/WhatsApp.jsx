import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsApp.module.css";

export default function WhatsApp() {
	return (
		<a
			href='https://api.whatsapp.com/send?phone=549351329509&text=Hola!+necesito+más+información+sobre...'
			className={styles.whatsappFloat}
			target='_blank'
			rel='noopener noreferrer'
		>
			<FaWhatsapp size={38} color='#fff' />
		</a>
	)
}