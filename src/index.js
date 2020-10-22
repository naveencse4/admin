import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

import MainApp from "./components/containers/App/MainApp";

render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>,
  document.getElementById("root")
);
