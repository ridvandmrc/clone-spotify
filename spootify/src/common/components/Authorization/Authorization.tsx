import { Navigate, Outlet } from "react-router-dom";
import CoreLayout from "../../layouts/CoreLayout";

export const Authorization = () => {
  if (!window.localStorage.getItem("code")) {
    return <Navigate to="/login" />;
  }

  return (
    <CoreLayout>
      <Outlet />
    </CoreLayout>
  );
};
