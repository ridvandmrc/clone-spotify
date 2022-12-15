import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Authorization, Loggedin, Login } from "../common/components";

import { Discover } from "./Discover/components/Discover";

export const Routes = () => {
  return useRoutes([
    {
      path: "/main",
      element: <Authorization />,
      children: [
        {
          path: "discover",
          element: <Discover />,
        },
        {
          path: "*",
          element: <Navigate to="/main/discover" />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/loggedin",
      element: <Loggedin />,
    },
    {
      path: "*",
      element: <Navigate to="/main/test" />,
    },
  ]);
};
