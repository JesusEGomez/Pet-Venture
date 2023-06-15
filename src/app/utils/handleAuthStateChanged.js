import { onAuthStateChanged } from "firebase/auth";
// import { dispatch, setUserState, setUserInfo } from "../redux/actions";
import { setUserInfo, setUserState } from "../../../redux/actions";
import {
  auth,
  registerNewUser,
  userExist,
  getUserInfo,
} from "@/app/firebase/firebaseConfig";

export function handleAuthStateChanged(dispatch) {
  onAuthStateChanged(auth, async (user) => {
    console.log(user);
    if (user) {
      const isRegistered = userExist(user.uid);
      if (isRegistered) {
        const userInfo = await getUserInfo(user.uid);
        if (userInfo?.processCompleted) {
          dispatch(setUserState(3));
          dispatch(setUserInfo(userInfo));
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: user.photoURL,
            username: "",
            processCompleted: false,
            carrito: [],
            compras: [],
          });
          dispatch(setUserState(2));
          dispatch(setUserInfo(userInfo));
        }
      }
    } else {
      dispatch(setUserState(1));
    }
  });
}
