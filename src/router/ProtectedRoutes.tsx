import React from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
// import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const access_token: any = localStorage.getItem("access_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;

// const PrivateRoute: React.FC<React.ReactNode> = () => {
//   const auth = getAuth();
//   return auth ? <Outlet /> : <Navigate to={PATHS.signIn} />;
// };
