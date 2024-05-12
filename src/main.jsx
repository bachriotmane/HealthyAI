import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./assets/theme/theme.css";
import "./index.css";
import DataFetchingComponent from "./helpers/test.jsx";
import Summer from "./components/summer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
