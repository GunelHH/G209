import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Contact from "./components/Contact";
import About from "./components/About";
import Card from "./components/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="card" element={<Card />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
