import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Box from "./box";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Box />
  </StrictMode>,
);
