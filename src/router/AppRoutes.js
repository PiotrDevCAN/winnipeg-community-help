import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRouteContext } from '@/context/RouteContext';
import ProtectedRoute from '@/components/Auth/ProtectedRoute';

const AppRoutes = () => {
    const { routes } = useRouteContext();

    return (
        <Routes>
            {routes.map(({ path, Component, protect, admin, mode }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        protect ? (
                            <ProtectedRoute component={(props) => <Component {...props} mode={mode} />} admin={admin} />
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
