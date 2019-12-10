import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { HotelProvider } from "./contexts/HotelContext";
import "./index.css";
import "./assets/fonts/icons.svg";
import "./assets/fonts/icons.ttf";
import "./assets/fonts/icons.woff";

ReactDOM.render(
  <HotelProvider>
    <App />
  </HotelProvider>,
  document.getElementById("root")
);
