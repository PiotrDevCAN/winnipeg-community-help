import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Flex, Layout, Space } from 'antd';
import HeaderContent from './Header';
import PageHeader from './PageHeader';
import FooterContent from './Footer';
import ContextMenu from './ContextMenu';
import { useRouteContext } from '../../context/RouteContext';
import { usePageHeaderContext } from '../../context/PageHeaderContext';
import { DonateProvider } from '../../context/DonateContext';
import AppBreadcrumbHeader from './AppBreadcrumbHeader';

const { Header, Content, Footer } = Layout;

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '115px',
    width: '100%',
    // position: 'sticky',
    // top: 0,
    // zIndex: 1,
}

const contentStyle = {
    padding: '0 48px',
}

const footerStyle = {
    background: "linear-gradient(to right, #1f2937, #3f3f46, #1f2937)",
    color: "#d1d5db",
    fontFamily: "sans-serif",
    letterSpacing: "0.05em",
    padding: "20px 40px",
}

const getCurrentRoute = (location, routes) => {
    let currentRoute = null;
    routes.forEach((value, index) => {
        try {
            const replacements = {
                ":itemId": "\\d+",
                ":catId": "\\d+",
                ":typeId": "\\d+",
            };
            const regexPath = value.path.replace(/:itemId|:catId|:typeId/g, (match) => replacements[match]);
            const regexPattern = new RegExp('^' + regexPath + '$');

            if (regexPattern.test(location.pathname)) {
                currentRoute = value;
            } else {
                // return <div>Invalid Route!</div>;
            }
        } catch (error) {
            // console.error("Invalid regular expression:", error.message);
        }
    });
    return currentRoute;
}

const BaseLayout = ({ ...props }) => {

    const { children } = props;
    const location = useLocation();
    const { routes } = useRouteContext();

    // Get the current route
    let currentRoute = getCurrentRoute(location, routes);

    // Get the current page name
    const pageName = currentRoute?.name || 'Page Not Found';

    const [isParentReady, setIsParentReady] = useState(false);

    useEffect(() => {
        setIsParentReady(true); // Set state after parent logic completes
    }, []);

    const { setComponent1, setComponent2, setComponent3 } = usePageHeaderContext();
    useEffect(() => {
        // Reset context value to null whenever the location changes
        setComponent1(null);
    }, [location, setComponent1]);

    useEffect(() => {
        // Reset context value to null whenever the location changes
        setComponent2(null);
    }, [location, setComponent2]);

    useEffect(() => {
        // Reset context value to null whenever the location changes
        setComponent3(null);
    }, [location, setComponent3]);

    return isParentReady ? (
        <Layout>
            <Header style={headerStyle}>
                <HeaderContent />
            </Header>

            <Content style={contentStyle}>

                <AppBreadcrumbHeader />

                <PageHeader PageName={pageName} />

                {children}
            </Content>

            <Footer style={footerStyle}>
                <FooterContent />
            </Footer>

            <DonateProvider>
                <ContextMenu />
            </DonateProvider>
        </Layout>
    ) : null;
};

export default BaseLayout;
