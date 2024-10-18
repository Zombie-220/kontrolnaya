import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./errorPage";
import { Layout } from "./layout";
import { Auth } from "../pages/auth";
import { Register } from "../pages/register";

const authPages = [
    {
      path: "/profile",
      Component: Profile
    },
];

const notAuthPages = [
    {
      path: "/auth",
      Component: Auth
    },
    {
      path: "/register",
      Component: Register
    }
];

export const getRoutes = (isAuth) => {
  return createBrowserRouter([
    {
      Component: Layout,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          Component: Main,
        },

        ...(isAuth ? authPages : notAuthPages),
      ],
    },
  ]);
};
