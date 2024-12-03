import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
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
    height: '115px',
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

    // Get the current page name and section
    const pageName = currentRoute?.name || 'Page Not Found';
    const section = currentRoute?.section || 'Default';

    return (
        <Layout>
            <Header style={headerStyle}>
                <HeaderContent />
            </Header>

            <Content style={contentStyle}>
                <AppBreadcrumbHeader />
                <PageHeader PageName={pageName} Section={section} />
                {children}
            </Content>

            <Footer style={footerStyle}>
                <FooterContent />
            </Footer>

            <DonateProvider>
                <ContextMenu />
            </DonateProvider>
        </Layout>
    );
};

export default BaseLayout;
