// import React from "react";
// //import { Input, Grid, Button } from "@nextui-org/react";
// import styles from "./formularioCreate.module.css";
// //import { useFormik } from "formik";
// //import * as Yup from "yup";
// import axios from "axios";
// import Link from "next/link";

// const Formulario = () => {
//   const { handleSubmit, handleChange, values, errors } = useFormik({
//     initialValues: {
//       name: "",
//       brand: "",
//       price: "",
//       image: "",
//       category: "",
//       subCategory: "",
//     },

//     validationSchema: Yup.object({
//       name: Yup.string()
//         .max(20, "Maximo 20 caracteres")
//         .min(5, "Minimo 5 caracteres")
//         .required("Required"),
//       brand: Yup.string()
//         .max(20, "Maximo 20 caracteres")
//         .min(5, "Minimo 5 caracteres")
//         .required("Requerido"),
//       price: Yup.number()
//         .min(1, "El precio debe ser mayor a 1")
//         .required("Requerido"),
//       image: Yup.string()
//         .url("Debe ser una URL")
//         .matches(
//           /^https?:\/\/[^\s/$.?#].[^\s]*\.(gif|jpe?g|tiff?|png|webp|bmp)$/i,
//           "El URL debe ser una imagen"
//         )
//         .required("Requerido"),
//       category: Yup.string()
//         .max(20, "Maximo 20 caracteres")
//         .min(5, "Minimo 5 caracteres")
//         .required("Requerido"),
//       subCategory: Yup.string()
//         .max(20, "Maximo 20 caracteres")
//         .min(5, "Minimo 5 caracteres")
//         .required("Requerido"),
//     }),

//     onSubmit: async (values) => {
//       const response = await axios.post("/api/createProduct", values);
//       console.log(response);
//     },
//   });
//   return (
//     <div className={styles["body"]}>
//       <form className={styles["form-container"]} onSubmit={handleSubmit}>
//         <h2> Crear Producto</h2>
//         <Grid.Container gap={4}>
//           <Grid>
//             <Input
//               rounded
//               bordered
//               className={styles["field"]}
//               type="text"
//               label="name"
//               placeholder="name"
//               color="default"
//               name="name"
//               onChange={handleChange}
//               value={values.name}
//               error={errors.name}
//               helperText={errors.name}
//             />
//           </Grid>
//           <Grid>
//             <Input
//               rounded
//               bordered
//               className={styles["field"]}
//               type="text"
//               label="brand"
//               placeholder="brand"
//               color="default"
//               name="brand"
//               onChange={handleChange}
//               value={values.brand}
//               error={errors.brand}
//               helperText={errors.brand}
//             />
//           </Grid>
//           <Grid>
//             <Input
//               rounded
//               bordered
//               className={styles["field"]}
//               type="Number"
//               label="price"
//               placeholder="price"
//               color="default"
//               name="price"
//               onChange={handleChange}
//               value={values.price}
//               error={errors.price}
//               helperText={errors.price}
//             />
//           </Grid>
//           <Grid>
//             <Input
//               rounded
//               bordered
//               className={styles["field"]}
//               type="text"
//               label="image"
//               placeholder="image"
//               color="default"
//               name="image"
//               onChange={handleChange}
//               value={values.image}
//               error={errors.image}
//               helperText={errors.image}
//             />
//           </Grid>
//           <Grid>
//             <Input
//               rounded
//               bordered
//               className={styles["field"]}
//               type="text"
//               label="category"
//               placeholder="category"
//               color="default"
//               name="category"
//               onChange={handleChange}
//               value={values.category}
//               error={errors.category}
//               helperText={errors.category}
//             />
//           </Grid>
//           <Grid>
//             <Input
//               rounded
//               bordered
//               className={styles["field"]}
//               type="text"
//               label="subCategory"
//               placeholder="subCategory"
//               color="default"
//               name="subCategory"
//               onChange={handleChange}
//               value={values.subCategory}
//               error={errors.subCategory}
//               helperText={errors.subCategory}
//             />
//           </Grid>
//         </Grid.Container>
//         <div className={styles["btn-cont"]}>
//           <Button type="submit" className={styles["btn-green"]}>
//             Enviar
//           </Button>
//           <Link href="/">
//             <Button className={styles["btn-green"]}>Home</Button>
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Formulario;
