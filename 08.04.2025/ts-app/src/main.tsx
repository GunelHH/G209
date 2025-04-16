import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TS from "./TS.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <TS />
  </StrictMode>
);
