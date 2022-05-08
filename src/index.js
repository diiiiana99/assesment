import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import HatchContextProvider from "./Context/HatchWays";

ReactDOM.render(
  <HatchContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HatchContextProvider>,
  document.getElementById("root")
);

