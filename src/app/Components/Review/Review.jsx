import React, { useEffect, useState } from 'react';
import styles from './review.module.css';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { updateProduct } from '@/app/Firebase/firebaseConfig';
import { handleAuthStateChanged } from '@/app/utils/handleAuthStateChanged';
import { useDispatch } from 'react-redux';

export const Review = ({ product }) => {
  // console.log("review", product.id)
  const dispatch = useDispatch()
  const [available, setAvailable] = useState(false)
  const user = useSelector((state) => state.userInfo)
  const exist = []
  console.log(user.compras)
  user.compras?.forEach((element) => {
    if (element.id === product?.id)
      exist.push(element)
  })
  console.log("existe ?", exist)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (comment.trim() === '') {
  //     return; // Evitar agregar un comentario vacío
  //   }
  //   setComment('');
  // };
  useEffect(() => {
    console.log(exist)
    handleAuthStateChanged(dispatch)
    if (exist.length) {
      setAvailable(true)
    }
  }, [])

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
      console.log(product.comments)
      // await updateProduct(product)

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
          <button type="submit">Comentar</button>
        </form>
          :
          <div><h2>No puedes comentar</h2></div>
      }

    </div>

  )
};