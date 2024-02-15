import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../common/slices";
import { ROUTES } from "../constants";

const ProtectedRoute = () => {
  // const [userInfo] = useAuth();
  return true ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
export default ProtectedRoute;
