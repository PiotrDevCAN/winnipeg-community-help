import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import routesData from '../data/routesData';
import menuData from '../data/menuData';
import menuDataNew from '../data/menuDataNew';

const RouteContext = createContext();

export const useRouteContext = () => useContext(RouteContext);

export const RouteProvider = ({ children }) => {
    const [routes, setRoutes] = useState(routesData);
    const [menuItems, setMenuItems] = useState(menuData);
    const [menuNewItems, setMenuNewItems] = useState(menuDataNew);

    const navigate = useNavigate();

    const myProfile = () => {
        navigate('/myProfile');
    };
    const askForHelp = () => {
        navigate('/request/new');
    };
    const offerHelp = () => {
        navigate('/offer/new');
    };
    const newVolunteer = () => {
        navigate('/volunteer/new');
    };
    const newCommunity = () => {
        navigate('/community/new');
    };
    const newUser = () => {
        navigate('/myProfile/new');
    };
    const myHelpRequests = () => {
        navigate('/myHelpRequests');
    };
    const myHelpOffers = () => {
        navigate('/myHelpOffers');
    };
    const myCommunity = () => {
        navigate('/myCommunity');
    };
    const leave = () => {
        navigate('/logout');
    };
    const signIn = () => {
        navigate('/login');
    };
    const signUp = () => {
        navigate('/register');
    };
    const remindPassword = () => {
        navigate('/remind');
    };

    return (
        <RouteContext.Provider value={{
            routes,
            menuItems,
            menuNewItems,
            myProfile,
            askForHelp,
            offerHelp,
            newVolunteer,
            newCommunity,
            newUser,
            myHelpRequests,
            myHelpOffers,
            myCommunity,
            leave,
            signIn,
            signUp,
            remindPassword,
        }}>
            {children}
        </RouteContext.Provider>
    );
}

export default RouteContext;