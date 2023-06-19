import { Provider } from "react-redux";
import store from "../redux/store";
import React, { useEffect } from "react";
import Modal from "react-modal";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
