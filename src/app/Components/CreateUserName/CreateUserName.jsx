import { useFormik } from "formik"
import { existsUserName, updateUser } from "@/app/Firebase/firebaseConfig"
import { useSelector, useDispatch } from "react-redux"
import { setUserState } from "../../../../redux/actions"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Swal from "sweetalert2";
import styles from './CreateUserName.module.css'
import axios from "axios"

const validate = async values => {
    const exists = await existsUserName(values.userName)
    const errors = {}
    if (!values.userName) {
        errors.userName = "Requerido"
    } else if (exists) {
        errors.userName = "Por favor elija otro nombre de usuario"
    }
    return errors
}
export default function CreateUserName() {
    const router = useRouter()
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.userInfo)
    const userState = useSelector((state) => state.userState)

    useEffect(() => {
        if (userState === 3 || userState === 1) {
            router.push("/")
        }
    }, [userState])

    const formik = useFormik({
        initialValues: {
            userName: "",
            name: ""
        },
        validate,
        onSubmit: async values => {
            const tmp = { ...userInfo }
            tmp.username = values.userName
            tmp.processCompleted = true
            values.name.length ? tmp.displayName = values.name : null
            await updateUser(tmp)
            dispatch(setUserState(3))

            Swal.fire({
                title: 'Felicidades!',
                text: 'Te has registrado con exito',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
            try {
                const response = await axios.post("/api/mailling/Welcome", {
                    email: userInfo.email,
                    displayName: values.name.length ? values.name : userInfo.email,
                });
                return response;
            } catch (error) {
                console.error("Hubo un error al enviar el correo:", error);
            }

        }
    })
    return (
        <div className={styles.container}>
            {userInfo?.displayName !== null ?
                <div>
                    <form className={styles.mensaje} onSubmit={formik.handleSubmit}>
                        <h2>
                            ¡Bienvenido! {userInfo?.displayName}
                        </h2>
                        <label htmlFor="userName">Crea tu Nombre de usuario: </label>
                        <input className={styles.input}
                            type="text"
                            name="userName"
                            id="userName"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                        />
                        {formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
                        <button className={styles.deleteFilter} type="submit">Crear</button>


                    </form>
                </div> :
                <div>
                    <form className={styles.mensaje} onSubmit={formik.handleSubmit}>
                        <h2>
                            ¡Bienvenido!
                        </h2>
                        <label htmlFor="name">Ingresa tu Nombre: </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name && formik.touched.name && <div>{formik.errors.name}</div>}
                        <label htmlFor="userName">Crea tu Nombre de usuario: </label>
                        <input className={styles.input}
                            type="text"
                            name="userName"
                            id="userName"
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                        />
                        {formik.errors.userName && formik.touched.userName && <div>{formik.errors.userName}</div>}
                        <button className={styles.deleteFilter} type="submit">Crear</button>


                    </form>
                </div>

            }

        </div>
    )
}