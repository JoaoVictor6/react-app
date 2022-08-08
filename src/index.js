import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { DataProvider } from "./Context/context";

import Base from "./styles/elements/Base"

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <Base/>
      <App />
    </DataProvider>
  </StrictMode>,
  rootElement
);