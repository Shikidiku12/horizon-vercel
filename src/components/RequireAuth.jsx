import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AuthContext from "../context/AuthContext";

const RequireAuth = ({ allowedRoles }) => {
  console.log("We are at require auth");
  // const { auth } = useAuth();
  const { auth, setAuth } = useContext(AuthContext);
  const location = useLocation();

  console.log("This is auth", auth);
  console.log("This is allowedroles", allowedRoles);

  const isAuthenticated = auth?.user;
  // const hasRequiredRole = auth?.roles?.some((role) =>
  //   allowedRoles.includes(role)
  // );
  const hasRequiredRole = allowedRoles[0] === auth?.roles; // Naging ganto kasi hindi pa naka-array to sa side ni arjay

  console.log("##########################");
  console.log(isAuthenticated);
  console.log(hasRequiredRole);

  if (isAuthenticated && hasRequiredRole) {
    return <Outlet />;
  } else if (isAuthenticated) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
  //   <Outlet />
  // ) : auth?.user ? (
  //   <Navigate to="/unauthorized" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );

  // return auth?.user ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );
};

export default RequireAuth;
