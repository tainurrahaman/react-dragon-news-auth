import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomelayOut from "../layouts/HomelayOut";
import CategoryNews from "../components/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomelayOut></HomelayOut>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: (params) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <h2>Eror</h2>,
  },
]);

export default router;
