import { HomeOutlined, AppstoreOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { ContactsOutlined } from '@mui/icons-material';

const menuDataNew = [
    {
        label: (
            <a href="/home" rel="noopener noreferrer">
                Home
            </a>
        ),
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: 'Need help',
        key: 'help',
        icon: <MailOutlined />,
        children: [
            {
                label: (
                    <a href="/request/new" rel="noopener noreferrer">
                        New help request
                    </a>
                ),
                key: 'newHelpRequest',
            },
            {
                label: (
                    <a href="/request/list" rel="noopener noreferrer">
                        All help requests
                    </a>
                ),
                key: 'helpRequest',
            },
        ],
    },
    {
        label: 'Offer help',
        key: 'offer',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: (
                    <a href="/offer/new" rel="noopener noreferrer">
                        New help offer
                    </a>
                ),
                key: 'newHelpOffer',
            },
            {
                label: (
                    <a href="/offer/list" rel="noopener noreferrer">
                        All help offers
                    </a>
                ),
                key: 'helpOffer',
            },
        ],
    },
    {
        label: 'Communities',
        key: 'community',
        icon: <UserOutlined />,
        children: [
            {
                label: (
                    <a href="/community/new" rel="noopener noreferrer">
                        New community
                    </a>
                ),
                key: 'newCommunity',
            },
            {
                label: (
                    <a href="/community/list" rel="noopener noreferrer">
                        All registered communities
                    </a>
                ),
                key: 'communities',
            },
        ],
    },
    {
        label: 'Volunteers',
        key: 'volunteer',
        icon: <UserOutlined />,
        children: [
            {
                label: (
                    <a href="/volunteer/new" rel="noopener noreferrer">
                        New volunteer
                    </a>
                ),
                key: 'newVolunteer',
            },
            {
                label: (
                    <a href="/volunteer/list" rel="noopener noreferrer">
                        All registered volunteers
                    </a>
                ),
                key: 'volunteers',
            },
        ],
    },
    {
        label: (
            <a href="/contact" rel="noopener noreferrer">
                Contact Us
            </a>
        ),
        key: 'contactUs',
        icon: <AppstoreOutlined />,
    },
    {
        label: (
            <a href="/about" rel="noopener noreferrer">
                About Us
            </a>
        ),
        key: 'aboutUs',
        icon: <ContactsOutlined />,
    },
];

export default menuDataNew;