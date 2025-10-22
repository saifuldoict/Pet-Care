import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  

  if (user && user?.email) {
    toast.success("✅ Welcome back! You are logged in.");
    return children;
  } else {
    return <Navigate to="/login"/>;
  }
};

export default PrivateRoute;
