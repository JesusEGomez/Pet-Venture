import React, { useState, useEffect } from "react";
import styles from "./Filtros.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getBrands,
  getCategories,
  getSubCategories,
  getProducts,
} from "../../../../redux/actions";

const Filtros = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.products);

  const [brandSelect, setBrandSelect] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [subCategorySelect, setSubCategorySelect] = useState("");

  let brands = useSelector((state) => state.brands);
  let categories = useSelector((state) => state.categories);
  let subCategories = useSelector((state) => state.subCategories);

  const [filterPanel, setFilterPanel] = useState({
    name: "",
    brand: "none",
    category: "none",
    subCategory: "none",
    price: "none",
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  // ...
  
 // ...

useEffect(() => {
  dispatch(getProducts());
}, [dispatch]);

// ...

useEffect(() => {
  const filterBrands = () => {
    if (!allProducts) {
      return [];
    }
    const brandsArr = allProducts.map((b) => b.brand);
    const uniqueBrands = [...new Set(brandsArr)];
    return uniqueBrands;
  };

  const filterCategory = () => {
    if (!allProducts) {
      return [];
    }
    const categoryArr = allProducts.map((b) => b.category);
    const uniqueCategory = [...new Set(categoryArr)];
    return uniqueCategory;
  };

  const filterSubCategory = () => {
    if (!allProducts) {
      return [];
    }
    const subCategoryArr = allProducts.map((b) => b.subCategory);
    const uniqueSubCategory = [...new Set(subCategoryArr)];
    return uniqueSubCategory;
  };

  dispatch(getBrands(filterBrands()));
  dispatch(getSubCategories(filterSubCategory()));
  dispatch(getCategories(filterCategory()));
}, [allProducts]);

// ...

  const handleChange = (e) => {
    e.preventDefault();
    setFilterPanel((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleNameClick = (e) => {
    e.preventDefault();
    setFilterPanel((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleResetClick = (e) => {
    e.preventDefault();
   

    setFilterPanel({
      name: "",
      brand: "none",
      category: "none",
      subCategory: "none",
      price: "none",
    });
    setBrandSelect("");
    setCategorySelect("");
    setSubCategorySelect("");
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <input
            name="name"
            value={filterPanel.name}
            className={styles.input}
            onChange={handleChange}
            placeholder="Search..."
          ></input>
          <button
            name="name"
            value={filterPanel.name}
            type="submit"
            className={styles.searchButton}
            onClick={handleNameClick}
          >
            Search Name
          </button>{" "}
        </div>
        <div className={styles.selectContainer}>
          {/* <label htmlFor="" className={styles.label}>
            Brand
          </label> */}

          <select
            id="brand"
            name="brand"
            className={styles.select}
            onChange={(e) => handleChange(e)}
            value={brandSelect}
          >
            <option value={"none"}>Filter by Brand</option>
            {/* {console.log("filtros", brands)} */}
            {brands?.map((b, i) => (
              <option key={i} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectContainer}>
          {/* <label htmlFor="" className={styles.label}>
            Category
          </label> */}
          <select
            id="category"
            name="category"
            className={styles.select}
            onChange={(e) => handleChange(e)}
            value={categorySelect}
            // placeholder="Filter by Category"
          >
            {" "}
            <option value={"none"} defaultValue={"Filter by Category"}>
              Filter by Category
            </option>
            {/* {console.log("filtros", brands)} */}
            {categories?.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectContainer}>
          {/* <label htmlFor="" className={styles.label}>
            SubCategory
          </label> */}
          <select
            id="subCategory"
            name="subCategory"
            className={styles.select}
            onChange={(e) => handleChange(e)}
            value={subCategorySelect}
          >
            <option value={"none"}>Filter by SubCategory</option>
            {/* {console.log("filtros", brands)} */}
            {subCategories?.map((sc, i) => (
              <option key={i} value={sc}>
                {sc}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectContainer}>
          {/* <label htmlFor="" className={styles.label}>
            Price
          </label> */}
          <select
            id="price"
            name="price"
            className={styles.select}
            onChange={(e) => handleChange(e)}
          >
            {" "}
            <option key="none" value="none">
              Price
            </option>
            <option key="higher" value="higher">
              Higher
            </option>
            <option key="lower" value="lower">
              Lower
            </option>
          </select>
        </div>

        <button className={styles.deleteFilter} onClick={handleResetClick}>
          <span className={styles.front}>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default Filtros;
