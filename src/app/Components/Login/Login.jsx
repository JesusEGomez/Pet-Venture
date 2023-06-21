import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, getUserInfo, registerNewUser, userExist } from "@/app/Firebase/firebaseConfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo, setUserState } from "../../../../redux/actions";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styles from './Login.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Swal from "sweetalert2";

export default function Login() {
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
            console.log("usuario nuevo", user)
            await registerNewUser({
              uid: user.uid,
              displayName: user.displayName,
              profilePicture: user.photoURL,
              username: "",
              processCompleted: false,
              carrito: [],
              compras: [],
              isActive: true,
              email: user.email

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


  const handlerOnClick = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.error(error);
      }
    }

    // async function
  };

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
        .max(15, "Maximo de 15 caracteres")
        .required("Requerido")
    }),
    onSubmit: async values => {
      try {

        const refUSer = await createUserWithEmailAndPassword(auth, values.email, values.password)
        console.log(refUSer)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: "El Email esta en uso",
        })
        console.error(error)
      }

    },
  })


  return (
    <div className={styles.container}>
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
        <button type="submit">Crear</button>
        <Link href="/ingresar"><button>¿Ya tienes cuenta?</button></Link>
        <Link href="/"><button>Atrás</button></Link>
      </form>
      <button onClick={handlerOnClick}> Accede con Google </button>
    </div>

  )

  // if (userState === 2) {
  //   return (
  //     <div>
  //       Estas autenticado...
  //     </div>
  //   )
  // }
  // if (userState === 3) {
  //   return (
  //     <div>
  //       Estas Registrado...
  //     </div>
  //   )
  // }


}
