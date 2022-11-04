import { Navigate, useLocation } from "react-router";
import {useAuth } from '../../utils/hooks/useAuth'



function AuthenticatedRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <div>LOADING</div>;
  }
  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AuthenticatedRoute;
