import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

/*
Usage (in Routes):
  <Route element={<ProtectedRoute />}>
    <Route path="/" element={<Home />} />
    ...
  </Route>

This will redirect unauthenticated users to /login and preserve the attempted location.
*/
// check if bypass is enabled (via env var or localStorage)




export default function ProtectedRoute() {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // redirect to login and keep original location in state
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}