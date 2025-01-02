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
        ],
    },
    {
        key: 'admins',
        label: 'Administration',
        icon: <TbBuildingCommunity />,
        admins: 'true',
        children: [
            {
                key: 'helpCategoriesList',
                label: 'Manage help categories',
                icon: <TbLayoutCards />,
                path: '/helpCategory/list',
                admins: 'true',
            },
            {
                key: 'helpTypesList',
                label: 'Manage help types',
                icon: <TbLayoutCards />,
                path: '/helpType/list',
                admins: 'true',
            },
            {
                key: 'helpRequestsList',
                label: 'Manage help requests',
                icon: <TbLayoutCards />,
                path: '/request/list',
                admins: 'true',
            },
            {
                key: 'helpOffersList',
                label: 'Manage help offers',
                icon: <TbLayoutCards />,
                path: '/offer/list',
                admins: 'true',
            },
            {
                key: 'volunteersList',
                label: 'Manage volunteers',
                icon: <TbLayoutCards />,
                path: '/volunteer/list',
                admins: 'true',
            },
            {
                key: 'communitiesList',
                label: 'Manage communities',
                icon: <TbLayoutCards />,
                path: '/community/list',
                admins: 'true',
            },
            {
                key: 'usersList',
                label: 'Manage users',
                icon: <TbLayoutCards />,
                path: '/user/list',
                admins: 'true',
            },
        ],
    }
];

export default menuDataNew;