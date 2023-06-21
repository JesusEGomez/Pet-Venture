import { Provider } from "react-redux";
import store from "../redux/store";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
