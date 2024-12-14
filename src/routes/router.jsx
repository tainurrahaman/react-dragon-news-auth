import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomelayOut from "../layouts/HomelayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomelayOut></HomelayOut>,
  },
]);

export default router;
