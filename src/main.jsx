import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import App from "./App.jsx";
// import "./assets/css/index.css";
import AuthProvider from "./context/AuthProvider";
import { MyTheme } from "./theme/MyTheme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider theme={MyTheme}>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
