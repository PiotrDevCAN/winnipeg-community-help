import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import store from "./redux/store/store";
import { Provider } from "react-redux";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </StrictMode>
);
