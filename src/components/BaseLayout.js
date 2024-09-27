import React from 'react';
import { useLocation } from 'react-router-dom';

import { Layout, FloatButton } from 'antd';

import Header from './Header';
import PageHeader from './PageHeader';
import FooterContent from './Footer';

import { QuestionCircleOutlined } from '@ant-design/icons';
import AppBreadcrumb from './AppBreadcrumb';

import routes from '../data/routesData';

// const { Footer, Sider, Content } = Layout;
const { Footer, Content } = Layout;

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
}

const contentStyle = {
    padding: '0 48px',
}

// const BaseLayout = ({children, pageName}) => {
const BaseLayout = ({ ...props }) => {

    const { children } = props;

    // Get the current location
    const location = useLocation();

    // Get the current route
    const currentRoute = routes.find(route => route.path === location.pathname);

    // Get the current page name
    const pageName = currentRoute?.name || 'Page Not Found';

    return (
        <>
            {/* <Flex gap="middle" wrap> */}
            <Layout>
                {/* <HeaderContent /> */}
                <Header style={headerStyle} />
                {/* <Sider>left sidebar</Sider> */}

                <Content style={contentStyle}>
                    <AppBreadcrumb />
                    <PageHeader PageName={pageName} />
                    {children}
                </Content>

                <Footer>
                    <FooterContent />
                </Footer>
            </Layout>
            {/* </Flex> */}

            <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
            <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }} />

        </>
    );
};

export default BaseLayout;
