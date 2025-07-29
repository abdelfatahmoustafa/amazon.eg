import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isUserAuthenticated = localStorage.getItem("userToken") !== null;
  if (!isUserAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
