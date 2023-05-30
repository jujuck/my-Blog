import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../contexts/UserContexts";

function Administration() {
  const { user } = useCurrentUser();
  if (user === "Connected") {
    return (
      <div className="container-fluid">
        <div className="row flex-fill">
          <nav className="col-2 bg-secondary vh-100">
            <h3 className="text-center text-white m-4">Menu</h3>
          </nav>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  return <Navigate to="/" replace />;
}

export default Administration;
