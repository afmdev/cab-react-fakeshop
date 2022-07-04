import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import useIsAuthenticated from "../utils/useIsAuthenticated";
//TODO ask Marta about the solution for the redirect to home even when logged in
function ProtectedRoute({ children }) {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>{isAuthenticated ? children : <Navigate to="/no-logged" replace />}</>
  );
}

export default ProtectedRoute;
