// import React from 'react'
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "flowbite";

import ZapateroProvider from "./context/ZapateroProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ZapateroProvider>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={1000}
          closeOnClick
          pauseOnHover={false}
        />

        <App />
      </ZapateroProvider>
    </BrowserRouter>
  </Provider>
);
