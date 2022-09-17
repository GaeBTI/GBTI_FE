import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { color, font } from "./styles/theme";
//package.json NODE_PATH=src 넣어주기
ReactDOM.render(
  <ThemeProvider theme={{ ...color, ...font }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
