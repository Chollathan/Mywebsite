import React from "react";
import ReactDOM from "react-dom/client"; // ✅ นำเข้า ReactDOM ให้ถูกต้อง
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
