import React from 'react';
import { Button, Dropdown, Tooltip } from 'antd';

import { UserAddOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { SiAircanada } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

import { useRouteContext } from '../context/RouteContext';
import { useAuthContext } from '../context/AuthContext';

const iconStyle = {
    margin: '0 8px',
    // color: '#fff',
    // backgroundColor: '#000',
};

const redIconStyle = {
    margin: '0 8px',
    color: 'red',
    // backgroundColor: '#000',
};

const UserActions = () => {

    const { signIn, remindPassword, signUp, myProfile, askForHelp, offerHelp, leave, myHelpRequests, myHelpOffers, myCommunity } = useRouteContext();
    const { isAuthenticated, user } = useAuthContext();

    const menuNotAuthContent = [
        {
            key: '1',
            label: 'Not authorized',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'Login',
            onClick: signIn,
            icon: <LuLogIn />,
        },
        {
            key: '3',
            label: 'Remind Password',
            onClick: remindPassword,
            icon: <MdOutlinePassword />,
        },
        {
            key: '4',
            label: 'Register',
            onClick: signUp,
            icon: <AppstoreAddOutlined />,
        },
    ];

    const menuAuthContent = [
        {
            key: '1',
            label: 'My Account',
            disabled: true,
        },
        {
            type: 'divider',
        },
        {
            key: '2',
            label: 'My Profile',
            onClick: myProfile,
            icon: <CgProfile />,
        },
        {
            type: 'divider',
        },
        {
            key: '3',
            label: 'Ask for help',
            onClick: askForHelp,
            icon: <AppstoreAddOutlined />,
        },
        {
            key: '4',
            label: 'Offer help',
            onClick: offerHelp,
            icon: <AppstoreAddOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '5',
            label: 'My Help Requests',
            onClick: myHelpRequests,
            icon: <AppstoreAddOutlined />,
        },
        {
            key: '6',
            label: 'My Help Offers',
            onClick: myHelpOffers,
            icon: <AppstoreAddOutlined />,
        },
        {
            key: '7',
            label: 'My Community',
            onClick: myCommunity,
            icon: <AppstoreAddOutlined />,
        },
        {
            type: 'divider',
        },
        {
            key: '5',
            label: 'Logout',
            onClick: leave,
            icon: <LuLogOut />,
        },
    ];

    const menuNotAuthProps = {
        items: menuNotAuthContent,
    };
    const menuAuthProps = {
        items: menuAuthContent,
    };

    return (
        <>
            {user ? (
                <Dropdown
                    menu={menuAuthProps}
                    trigger={['click']}
                >
                    <Tooltip title="Displays personalized options such as a dashboard, account settings, notifications, and a logout button, enabling users to manage their profiles and access exclusive features." >
                        <Button type="default" shape="circle" icon={<SiAircanada />} style={redIconStyle} />
                    </Tooltip>
                </Dropdown>

            ) : (

                <Dropdown
                    menu={menuNotAuthProps}
                    trigger={['click']}
                >
                    <Tooltip title="Offers basic navigation options like home, about, contact, and a login/signup button, inviting users to explore the platform and register for more features.">
                        <Button type="default" shape="circle" icon={<UserAddOutlined />} style={iconStyle} />
                    </Tooltip>
                </Dropdown>
            )};
        </>
    );
};

export default UserActions;
