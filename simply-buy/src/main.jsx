import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./providers/AuthProvider";
import ProductsDataProvider from "./providers/ProductsDataProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductsDataProvider>
        <RouterProvider router={router} />{" "}
      </ProductsDataProvider>
    </AuthProvider>
  </StrictMode>
);
