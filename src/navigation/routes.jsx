import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./errorPage";
import { Layout } from "./layout";
import { Auth } from "../pages/auth";
import { Register } from "../pages/register";
import { PageList } from "../pages/ListPages";

export const getRoutes = (isAuth) => {
  return createBrowserRouter([
    {
      Component: Layout,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          Component: Register,
        },
        {
          path: "/list",
          Component: PageList
        },
        {
          path: "/auth",
          Component: Auth
        }
      ],
    },
  ]);
};
