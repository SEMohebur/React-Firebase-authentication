import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  //login na thaka kalin je componente jete cheye logine dhuke porechi etar madhome login er pore shei componente jete parbo  eta login er path state joma rakchi
  const location = useLocation();
  //   console.log(location);

  if (loading)
    return (
      <div className=" flex justify-center items-center">
        <span className=" loading loading-infinity loading-xl"></span>
      </div>
    );

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
