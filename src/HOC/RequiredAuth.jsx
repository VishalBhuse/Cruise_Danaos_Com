import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children, adminOnly = false }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const role = JSON.parse(localStorage.getItem("auth")) ?? { role: null };
  const { pathname } = useLocation();

  if (!isAuth) {
    return <Navigate to="/loginpage" state={{ from: pathname }} replace />;
  }

  if (adminOnly && role.role !== "admin") {
    return <Navigate to="/unauthor" replace />;
  }

  return children;
};

export default RequireAuth;
