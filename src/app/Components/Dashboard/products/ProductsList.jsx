import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getFakeProducts,
  postFakeProduct,
} from "@/app/fakeApi/getFakeProducts";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./productsList.module.css";
import Link from "next/link";
import Swal from "sweetalert2";
import { StyledInputContainer, Switch } from "@nextui-org/react";
import Modal from "react-modal";
import { getAllProducts, updateProduct } from "@/app/Firebase/firebaseConfig";
import { Input, Grid, Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { functionsIn } from "lodash-es";
import { useDispatch } from "react-redux";
import {
  getBrands,
  getCategories,
  getSubCategories,
  getProducts,
} from "../../../../../redux/actions";

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
  const dispatch = useDispatch();
  const [dataArray, setDataArray] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [imageEdit, setImageEdit] = useState({});
  const [image, setImage] = useState({});
  const [imageCreate, setImageCreate] = useState({});
  const [dataToUpdate, setDataToUpdate] = useState({});
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const [trigger, setTrigger] = useState(false);
  const [showUpload, setShowUpload] = useState(true);
  let allProducts = [];
  let brands = useSelector((state) => state.brands);

  let categories = useSelector((state) => state.categories);
  let subCategories = useSelector((state) => state.subCategories);

  // console.log("allProducts", allProducts);

  useEffect(() => {
    const getDbProducts = async () => {
      try {
        // const response =
        // const response = (await axios.get("https://pet-venture-2-1wd1dd3wy-jesusegomez.vercel.app/api/products"))
        // (await axios.get("http://localhost:3000/api/products")).data;
        // const response = getFakeProducts();

        // console.log("response", response);
        // dispatch(getProducts(response));
        allProducts = await getAllProducts();
        setDataArray(allProducts);
      } catch (error) {
        console.error(error);
      }
    };

    getDbProducts();
  }, [trigger]);

  useEffect(() => {
    const filterBrands = () => {
      const brandsArr = allProducts.map((b) => b.brand);
      const uniqueBrands = [...new Set(brandsArr)];
      return uniqueBrands;
    };

    const filterCategory = () => {
      const categoryArr = allProducts.map((b) => b.category);
      const uniqueCategory = [...new Set(categoryArr)];
      return uniqueCategory;
    };

    const filterSubCategory = () => {
      const subCategoryArr = allProducts.map((b) => b.subCategory);
      const uniqueSubCategory = [...new Set(subCategoryArr)];
      return uniqueSubCategory;
    };

    dispatch(getBrands(filterBrands()));
    dispatch(getSubCategories(filterSubCategory()));
    dispatch(getCategories(filterCategory()));
  }, [allProducts.length]);

  // console.log("brands", brands);
  useEffect(() => {
    if (image.name) {
      // console.log("image", image);
      setShowUpload(false);
    } else {
      console.log("image else", Object.keys(image).length);

      setShowUpload(true);
    }
  }, [image]);

  function handleChangeEdit(e, id) {
    e.preventDefault();

    let findDataToUpdate = dataArray.find((p) => p.id === id);

    console.log("findDataToUpdate", findDataToUpdate);
    setDataToUpdate(findDataToUpdate);
    setIsOpen(true);
  }

  //& formik ////

  const formikEdit = useFormik({
    initialValues: {
      stock: "",
      price: "",
      image: "",
    },

    validationSchema: Yup.object({
      price: Yup.number().min(1, "El precio debe ser mayor a 1"),
      stock: Yup.number().min(0, "El precio debe ser mayor a 0"),
    }),

    //! cambiar esto //////////////////////////
    onSubmit: async (values) => {
      const tmp = { ...dataToUpdate };
      tmp.price = values.price;
      tmp.stock = values.stock;
      tmp.image = values.image;
      console.log("tmp", tmp);
      await updateProduct(tmp, () => setTrigger((p) => !p));
      closeModal();
      Swal.fire({
        title: "Edicion Exitosa",
        // text: "Te has registrado con exito",
        icon: "success",
        confirmButtonText: "Continuar",
      });
    },
    validateOnBlur: true,
  });

  const formikCreate = useFormik({
    initialValues: {
      // id: "", //&comentar con api levantada
      name: "",
      brand: "",
      price: "",
      image: "",
      category: "",
      subCategory: "",
      stock: "",
      isActive: "true",
      image: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Máximo 20 caracteres")
        .min(1, "Mínimo 5 caracteres")
        .required("Campo requerido"),
      brand: Yup.string()
        .max(50, "Máximo 50 caracteres")
        .min(1, "Mínimo 5 caracteres")
        .required("Campo requerido"),
      price: Yup.number()
        .min(1, "El precio debe ser mayor a 1")
        .required("Campo requerido"),
      category: Yup.string()
        .max(50, "Máximo 50 caracteres")
        .min(1, "Mínimo 5 caracteres")
        .required("Campo requerido"),
      subCategory: Yup.string()
        .max(50, "Máximo 50 caracteres")
        .min(1, "Mínimo 1 caracteres")
        .required("Campo requerido"),
      image: Yup.string().required("Campo requerido"),
      stock: Yup.string()
        .min(0, "El stock debe ser mayor a 0")
        .required("Campo requerido"),
    }),

    onSubmit: async (values) => {
      console.log("values", values);
      values.id = Math.floor(Math.random() * 1000000).toString();
      postFakeProduct(values);
      const response = await axios.post("/api/createProduct", values);

      handleClose();

      Swal.fire({
        title: "Producto Creado",
        text: "Producto creado exitosamente",
        icon: "success",
        confirmButtonText: "Continuar",
      });
    },
    validateOnBlur: true,
  });

  //& Claudinary ////

  const submitImageEdit = () => {
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
        formikEdit.setFieldValue("image", imageUrl); // Setea la URL en el campo "image" del formulario
        formikEdit.handleSubmit(); // Envía el formulario
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitImageCreate = () => {
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
        formikCreate.setFieldValue("image", imageUrl); // Setea la URL en el campo "image" del formulario
        formikCreate.handleSubmit(); // Envía el formulario
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
  //* Edit
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setImage("");
    setUploadedImageUrl("");
    setIsOpen(false);
    formikEdit.resetForm();
  }
  //* create
  function handleOpen() {
    setIsOpen2(true);
  }

  function handleClose() {
    setImage("");
    setUploadedImageUrl("");
    setIsOpen2(false);
    formikCreate.resetForm();
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

    const foundRow = dataArray.find((p) => p.id === id);
    if (foundRow) {
      console.log("asd", foundRow);
      console.log(foundRow.isActive);
      await updateProduct({ ...foundRow, isActive: !foundRow.isActive }, () => {
        setTrigger((p) => !p);
      });
    }
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

  const handleRemoveImage = (e) => {
    e.preventDefault();

    setUploadedImageUrl("");
  };
  // console.log("datauptodate", dataToUpdate);
  // console.log("datauptodate", dataToUpdate.name);
  // console.log("formikCreate.Values", formikCreate.values);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen2}
        onClose={handleClose}
        className={styles.modal2}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <form
          className={styles.formContainer}
          onSubmit={formikCreate.handleSubmit}
        >
          {" "}
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
                    placeholder="Name"
                    color="primary"
                    name="name"
                    onChange={formikCreate.handleChange}
                    value={formikCreate.values.name}
                    error={
                      formikCreate.touched.name && formikCreate.errors.name
                    }
                    helperText={
                      formikCreate.touched.name && formikCreate.errors.name
                    }
                  />
                </div>
              </div>

              <div className={styles.inputContainer}>
                <label>Brand </label>
                <select
                  id="brand"
                  name="brand"
                  className={styles.select}
                  onChange={formikCreate.handleChange}
                  value={formikCreate.values.brand}
                >
                  <option value={"none"}>Filter by Brand</option>

                  {brands?.map((b, i) => (
                    <option key={i} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputContainer}>
                <label>Category </label>
                <select
                  id="category"
                  name="category"
                  className={styles.select}
                  onChange={formikCreate.handleChange}
                  value={formikCreate.values.category}
                >
                  {" "}
                  <option value={"none"} defaultValue={"Filter by Category"}>
                    Filter by Category
                  </option>
                  {categories?.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputContainer}>
                <label>SubCategory </label>
                <select
                  id="subCategory"
                  name="subCategory"
                  className={styles.select}
                  onChange={formikCreate.handleChange}
                  value={formikCreate.values.subCategory}
                >
                  <option value={"none"}>Filter by SubCategory</option>

                  {subCategories?.map((sc, i) => (
                    <option key={i} value={sc}>
                      {sc}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.inputContainer}>
                <label>Price </label>
                <div>
                  <Input
                    // aria-label="Enter your name"
                    bordered
                    className={styles["field"]}
                    type="number"
                    min={1}
                    placeholder="price"
                    color="primary"
                    name="price"
                    onChange={formikCreate.handleChange}
                    value={formikCreate.values.price}
                    error={
                      formikCreate.touched.price && formikCreate.errors.price
                    }
                    helperText={
                      formikCreate.touched.price && formikCreate.errors.price
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputRight}>
              <div className={styles.inputContainer}>
                <div>
                  {" "}
                  <label>Stock </label>
                  <Input
                    // aria-label="Enter your name"
                    bordered
                    className={styles["field"]}
                    type="number"
                    min={1}
                    placeholder="stock"
                    color="primary"
                    name="stock"
                    onChange={formikCreate.handleChange}
                    value={formikCreate.values.stock}
                    error={
                      formikCreate.touched.stock && formikCreate.errors.stock
                    }
                    helperText={
                      formikCreate.touched.stock && formikCreate.errors.stock
                    }
                  />
                </div>
                <div className={styles.inputContainer}>
                  <div>
                    <label>Brand URL </label>
                    <Input
                      bordered
                      className={styles["field"]}
                      type="text"
                      placeholder="Brand URL"
                      color="primary"
                      name="brand_url"
                      onChange={formikCreate.handleChange}
                      value={formikCreate.values.brand_url}
                      error={
                        formikCreate.touched.name && formikCreate.errors.name
                      }
                      helperText={
                        formikCreate.touched.name && formikCreate.errors.name
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.inputContainer}>
                  {/* <label> Image </label> */}

                  <div className={styles.imageFileContainer}>
                    <div className={styles.selectImageInput}>
                      <p className={styles.p}>Select Image</p>
                      <input
                        aria-label="Input field"
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className={styles.selectfile}
                        value=""
                      />
                    </div>
                  </div>
                  <div className={styles.imageInputs} disabled={showUpload}>
                    <button
                      className={styles.loadButton}
                      onClick={submitImageCreate}
                    >
                      Upload File
                    </button>
                  </div>
                </div>
                <input
                  name="image"
                  value={uploadedImageUrl}
                  onChange={formikCreate.handleChange}
                  aria-label="Input field"
                />
              </div>{" "}
              <div className={styles.imageDisplay}>
                {uploadedImageUrl && (
                  <div className={styles["image-container"]}>
                    <img
                      src={uploadedImageUrl}
                      alt="Uploaded Image"
                      className={styles.image}
                    />
                    <button onClick={handleRemoveImage}> X </button>
                  </div>
                )}
              </div>
            </div>
          </div>
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
        // contentLabel="Update Product"
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <div className={styles.mainContainer}>
          <form
            className={styles["form-container"]}
            onSubmit={formikEdit.handleSubmit}
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
            <div className={styles.nameCont}>
              <h4 className={styles.h4}> Price</h4>

              <Input
                // aria-label="Enter your name"
                bordered
                className={styles["field"]}
                type="number"
                min={1}
                placeholder="price"
                color="primary"
                name="price"
                id="price"
                onChange={formikEdit.handleChange}
                value={formikEdit.values.price}
                error={formikEdit.touched.price && formikEdit.errors.price}
                helperText={formikEdit.touched.price && formikEdit.errors.price}
              />
            </div>
            <div className={styles.idCont}>
              <h4 className={styles.h4}> Stock</h4>
              <Input
                // aria-label="Enter your name"
                bordered
                className={styles["field"]}
                type="number"
                min={1}
                placeholder="stock"
                color="primary"
                name="stock"
                id="stock"
                onChange={formikEdit.handleChange}
                value={formikEdit.values.stock}
                error={formikEdit.touched.stock && formikEdit.errors.stock}
                helperText={formikEdit.touched.stock && formikEdit.errors.stock}
              />{" "}
            </div>
            <div className={styles.inputContainer}>
              {/* <label> Image </label> */}

              <div className={styles.imageFileContainer}>
                {/* <div className={styles.imageCoverBtn}> Select file </div> */}
                <div className={styles.selectImageInput}>
                  <p className={styles.p}>Select Image</p>
                  <input
                    // aria-label="Enter your name"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className={styles.selectfile}
                    value=""
                  />
                </div>
              </div>
              <div className={styles.imageInputs} disabled={showUpload}>
                <button className={styles.loadButton} onClick={submitImageEdit}>
                  Upload File
                </button>
              </div>
            </div>

            <div className={styles.nameCont}>
              <h4 className={styles.h4}> Image URL</h4>

              <div>
                <Input
                  // aria-label="Enter your name"
                  className={styles["field"]}
                  name="image"
                  value={uploadedImageUrl}
                  onChange={formikEdit.handleChange}
                />
              </div>
            </div>
            {uploadedImageUrl && (
              <div className={styles["image-container"]}>
                <img
                  src={uploadedImageUrl}
                  alt="Uploaded Image"
                  className={styles.image}
                />
                <button onClick={handleRemoveImage}> X </button>
              </div>
            )}
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
