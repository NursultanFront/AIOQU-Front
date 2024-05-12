import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LayoutMain from "./layout/LayoutMain.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LayoutMain>
      <App />
    </LayoutMain>
  </React.StrictMode>
);
