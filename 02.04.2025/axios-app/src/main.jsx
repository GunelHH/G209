import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Pet from "./components/Pet/Pet";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pet />
  </StrictMode>
);
