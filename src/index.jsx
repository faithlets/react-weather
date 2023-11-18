import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);