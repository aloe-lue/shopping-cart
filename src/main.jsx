import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import route from "./router/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(route);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
