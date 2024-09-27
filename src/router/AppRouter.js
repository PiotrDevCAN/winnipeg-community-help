import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../data/routesData';

const AppRoutes = () => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
};

export default AppRoutes;
