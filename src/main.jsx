import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App.jsx";

// Context Provider

// Route
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import ApiTest from "./pages/test/ApiTest.jsx";
import { CarouselTest } from "./pages/test/CarouselTest.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        element: <div>Not Found Isus</div>,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apitest",
        element: <ApiTest />,
      },
      {
        path: "/carouseltest",
        element: <CarouselTest />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
