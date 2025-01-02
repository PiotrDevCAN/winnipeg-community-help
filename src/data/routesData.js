import HomePage from '@/pages/HomePage';

import HelpRequestPage from '@/pages/HelpRequestPage'; // form
import HelpRequestSelectionPage from '@/pages/HelpRequestSelectionPage'; // selection
import HelpRequestListPage from '@/pages/HelpRequestListPage'; // list
import HelpRequestCardsPage from '@/pages/HelpRequestCardsPage'; // cards

import HelpOfferPage from '@/pages/HelpOfferPage'; // form
import HelpOfferSelectionPage from '@/pages/HelpOfferSelectionPage'; // selection
import HelpOfferListPage from '@/pages/HelpOfferListPage'; // list
import HelpOfferCardsPage from '@/pages/HelpOfferCardsPage'; // cards

import CommunityPage from '@/pages/CommunityPage'; // form 
import CommunityListPage from '@/pages/CommunityListPage'; // list
import CommunityCardsPage from '@/pages/CommunityCardsPage'; // cards

import VolunteerPage from '@/pages/VolunteerPage'; // form 
import VolunteerListPage from '@/pages/VolunteerListPage'; // list
import VolunteerCardsPage from '@/pages/VolunteerCardsPage'; // cards

import UserPage from '@/pages/UserPage'; // form 
import UserListPage from '@/pages/UserListPage'; // list
import UserCardsPage from '@/pages/UserCardsPage'; // cards

import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import RemindPage from '@/pages/RemindPage';
import LogoutPage from '@/pages/LogoutPage';

import MyProfilePage from '@/pages/MyProfilePage';
import MyHelpRequests from '@/pages/MyHelpRequests';
import MyHelpOffers from '@/pages/MyHelpOffers';
import MyCommunityPage from '@/pages/MyCommunityPage';

import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import DonatePage from '@/pages/DonatePage';
import DataPrivacyPage from '@/pages/DataPrivacyPage';
import DataDeletionPage from '@/pages/DataDeletionPage';
import NotFoundPage from '@/pages/NotFoundPage';

import HelpCategoryListPage from '@/pages/HelpCategoryListPage'; // list
import HelpTypeListPage from '@/pages/HelpTypeListPage'; // list

const helpRequestListHeader = 'List of help requests';
const helpOfferListHeader = 'List of help offers';
const communityListHeader = 'List of communities';
const volunteerListHeader = 'List of volunteers';
const userListHeader = 'List of users';
const helpCategoryListHeader = 'List of help categories';
const helpTypeListHeader = 'List of help types';

const routesData = [
    // Home
    { path: "/", section: 'home', name: "Winnipeg Cares - local communities help centre", Component: HomePage },

    // Help request
    { path: "/request/new", mode: 'new', section: 'request', protect: true, name: "Ask for help in your community", Component: HelpRequestSelectionPage },
    { path: "/request/new/basic", section: 'request', protect: true, name: "Ask for help in your community", Component: HelpRequestPage },
    { path: "/request/:itemId/details", mode: 'view', section: 'request', protect: true, name: "View help request", Component: HelpRequestPage },
    { path: "/request/:itemId/edit", mode: 'edit', section: 'request', protect: true, name: "Edit help request", Component: HelpRequestPage },
    { path: "/request/list", section: 'request', protect: true, admin: true, name: helpRequestListHeader, Component: HelpRequestListPage },
    { path: "/request/cards", section: 'request', protect: true, name: "Cards of help requests", Component: HelpRequestCardsPage },
    { path: "/request/cards/community/:communityId", section: 'request', protect: true, name: "Cards of help requests", Component: HelpRequestCardsPage },
    { path: "/request/cards/type/:typeId", section: 'request', protect: true, name: "Cards of help requests", Component: HelpRequestCardsPage },
    { path: "/request/cards/user/:userId", section: 'request', protect: true, name: "Cards of help requests", Component: HelpRequestCardsPage },
    { path: "/request/cards/volunteer/:volunteerId", section: 'request', protect: true, name: "Cards of help requests", Component: HelpRequestCardsPage },

    // Help Offer
    { path: "/offer/new", mode: 'new', section: 'offer', protect: true, name: "Offer help to your community", Component: HelpOfferSelectionPage },
    { path: "/offer/new/basic", section: 'offer', protect: true, name: "Offer help to your community", Component: HelpOfferPage },
    { path: "/offer/:itemId/details", mode: 'view', section: 'offer', protect: true, name: "View help offer", Component: HelpOfferPage },
    { path: "/offer/:itemId/edit", mode: 'edit', section: 'offer', protect: true, name: "Edit help offer", Component: HelpOfferPage },
    { path: "/offer/list", section: 'offer', protect: true, admin: true, name: helpOfferListHeader, Component: HelpOfferListPage },
    { path: "/offer/cards", section: 'offer', protect: true, name: "Cards of help offers", Component: HelpOfferCardsPage },
    { path: "/offer/cards/community/:communityId", section: 'offer', protect: true, name: "Cards of help offers", Component: HelpOfferCardsPage },
    { path: "/offer/cards/type/:typeId", section: 'offer', protect: true, name: "Cards of help offers", Component: HelpOfferCardsPage },
    { path: "/offer/cards/user/:userId", section: 'offer', protect: true, name: "Cards of help offers", Component: HelpOfferCardsPage },
    { path: "/offer/cards/volunteer/:volunteerId", section: 'offer', protect: true, name: "Cards of help offers", Component: HelpOfferCardsPage },

    // Community
    { path: "/community/new", mode: 'new', section: 'community', protect: true, name: "Register new community", Component: CommunityPage },
    { path: "/community/:itemId/details", mode: 'view', section: 'community', protect: true, name: "View community", Component: CommunityPage },
    { path: "/community/:itemId/edit", mode: 'edit', section: 'community', protect: true, name: "Edit community", Component: CommunityPage },
    { path: "/community/list", section: 'community', protect: true, admin: true, name: communityListHeader, Component: CommunityListPage },
    { path: "/community/cards", section: 'community', protect: true, name: "Cards of communities", Component: CommunityCardsPage },

    // Volunteer
    { path: "/volunteer/new", mode: 'new', section: 'volunteer', protect: true, name: "Register new volunteer", Component: VolunteerPage },
    { path: "/volunteer/:itemId/details", mode: 'view', section: 'volunteer', protect: true, name: "View volunteer", Component: VolunteerPage },
    { path: "/volunteer/:itemId/edit", mode: 'edit', section: 'volunteer', protect: true, name: "Edit volunteer", Component: VolunteerPage },
    { path: "/volunteer/:itemId/requests", section: 'community', protect: true, name: volunteerListHeader, Component: VolunteerListPage },
    { path: "/volunteer/:itemId/offers", section: 'community', protect: true, name: volunteerListHeader, Component: VolunteerListPage },
    { path: "/volunteer/list", section: 'volunteer', protect: true, admin: true, name: volunteerListHeader, Component: VolunteerListPage },
    { path: "/volunteer/cards", section: 'volunteer', protect: true, name: "Cards of volunteers", Component: VolunteerCardsPage },
    { path: "/volunteer/cards/community/:communityId", section: 'volunteer', protect: true, name: "Cards of volunteers", Component: VolunteerCardsPage },

    // User 
    { path: "/user/new", mode: 'new', section: 'user', protect: true, name: "Register new user", Component: UserPage },
    { path: "/user/:itemId/details", mode: 'view', section: 'user', protect: true, name: "View user", Component: UserPage },
    { path: "/user/:itemId/edit", mode: 'edit', section: 'user', protect: true, name: "Edit user", Component: UserPage },
    { path: "/user/:itemId/requests", section: 'user', protect: true, name: userListHeader, Component: UserListPage },
    { path: "/user/:itemId/offers", section: 'user', protect: true, name: userListHeader, Component: UserListPage },
    { path: "/user/list", section: 'user', protect: true, admin: true, name: userListHeader, Component: UserListPage },
    { path: "/user/cards", section: 'user', protect: true, name: "Cards of users", Component: UserCardsPage },
    { path: "/user/cards/community/:communityId", section: 'user', protect: true, name: "Cards of users", Component: UserCardsPage },

    // Auth
    { path: "/login", section: 'auth', name: "Sign In", Component: LoginPage },             // OK
    { path: "/register", section: 'auth', name: "Sign Up", Component: RegisterPage },       // OK
    { path: "/remind", section: 'auth', name: "Remind password", Component: RemindPage },   // OK
    { path: "/logout", section: 'auth', protect: true, name: "Leave the application", Component: LogoutPage },

    { path: "/myProfile", section: 'auth', protect: true, name: "My profile", Component: MyProfilePage },
    { path: "/myHelpRequests", section: 'auth', protect: true, name: "My help requests", Component: MyHelpRequests },
    { path: "/myHelpOffers", section: 'auth', protect: true, name: "My help offers", Component: MyHelpOffers },
    { path: "/myCommunity", section: 'auth', protect: true, name: "My community", Component: MyCommunityPage },

    { path: "/helpCategory/list", section: 'category', protect: true, admin: true, name: helpCategoryListHeader, Component: HelpCategoryListPage },
    { path: "/helpType/list", section: 'type', protect: true, admin: true, name: helpTypeListHeader, Component: HelpTypeListPage },

    // Auxiliary
    { path: "/about", section: 'about', name: "About Us", Component: AboutPage },
    { path: "/contact", section: 'contact', name: "Contact Us", Component: ContactPage },
    { path: "/donate", section: 'donate', name: "Donate Us", Component: DonatePage },
    { path: "/dataPrivacy", section: 'contact', name: "Privacy Policy", Component: DataPrivacyPage },
    { path: "/dataDeletion", section: 'contact', name: "Data Deletion Policy", Component: DataDeletionPage },
    { path: "*", name: "Page Not Found", Component: NotFoundPage },
];

export default routesData;