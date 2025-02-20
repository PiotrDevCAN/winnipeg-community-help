import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import useAppRoutes from "@/customHooks/routes/useAppRoutes";

const AppRoutes = () => {
  const { routesData: routes } = useAppRoutes();
  return (
    <Routes>
      {routes.map(({ path, Component, protect, admin, mode }) => (
        <Route
          key={path}
          path={path}
          element={
            protect ? (
              <ProtectedRoute
                component={(props) => <Component {...props} mode={mode} />}
                admin={admin}
              />
            ) : (
              <Component mode={mode} />
            )
          }
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
