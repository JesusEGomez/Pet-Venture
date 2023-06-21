import React, { useEffect, useState } from 'react';
import styles from './CommentBox.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { handleAuthStateChanged } from '@/app/utils/handleAuthStateChanged';
import { updateProduct } from '@/app/Firebase/firebaseConfig';

import axios from 'axios';


export default function CommentBox({ productId }) {
  const [product, setProduct] = useState([])
  const [available, setAvailable] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userInfo)
  console.log(productId)




  useEffect(() => {
    console.log("usuario", user)
    const getSelectProduct = async () => {
      const exist = []
      const response = await axios.get(`/api/productsById?id=${productId}`)
      setProduct(response.data)
      user.compras?.forEach((element) => {
        if (element.id === productId)
          exist.push(element)
      })
      if (exist.length) {
        setAvailable(true)
      }
    }

    getSelectProduct()
    handleAuthStateChanged(dispatch)
  }, [trigger])
  console.log("producto", product)
  console.log("user", user)
  // console.log("existe ?", product)
  console.log("sepuede", available)


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
      product[0].comments = [...product[0].comments, values.comentario]
      await updateProduct(product[0], () => {
        setTrigger((p) => !p)
      })
      console.log("comentarios", product.comments)


    },
  })


  return (
    <div className={styles.commentBoxContainer}>
      <h2 className={styles.title}>Opiniones del Producto</h2>
      <div className={styles.commentBox}>
        {product[0]?.comments?.map((comment, index) => (
          <div key={index} className={styles.comment}>
            {comment}
          </div>
        ))}
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
              <button type="submit" >Comentar</button>
            </form>
              :
              <div><h2>No puedes comentar</h2></div>
          }

        </div>

      </div>

    </div>
  );
};

