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
    const requestHelpDetails = (id) => {
        navigate('/request/view/' + id);
    }
    const offerHelp = () => {
        navigate('/offer/new');
    };
    const offerHelpDetails = (id) => {
        navigate('/offer/view/' + id);
    }
    const newVolunteer = () => {
        navigate('/volunteer/new');
    };
    const volunteerDetails = (id) => {
        navigate('/volunteer/view/' + id);
    }
    const newCommunity = () => {
        navigate('/community/new');
    };
    const communityDetails = (id) => {
        navigate('/community/view/' + id);
    }
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
            requestHelpDetails,
            offerHelp,
            offerHelpDetails,
            newVolunteer,
            volunteerDetails,
            newCommunity,
            communityDetails,
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