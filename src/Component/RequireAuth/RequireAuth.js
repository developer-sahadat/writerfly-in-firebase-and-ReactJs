import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../Firebase/init";
import Spinners from "../Shear/Spinners/Spinners";

function RequireAuth({ children }) {
  let location = useLocation();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Spinners />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
