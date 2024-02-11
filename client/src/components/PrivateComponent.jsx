import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateComponent = ({ children }) => {
  const { auth } = useSelector((state) => state.userState);
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateComponent;
