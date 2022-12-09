import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import EstadosGlobalesProvider from "./Components/utils/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EstadosGlobalesProvider>
      <App />
    </EstadosGlobalesProvider>
  </BrowserRouter>
);
