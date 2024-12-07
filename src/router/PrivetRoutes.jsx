import {useContext} from "react";
import {AuthContext} from "../Layouts/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

const PrivetRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg bg-red-600"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
