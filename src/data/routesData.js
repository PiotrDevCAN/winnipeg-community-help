import HomePage from './../pages/HomePage';

import HelpRequestPage from '../pages/HelpRequestPage'; // form
import HelpRequestListPage from '../pages/HelpRequestListPage'; // list

import HelpOfferPage from '../pages/HelpOfferPage'; // form
import HelpOfferListPage from '../pages/HelpOfferListPage'; // list

import CommunityPage from '../pages/CommunityPage'; // form 
import CommunityListPage from '../pages/CommunityListPage'; // list

import VolunteerPage from '../pages/VolunteerPage'; // form 
import VolunteerListPage from '../pages/VolunteerListPage'; // list

import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RemindPage from '../pages/RemindPage';
import AboutPage from './../pages/AboutPage';
import ContactPage from './../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

const routesData = [
    // Home
    { path: "/", name: "Winnipeg's comunities help center", Component: HomePage },
    { path: "/home", name: "Winnipeg's comunities help center", Component: HomePage },

    // Help request
    { path: "/request/new", name: "Ask for help in your community", Component: HelpRequestPage },
    { path: "/request/list", name: "List of help requests", Component: HelpRequestListPage },

    // Help Offer
    { path: "/offer/new", name: "Offer help to your community", Component: HelpOfferPage },
    { path: "/offer/list", name: "List of help offers", Component: HelpOfferListPage },

    // Community
    { path: "/community/new", name: "Register new community", Component: CommunityPage },
    { path: "/community/list", name: "List of communities", Component: CommunityListPage },

    // Volunteer
    { path: "/volunteer/new", name: "Register new community", Component: VolunteerPage },
    { path: "/volunteer/list", name: "List of communities", Component: VolunteerListPage },
    
    { path: "/about", name: "About Us", Component: AboutPage },
    { path: "/contact", name: "Contact Us", Component: ContactPage },

    { path: "/login", name: "Sign In", Component: LoginPage },
    { path: "/register", name: "Sign Up", Component: RegisterPage },
    { path: "/profile", name: "Edit profile", Component: ProfilePage },
    { path: "/remind", name: "Remind password", Component: RemindPage },

    { path: "*", name: "Page Not Found", Component: NotFoundPage },
];

export default routesData;