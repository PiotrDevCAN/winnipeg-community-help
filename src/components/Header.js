import React, { useState } from 'react';
import { Layout, Image, Row, Col, Menu } from 'antd';
import menuDataNew from '../data/menuDataNew';

import { UserAddOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';

import { useNavigate } from 'react-router-dom';

const style = {
    // background: '#0092ff',
    // padding: '8px 0',
    margin: '0 8px',
};

const Header = () => {

    const { Header } = Layout;

    const navigate = useNavigate();

    const askForHelp = () => {
        navigate('/request/new');
    };
    const offerHelp = () => {
        navigate('/offer/new');
    };

    const signIn = () => {
        navigate('/login');
    };
    const signUp = () => {
        navigate('/register');
    };
    const viewProfile = () => {
        navigate('/profile');
    };
    const remindPassword = () => {
        navigate('/remind');
    };

    return (
        <Header>
            <Row gutter={16}>
                <Col span={2}>
                    <Image
                        src="/Winnipeg_Cares_Logo_60x30.png"
                        width={120}
                        preview={false}
                        alt="logo"
                    />
                </Col>
                <Col span={15}>
                    <Menu theme="dark" mode="horizontal" items={menuDataNew} />
                </Col>
                <Col span={7}>
                    <Tooltip title="Rise new request for help">
                        <Button onClick={askForHelp} type="primary" icon={<AppstoreAddOutlined />} style={style}>
                            Ask for help
                        </Button>
                    </Tooltip>
                    <Tooltip title="Tell community you are open to help">
                        <Button onClick={offerHelp} type="primary" icon={<AppstoreAddOutlined />} style={style}>
                            Offer help
                        </Button>
                    </Tooltip>

                    <Tooltip title="Sign In">
                        <Button onClick={signIn} type="default" shape="circle" icon={<UserAddOutlined />} style={style} />
                    </Tooltip>
                    <Tooltip title="Sign Up">
                        <Button onClick={signUp} type="default" shape="circle" icon={<UserAddOutlined />} style={style} />
                    </Tooltip>
                    <Tooltip title="View Profil">
                        <Button onClick={viewProfile} type="default" shape="circle" icon={<UserAddOutlined />} style={style} />
                    </Tooltip>
                    <Tooltip title="Password Remind">
                        <Button onClick={remindPassword} type="default" shape="circle" icon={<UserAddOutlined />} style={style} />
                    </Tooltip>

                </Col>
            </Row>
        </Header>
    );
};

export default Header;