import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContactProvider } from "./context/ContactContext.jsx";
import "./index.css"; // si usas estilos

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </React.StrictMode>
);