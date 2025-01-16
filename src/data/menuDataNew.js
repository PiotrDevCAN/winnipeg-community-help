import { AppstoreAddOutlined } from '@ant-design/icons';
import { ContactsOutlined } from '@mui/icons-material';
import { MdOutlineVolunteerActivism, MdVolunteerActivism, MdOutlineContactSupport, MdOutlinePolicy, MdPolicy } from "react-icons/md";
import { TbBuildingCommunity, TbLayoutCards, TbUserHeart, TbUser } from "react-icons/tb";
import { FaHome, FaListUl, FaDonate, FaHandsHelping } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";

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
        key: 'help',
        label: 'Your help',
        icon: <FaHandsHelping />,
        children: [
            {
                key: 'helpRequest',
                label: 'Help request',
                type: 'group',
                children: [
                    {
                        key: 'newHelpRequest',
                        label: 'Ask for help',
                        icon: <MdOutlineVolunteerActivism />,
                        path: '/request/new',
                    },
                    {
                        key: 'helpRequestsCards',
                        label: 'All help requests',
                        icon: <FaListUl />,
                        path: '/request/cards',
                    },
                ]
            },
            {
                key: 'helpOffer',
                label: 'Help offer',
                type: 'group',
                children: [
                    {
                        key: 'newHelpOffer',
                        label: 'Offer your help',
                        icon: <MdVolunteerActivism />,
                        path: '/offer/new',
                    },
                    {
                        key: 'helpOffersCards',
                        label: 'All help offers',
                        icon: <FaListUl />,
                        path: '/offer/cards',
                    },
                ]
            },
        ]
    },
    {
        key: 'society',
        label: 'Winnipeggers',
        icon: <FaPeopleGroup />,
        children: [
            {
                key: 'volunteers',
                label: 'Volunteers',
                type: 'group',
                children: [
                    {
                        key: 'newVolunteer',
                        label: 'New volunteer',
                        icon: <RiUserHeartLine />,
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
                key: 'needy',
                label: 'People in need',
                type: 'group',
                children: [
                    {
                        key: 'newNeedy',
                        label: 'New person in need',
                        icon: <TbUserHeart />,
                        path: '/needy/new',
                    },
                    {
                        key: 'needyCards',
                        label: 'All registered people in need',
                        icon: <FaListUl />,
                        path: '/needy/cards',
                    },
                ],
            },
            {
                key: 'users',
                label: 'Users',
                type: 'group',
                children: [
                    {
                        key: 'newUser',
                        label: 'New user',
                        icon: <TbUser />,
                        path: '/user/new',
                    },
                    {
                        key: 'usersCards',
                        label: 'All registered users',
                        icon: <FaListUl />,
                        path: '/user/cards',
                    },
                ],
            },
        ]
    },
    {
        key: 'communities',
        label: 'Communities',
        icon: <TbBuildingCommunity />,
        children: [
            {
                key: 'newCommunity',
                label: 'New community',
                icon: <TbBuildingCommunity />,
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
        icon: <AppstoreAddOutlined />,
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