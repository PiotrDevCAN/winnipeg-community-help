import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRouteContext } from '../context/RouteContext';
import ProtectedRoute from '../components/Auth/ProtectedRoute';

const AppRoutes = () => {

    const { routes: data } = useRouteContext();

    return (
        <Routes>
            {data.map(
                ({ path, Component, protect }) => {
                    if (protect) {
                        return <Route key={path} path={path} element={<ProtectedRoute component={Component} />} />
                    } else {
                        return <Route key={path} path={path} element={<Component />} />
                    }
                }
            )}
        </Routes>
    );
};

export default AppRoutes;
