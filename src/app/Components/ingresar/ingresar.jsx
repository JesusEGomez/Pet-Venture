import { useFormik } from "formik"
import { onAuthStateChanged } from "firebase/auth"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { auth, getUserInfo, userExist } from "@/app/firebase/firebaseConfig"
import { setUserInfo, setUserState } from "../../../../redux/actions"
import { signInWithEmailAndPassword } from "firebase/auth"
import { registerNewUser } from "@/app/firebase/firebaseConfig"
import styles from "./Ingresar.module.css"
import Link from "next/link"
import * as Yup from "yup";
export default function Ingresar() {
    const router = useRouter()
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.userState)


    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                const isRegistered = userExist(user.uid)
                if (isRegistered) {
                    const userInfo = await getUserInfo(user.uid)
                    if (userInfo?.processCompleted) {
                        dispatch(setUserState(3))
                        dispatch(setUserInfo(userInfo))

                    }
                    else {
                        await registerNewUser({
                            uid: user.uid,
                            displayName: user.displayName,
                            profilePicture: user.photoURL,
                            username: "",
                            processCompleted: false,
                            carrito: [],
                            compras: []

                        })
                        dispatch(setUserState(2))
                        dispatch(setUserInfo(userInfo))
                    }
                }
            } else {
                dispatch(setUserState(1))
            }
        })

        if (userState === 2) {
            router.push("/createUserName")
        }
        if (userState === 3) {
            router.push("/")
        }
    }, [userState])


    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .required("Requerido"),
            password: Yup.string()
                .min(5, "Mínimo de 5 caracteres")
                .max(20, "Maximo de 20 caracteres")
                .required("Requerido")
        }),
        onSubmit: async values => {
            try {
                const user = await signInWithEmailAndPassword(auth, values.email, values.password)
                console.log(user)
            } catch (error) {
                console.error(error)
            }

        }
    })


    return (
        <div className={styles.container} >
            <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
                <h2>Bienvenido a Pet Venture</h2>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
                <label htmlFor="password">Contraseña: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>}
                <button type="submit">Ingresar</button>
                <Link href="/login"><button>Atrás</button></Link>
            </form>
        </div>

    )
}
