import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequiresAuth() {
  const userToken = localStorage.getItem("userToken");
  const location = useLocation();

  return userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
