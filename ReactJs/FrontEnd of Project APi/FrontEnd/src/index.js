import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />

    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes> */}
  </BrowserRouter>,
  rootElement
);
