import React, { useEffect, useState } from "react";
import axios from "axios";
import { getFakeProducts } from "@/app/fakeApi/getFakeProducts";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./productsList.module.css";
import Link from "next/link";
import { StyledInputContainer, Switch } from "@nextui-org/react";
import Modal from "react-modal";
import { updateProduct } from "@/app/firebase/firebaseConfig";
import { Input, Grid, Button } from "@nextui-org/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { functionsIn } from "lodash-es";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function ProductsDash() {
  const [dataArray, setDataArray] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  const [dataToUpdate, setDataToUpdate] = useState({});
  const [image, setImage] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getDbProducts = async () => {
      try {
        // const response = (await axios.get("http://localhost:3000/api/products"))
        //   .data;
        const response = getFakeProducts();
        setDataArray(response);
        console.log("response", response);
      } catch (error) {
        console.error(error);
      }
    };

    getDbProducts();
  }, [trigger]);

  function handleChangeEdit(e, id) {
    e.preventDefault();

    let findDataToUpdate = dataArray.find((p) => p.id === id);

    console.log("findDataToUpdate", findDataToUpdate);
    setDataToUpdate(findDataToUpdate);
    setIsOpen(true);
  }

  //& formik ////

  const formik = useFormik({
    initialValues: {
      stock: "",
      price: "",
      image: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Máximo 20 caracteres")
        .min(5, "Mínimo 5 caracteres"),

      price: Yup.number().min(1, "El precio debe ser mayor a 1"),
      stock: Yup.number().min(0, "El precio debe ser mayor a 0"),
    }),

    //! cambiar esto //////////////////////////
    onSubmit: async (values) => {
      const tmp = { ...dataToUpdate };
      tmp.price = values.price;
      tmp.stock = values.stock;
      tmp.image = values.image;

      await updateProduct(tmp, () => setTrigger((p) => !p));
      closeModal();
      Swal.fire({
        title: "Producto actualizazdo!!",
        // text: "Te has registrado con exito",
        icon: "success",
        confirmButtonText: "Continuar",
      });
    },
    validateOnBlur: true,
  });

  //& Claudinary ////

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
        // console.log(data);
        const imageUrl = data.secure_url;
        setUploadedImageUrl(imageUrl);
        formik.setFieldValue("image", imageUrl); // Setea la URL en el campo "image" del formulario
        formik.handleSubmit(); // Envía el formulario
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //& Modal ////

  let subtitle;

  //! esto estaba comentado
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen2(true);
  }
  function handleClose() {
    setIsOpen2(false);
  }

  //& Tabla ////

  const rows = dataArray.map((item) => ({
    id: item.id,
    col1: item.name,
    // col2: item.col2,
    col3: item.brand_url,
    col4: item.brand,
    col5: item.category,
    col6: item.price,
    col7: item.image,
    col8: item.subCategory,
    col9: item.quantitySold,
    col10: item.stock,
    col11: item.isActive,
  }));

  const handleSwitchChange = async (e, id) => {
    console.log("id", id);
    // const updatedRows = dataArray.map(async (prod) => {
    //   if (prod.id === id) {
    //     await updateProduct({ ...dataToUpdate, isActive: !prod.isActive });
    //     return {
    //       ...prod,
    //       isActive: e.target.checked,
    //     };
    //   }
    //   return prod;
    // });

    const foundRow = dataArray.find((p) => p.id === id);
    if (foundRow) {
      console.log("asd", foundRow);
      console.log(foundRow.isActive);
      await updateProduct({ ...foundRow, isActive: !foundRow.isActive }, () => {
        setTrigger((p) => !p);
      });
    }
    // setDataArray(foundRow);
  };

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 150,
      renderCell: (params) => {
        const { id } = params.row;

        return <button onClick={(e) => handleChangeEdit(e, id)}>Edit</button>;
      },
    },
    { field: "id", hide: true },
    { field: "col1", headerName: "NAME", width: 150 },
    {
      field: "col11",
      headerName: "isACTIVE",
      width: 150,
      renderCell: (params) => {
        const { id, col11 } = params.row;

        return (
          <Switch
            value={dataArray.isActive}
            checked={col11}
            onChange={(e) => handleSwitchChange(e, id)}
          />
        );
      },
    },
    { field: "col3", headerName: "BRAND URL", width: 150 },
    { field: "col4", headerName: "BRAND", width: 150 },
    { field: "col5", headerName: "CATEGORY", width: 150 },
    { field: "col6", headerName: "PRICE", width: 150 },
    { field: "col7", headerName: "IMAGE", width: 150 },
    { field: "col8", headerName: "SUB-CATEGORY", width: 150 },
    { field: "col9", headerName: "QUANTITY", width: 150 },
    { field: "col10", headerName: "STOCK", width: 150 },
  ];

  const handleChange = (e) => {
    e.preventDefault();
  };
  console.log("datauptodate", dataToUpdate);

  console.log("datauptodate", dataToUpdate.name);
  console.log("formik.Values", formik.values);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen2}
        onClose={handleClose}
        className={styles.modal2}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <form className={styles.formContainer} onSubmit={formik.handleSubmit}>
          {" "}
          <input
            type="hidden"
            name="image"
            value={uploadedImageUrl}
            onChange={formik.handleChange}
          />
          <h2>Crear Producto</h2>{" "}
          <button className={styles.x} onClick={handleClose}>
            X
          </button>
          <div className={styles.inputGroup}>
            {" "}
            <div className={styles.inputLeft}>
              <div className={styles.inputContainer}>
                <label>Name </label>
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
              <div className={styles.inputContainer}>
                <label>Brand </label>
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
              <div className={styles.inputContainer}>
                <label>Price </label>
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
              <div className={styles.inputContainer}>
                <label>Stock </label>
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
              <div className={styles.inputContainer}>
                <label>isActive </label>
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
            </div>
            <div className={styles.inputRight}>
              <div className={styles.inputContainer}>
                <label>Category </label>
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
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                  />
                </div>
              </div>
              <div className={styles.inputContainer}>
                <label> Sub-Category </label>
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
                    error={
                      formik.touched.subCategory && formik.errors.subCategory
                    }
                    helperText={
                      formik.touched.subCategory && formik.errors.subCategory
                    }
                  />
                </div>
              </div>

              <div className={styles.inputContainer}>
                <label> Image </label>
                <div className={styles.imageFileCantainer}>
                  {/* <div className={styles.imageCoverBtn}> Select file </div> */}
                  <div className={styles.selectImageInput}>
                    <Input
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      bordered
                      className={styles["field"]}
                      color="primary"
                      value=""
                    />
                  </div>
                  <div className={styles.imageInputs}>
                    <button className={styles.loadButton} onClick={submitImage}>
                      Load Image
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.imageDisplay}>
                {uploadedImageUrl && (
                  <div className={styles["image-container"]}>
                    <img
                      src={uploadedImageUrl}
                      alt="Uploaded Image"
                      className={styles.image}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>{" "}
          <button type="submit" className={styles["btn-green"]}>
            Submit
          </button>
        </form>
      </Modal>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        className={styles.modal2}
        contentLabel="Update Product"
      >
        <div>
          <form
            className={styles["form-container"]}
            onSubmit={formik.handleSubmit}
          >
            <div className={styles.xContainer}>
              <div className={styles.x}>
                <button onClick={closeModal}>X</button>
              </div>
            </div>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Edit Product</h2>
            </div>
            <div className={styles.nameIdContainer}>
              <div className={styles.nameCont}>
                <h4 className={styles.h4}> Product Name</h4>
                <p>{dataToUpdate.name} </p>
              </div>

              <div className={styles.idCont}>
                <h4 className={styles.h4}> Product ID</h4>
                <p> {dataToUpdate.id}</p>
              </div>
            </div>
            <div>
              {" "}
              <input
                type="hidden"
                name="image"
                value={uploadedImageUrl}
                onChange={formik.handleChange}
              />{" "}
            </div>
            <div className={styles.inputContainer}>
              <Input
                bordered
                className={styles["field"]}
                type="number"
                min={1}
                placeholder="price"
                color="primary"
                name="price"
                id="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                error={formik.touched.price && formik.errors.price}
                helperText={formik.touched.price && formik.errors.price}
              />
              <Input
                bordered
                className={styles["field"]}
                type="number"
                min={1}
                placeholder="stock"
                color="primary"
                name="stock"
                id="stock"
                onChange={formik.handleChange}
                value={formik.values.stock}
                error={formik.touched.stock && formik.errors.stock}
                helperText={formik.touched.stock && formik.errors.stock}
              />{" "}
            </div>
            <div className={styles.imageContainer}>
              <Input
                type="file"
                id="image"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
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
              <Button
                auto
                className={styles["btn-green"]}
                onClick={submitImage}
              >
                Upload Image
              </Button>{" "}
            </div>
            <Button auto type="submit" className={styles["btn-green"]}>
              Submit
            </Button>
          </form>
        </div>
      </Modal>
      <h2>Products</h2>
      <button onClick={handleOpen}>+ Add Product</button>

      <div className={styles.tableContainer}>
        <div className={styles.table}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default ProductsDash;
{
  /* <form>
          <div className={styles.inputContainer}>
            <input placeholder="Price" onChange={handleChange} />
            <input placeholder="Stock" onChange={handleChange} />
            <input placeholder="image" onChange={handleChange} />
          </div>
          <div>
            <button>Save Changes</button>{" "}
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form> */
}
