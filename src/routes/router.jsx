import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomelayOut from "../layouts/HomelayOut";
import CategoryNews from "../components/CategoryNews";
import Authlayout from "../layouts/Authlayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import NewsDetails from "../pages/NewsDetails";

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
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <NewsDetails></NewsDetails>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "*",
    element: <h2>Eror</h2>,
  },
]);

export default router;
