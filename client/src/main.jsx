import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {FieldLogin} from "./pages/LoginPage/index.jsx"
import {FieldRegister} from "./pages/RegisterPage/index.jsx"
import PageBlueTemplate from "./templates/PagesTemplates.jsx"

import React from 'react'
import './assets/styles/global-styles.css'
import './assets/styles/global-styles-responsive.css'

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<FieldLogin />} />
          <Route path="register" element={<FieldRegister />} />
    </Routes>
  </BrowserRouter>
);

