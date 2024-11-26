import HomePage from './../pages/HomePage';

import HelpRequestPage from '../pages/HelpRequestPage'; // form
import HelpRequestSelectionPage from '../pages/HelpRequestSelectionPage'; // selection
import HelpRequestListPage from '../pages/HelpRequestListPage'; // list
import HelpRequestCardsPage from '../pages/HelpRequestCardsPage'; // cards

import HelpOfferPage from '../pages/HelpOfferPage'; // form
import HelpOfferSelectionPage from '../pages/HelpOfferSelectionPage'; // selection
import HelpOfferListPage from '../pages/HelpOfferListPage'; // list
import HelpOfferCardsPage from '../pages/HelpOfferCardsPage'; // cards

import CommunityPage from '../pages/CommunityPage'; // form 
import CommunityListPage from '../pages/CommunityListPage'; // list
import CommunityCardsPage from '../pages/CommunityCardsPage'; // cards

import VolunteerPage from '../pages/VolunteerPage'; // form 
import VolunteerListPage from '../pages/VolunteerListPage'; // list
import VolunteerCardsPage from '../pages/VolunteerCardsPage'; // cards

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RemindPage from '../pages/RemindPage';
import LogoutPage from '../pages/LogoutPage';

import MyProfilePage from '../pages/MyProfilePage';
import MyHelpRequests from '../pages/MyHelpRequests';
import MyHelpOffers from '../pages/MyHelpOffers';
import MyCommunityPage from '../pages/MyCommunityPage';

import AboutPage from './../pages/AboutPage';
import ContactPage from './../pages/ContactPage';
import DonatePage from './../pages/DonatePage';
import DataPrivacyPage from './../pages/DataPrivacyPage';
import DataDeletionPage from './../pages/DataDeletionPage';
import NotFoundPage from '../pages/NotFoundPage';

const routesData = [
    // Home
    { path: "/", section: 'home', name: "Winnipeg Cares - local communities help centre", Component: HomePage },

    // Help request
    { path: "/request/new", section: 'request', protect: true, name: "Ask for help in your community", Component: HelpRequestSelectionPage },
    { path: "/request/new/basic", section: 'request', protect: true, name: "Ask for help in your community", Component: HelpRequestPage },
    { path: "/request/view/:itemId", section: 'request', protect: true, name: "View record", Component: HelpRequestPage },
    { path: "/request/list", section: 'request', protect: true, name: "List of help requests", Component: HelpRequestListPage },
    { path: "/request/cards", section: 'request', protect: true, name: "Cards of help requests", Component: HelpRequestCardsPage },

    // Help Offer
    { path: "/offer/new", section: 'offer', protect: true, name: "Offer help to your community", Component: HelpOfferSelectionPage },
    { path: "/offer/new/basic", section: 'offer', protect: true, name: "Offer help to your community", Component: HelpOfferPage },
    { path: "/offer/view/:itemId", section: 'offer', protect: true, name: "View record", Component: HelpOfferPage },
    { path: "/offer/list", section: 'offer', protect: true, name: "List of help offers", Component: HelpOfferListPage },
    { path: "/offer/cards", section: 'offer', protect: true, name: "Cards of help offers", Component: HelpOfferCardsPage },

    // Community
    { path: "/community/new", section: 'community', protect: true, name: "Register new community", Component: CommunityPage },
    { path: "/community/view/:itemId", section: 'community', protect: true, name: "View record", Component: CommunityPage },
    { path: "/community/list", section: 'community', protect: true, name: "List of communities", Component: CommunityListPage },
    { path: "/community/cards", section: 'community', protect: true, name: "Cards of communities", Component: CommunityCardsPage },

    // Volunteer
    { path: "/volunteer/new", section: 'volunteer', protect: true, name: "Register new volunteer", Component: VolunteerPage },
    { path: "/volunteer/view/:itemId", section: 'volunteer', protect: true, name: "View record", Component: VolunteerPage },
    { path: "/volunteer/list", section: 'volunteer', protect: true, name: "List of volunteers", Component: VolunteerListPage },
    { path: "/volunteer/cards", section: 'volunteer', protect: true, name: "Cards of volunteers", Component: VolunteerCardsPage },

    // Auth
    { path: "/login", section: 'auth', name: "Sign In", Component: LoginPage },
    { path: "/register", section: 'auth', name: "Sign Up", Component: RegisterPage },
    { path: "/remind", section: 'auth', name: "Remind password", Component: RemindPage },
    { path: "/logout", section: 'auth', protect: true, name: "Leave the application", Component: LogoutPage },

    { path: "/myProfile", section: 'auth', protect: true, name: "My profile", Component: MyProfilePage },
    { path: "/myHelpRequests", section: 'auth', protect: true, name: "My help requests", Component: MyHelpRequests },
    { path: "/myHelpOffers", section: 'auth', protect: true, name: "My help offers", Component: MyHelpOffers },
    { path: "/myCommunity", section: 'auth', protect: true, name: "My community", Component: MyCommunityPage },
    

    // Auxiliary
    { path: "/about", section: 'about', name: "About Us", Component: AboutPage },
    { path: "/contact", section: 'contact', name: "Contact Us", Component: ContactPage },
    { path: "/donate", section: 'donate', name: "Donate Us", Component: DonatePage },
    { path: "/dataPrivacy", section: 'contact', name: "Winnipeg Cares Privacy Policy", Component: DataPrivacyPage },
    { path: "/dataDeletion", section: 'contact', name: "Winnipeg Cares Data Deletion Policy", Component: DataDeletionPage },
    { path: "*", name: "Page Not Found", Component: NotFoundPage },
];

export default routesData;