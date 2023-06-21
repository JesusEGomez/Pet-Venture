import React, { useEffect, useState } from 'react';
import styles from './review.module.css';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { updateProduct } from '@/app/Firebase/firebaseConfig';
import { handleAuthStateChanged } from '@/app/utils/handleAuthStateChanged';
import { useDispatch } from 'react-redux';

export const Review = ({ product }) => {
  console.log("review", product)
  const dispatch = useDispatch()
  const [available, setAvailable] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [trigger, setTrigger] = useState(false)
  const user = useSelector((state) => state.userInfo)
  console.log(user)
  useEffect(() => {

    const exist = []
    console.log("user", user)
    user.compras?.forEach((element) => {
      if (element.id === product?.id)
        exist.push(element)
    })
    if (exist.length) {
      setAvailable(true)
    }
    handleAuthStateChanged(dispatch)
  }, [buttonDisabled])

  const formik = useFormik({
    initialValues: {
      comentario: "",
    },
    validationSchema: Yup.object({
      comentario: Yup.string()
        .required("Requerido")
        .max(20, "Maximo de 20 caracteres")

    }),
    onSubmit: async values => {
      product.comments = [...product.comments, values.comentario]
      await updateProduct(product, () => {
        setTrigger((p) => !p)
      })
      console.log(product.comments)

      setButtonDisabled(true);

    },
  })



  return (
    <div>
      {
        available ? <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Comenta: </label>
          <input
            type="text"
            name="comentario"
            id="comentario"
            onChange={formik.handleChange}
            value={formik.values.comentario}
          />
          <button type="submit" disabled={buttonDisabled} >Comentar</button>
        </form>
          :
          <div><h2>No puedes comentar</h2></div>
      }

    </div>

  )
};