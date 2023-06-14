import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import database from "../utils/db.json";

const firebaseConfig = {
  apiKey: "AIzaSyAwcrHY5rIKNV57k9Bxj0pXKQRH1p7tUHs",
  authDomain: "pet-venture.firebaseapp.com",
  projectId: "pet-venture",
  storageBucket: "pet-venture.appspot.com",
  messagingSenderId: "182451092395",
  appId: "1:182451092395:web:9e8c2bdf9cf6d1fa31b0ee",
  measurementId: "G-FVG72QFE24",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export const addProduct = async (product) => {
  const docRef = await addDoc(collection(db, "productos"), product);
  return docRef;
};

export async function userExist(uid) {
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}

export async function existsUserName(username) {
  const users = [];
  const docsRef = collection(db, "users");
  const q = query(docsRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return users.length > 0 ? users[0].uid : null;
}

export async function registerNewUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
}

export async function updateUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
}
export async function updateProduct(product) {
  try {
    const collectionRef = collection(db, "productos");
    const docRef = doc(collectionRef, product.id);
    await setDoc(docRef, product);
  } catch (error) {
    console.error(error);
  }
}

export async function getUserInfo(uid) {
  const docRef = doc(db, "users", uid);
  const document = await getDoc(docRef);
  return document.data();
}
export async function logout() {
  await auth.signOut();
}
export default async function addDocuments() {
  for (const producto of database) {
    const ref = await addDoc(collection(db, "productos"), producto);
    console.log(ref);
  }
}
