import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/products";
import SingleProductPage from "./pages/singleproductpage";
import { store } from "./store";
import { Provider } from "react-redux";
import CartPage from "./pages/cartpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <SingleProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
