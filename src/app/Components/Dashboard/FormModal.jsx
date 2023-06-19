import React, { useState } from "react";
import { Input, Grid, Button } from "@nextui-org/react";
import styles from "./formularioCreate.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";

const FormularioCreate = () => {
  const [image, setImage] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      brand: "",
      price: "",
      image: "",
      category: "",
      subCategory: "",
      isActive: "",
      stock: "",
      brand_url: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Máximo 20 caracteres")
        .min(5, "Mínimo 5 caracteres")
        .required("Campo requerido"),
      brand: Yup.string()
        .max(20, "Máximo 20 caracteres")
        .min(5, "Mínimo 5 caracteres")
        .required("Campo requerido"),
      price: Yup.number()
        .min(1, "El precio debe ser mayor a 1")
        .required("Campo requerido"),
      category: Yup.string()
        .max(20, "Máximo 20 caracteres")
        .min(5, "Mínimo 5 caracteres")
        .required("Campo requerido"),
      subCategory: Yup.string()
        .max(20, "Máximo 20 caracteres")
        .min(5, "Mínimo 5 caracteres")
        .required("Campo requerido"),
    }),

    onSubmit: async (values) => {
      const response = await axios.post("/api/createProduct", values);
      console.log(response);
    },
    validateOnBlur: true,
  });

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "petventure");
    data.append("cloud_name", "dkjimr8mq");

    fetch("https://api.cloudinary.com/v1_1/dkjimr8mq/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const imageUrl = data.secure_url;
        setUploadedImageUrl(imageUrl);
        formik.setFieldValue("image", imageUrl); // Setea la URL en el campo "image" del formulario
        formik.handleSubmit(); // Envía el formulario
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles["body"]}>
      <form className={styles["form-container"]} onSubmit={formik.handleSubmit}>
        <input
          type="hidden"
          name="image"
          value={uploadedImageUrl}
          onChange={formik.handleChange}
        />
        <h2>Crear Producto</h2>
        <div>
          <label>subCategory </label>
          <div>
            <Input
              bordered
              className={styles["field"]}
              type="text"
              placeholder="name"
              color="primary"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
        </div>
        <div>
          <label>subCategory </label>
          <div>
            <Input
              bordered
              className={styles["field"]}
              type="text"
              placeholder="brand"
              color="primary"
              name="brand"
              onChange={formik.handleChange}
              value={formik.values.brand}
              error={formik.touched.brand && formik.errors.brand}
              helperText={formik.touched.brand && formik.errors.brand}
            />
          </div>
        </div>
        <div>
          <label>subCategory </label>
          <div>
            <Input
              bordered
              className={styles["field"]}
              type="number"
              min={1}
              placeholder="price"
              color="primary"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              error={formik.touched.price && formik.errors.price}
              helperText={formik.touched.price && formik.errors.price}
            />
          </div>
        </div>
        <div>
          <label>subCategory </label>
          <div>
            <Input
              bordered
              className={styles["field"]}
              type="number"
              min={1}
              placeholder="stock"
              color="primary"
              name="stock"
              onChange={formik.handleChange}
              value={formik.values.stock}
              error={formik.touched.stock && formik.errors.stock}
              helperText={formik.touched.stock && formik.errors.stock}
            />
          </div>
        </div>
        <div>
          <label>subCategory </label>
          <div></div>
          <Input
            bordered
            className={styles["field"]}
            type="boolean"
            placeholder="isActive"
            color="primary"
            name="isActive"
            onChange={formik.handleChange}
            value={formik.values.isActive}
            error={formik.touched.isActive && formik.errors.isActive}
            helperText={formik.touched.isActive && formik.errors.isActive}
          />
        </div>

        <div>
          <label>subCategory </label>
          <div>
            <Input
              bordered
              className={styles["field"]}
              type="text"
              placeholder="category"
              color="primary"
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              error={formik.touched.category && formik.errors.category}
              helperText={formik.touched.category && formik.errors.category}
            />
          </div>
        </div>
        <div>
          <label>subCategory </label>
          <div>
            <Input
              bordered
              className={styles["field"]}
              type="text"
              placeholder="subCategory"
              color="primary"
              name="subCategory"
              onChange={formik.handleChange}
              value={formik.values.subCategory}
              error={formik.touched.subCategory && formik.errors.subCategory}
              helperText={
                formik.touched.subCategory && formik.errors.subCategory
              }
            />
          </div>
        </div>
        <Input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          rounded
          bordered
          className={styles["field"]}
          color="primary"
          value=""
        />

        {uploadedImageUrl && (
          <div className={styles["image-container"]}>
            <img
              src={uploadedImageUrl}
              alt="Uploaded Image"
              className={styles.image}
            />
          </div>
        )}

        <Button auto type="submit" className={styles["btn-green"]}>
          Enviar
        </Button>

        <Link href="/">
          <Button auto className={styles["btn-green"]}>
            Home
          </Button>
        </Link>

        <Button auto className={styles["btn-green"]} onClick={submitImage}>
          Cargar imagen
        </Button>
      </form>
    </div>
  );
};

export default FormularioCreate;
