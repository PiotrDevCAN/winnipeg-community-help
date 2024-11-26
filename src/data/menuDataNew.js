import { AppstoreAddOutlined } from '@ant-design/icons';
import { ContactsOutlined } from '@mui/icons-material';
import { MdOutlineVolunteerActivism, MdVolunteerActivism, MdOutlineContactSupport, MdOutlinePolicy, MdPolicy } from "react-icons/md";
import { TbBuildingCommunity, TbLayoutCards } from "react-icons/tb";
import { FaHome, FaListUl, FaDonate } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";

const menuDataNew = [
    {
        key: 'home',
        label: 'Home',
        icon: <FaHome />,
        children: [
            {
                key: 'homeOpt',
                label: 'Home',
                icon: <FaHome />,
                path: '/',
            },
            {
                key: 'about',
                label: 'About Us',
                icon: <ContactsOutlined />,
                path: '/about',
            },
            {
                key: 'contactUs',
                label: 'Contact Us',
                icon: <MdOutlineContactSupport />,
                path: '/contact',
            },
            {
                key: 'donateUs',
                label: 'Donate Us',
                icon: <FaDonate />,
                path: '/donate',
            },
            {
                key: 'privacyPolicy',
                label: 'Privacy Policy',
                icon: <MdOutlinePolicy />,
                path: '/dataPrivacy',
            },
            {
                key: 'deletionPolicy',
                label: 'Data Deletion Policy',
                icon: <MdPolicy />,
                path: '/dataDeletion',
            },
        ],
    },
    {
        key: 'request',
        label: 'Need help',
        icon: <MdOutlineVolunteerActivism />,
        children: [
            {
                key: 'newHelpRequest',
                label: 'New help request',
                icon: <AppstoreAddOutlined />,
                path: '/request/new',
            },
            {
                key: 'helpRequestsCards',
                label: 'All help requests',
                icon: <FaListUl />,
                path: '/request/cards',
            },
            {
                key: 'helpRequestsList',
                label: 'Manage help requests - for admins',
                icon: <TbLayoutCards />,
                path: '/request/list',
                admins: 'true',
            },
        ],
    },
    {
        key: 'offer',
        label: 'Offer help',
        icon: <MdVolunteerActivism />,
        children: [
            {
                key: 'newHelpOffer',
                label: 'New help offer',
                icon: <AppstoreAddOutlined />,
                path: '/offer/new',
            },
            {
                key: 'helpOffersCards',
                label: 'All help offers',
                icon: <FaListUl />,
                path: '/offer/cards',
            },
            {
                key: 'helpOffersList',
                label: 'Manage help offers - for admins',
                icon: <TbLayoutCards />,
                path: '/offer/list',
                admins: 'true',
            },
        ],
    },
    {
        key: 'volunteers',
        label: 'Volunteers',
        icon: <RiUserHeartLine />,
        children: [
            {
                key: 'newVolunteer',
                label: 'New volunteer',
                icon: <AppstoreAddOutlined />,
                path: '/volunteer/new',
            },
            {
                key: 'volunteersCards',
                label: 'All registered volunteers',
                icon: <FaListUl />,
                path: '/volunteer/cards',
            },
            {
                key: 'volunteersList',
                label: 'Manage volunteers - for admins',
                icon: <TbLayoutCards />,
                path: '/volunteer/list',
                admins: 'true',
            },
        ],
    },
    {
        key: 'communities',
        label: 'Communities',
        icon: <TbBuildingCommunity />,
        children: [
            {
                key: 'newCommunity',
                label: 'New community',
                icon: <AppstoreAddOutlined />,
                path: '/community/new',
            },
            {
                key: 'communitiesCards',
                label: 'All registered communities',
                icon: <FaListUl />,
                path: '/community/cards',
            },
            {
                key: 'communitiesList',
                label: 'Manage communities - for admins',
                icon: <TbLayoutCards />,
                path: '/community/list',
                admins: 'true',
            },
        ],
    },
];

export default menuDataNew;