import Swal from "sweetalert2";
import { registerNewPurchase } from "../firebase/firebaseConfig";

export const registerPurchase = async (status, id, userInfo) => {
  const { displayName } = userInfo;
  if (status === "approved") {
    const temporalCarrito = JSON.parse(localStorage.getItem("temporalCarrito"));
    console.log(temporalCarrito);
    await registerNewPurchase(temporalCarrito, id, displayName);
    Swal.fire({
      title: "Felicidades!",
      text: "Tu compra ah sido Exitosa",
      icon: "success",
      confirmButtonText: "Continuar",
    });
    localStorage.clear();
  }
};
