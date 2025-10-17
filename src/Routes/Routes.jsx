import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Profile from "../Pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Feture from "../Pages/Feture";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },

      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <About></About>
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/feture",
        element: (
          <PrivateRoutes>
            <Feture></Feture>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
