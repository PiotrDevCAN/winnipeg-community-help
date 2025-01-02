import React, { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderContent from '@/components/Layout/Header';
import PageHeader from '@/components/Layout/PageHeader';
import FooterContent from '@/components/Layout/Footer';
import ContextMenu from '@/components/Layout/ContextMenu';
import AppBreadcrumbHeader from '@/components/Layout/AppBreadcrumbHeader';
import { useRouteContext } from '@/context/RouteContext';
import { DonateProvider } from '@/context/DonateContext';
import { getCurrentRoute } from '@/services//routeHelpers';

const { Header, Content, Footer } = Layout;

// Extracted styles for better organization
const styles = {
    header: { height: '115px' },
    content: { padding: '0 48px' },
    footer: {
        background: 'linear-gradient(to right, #1f2937, #3f3f46, #1f2937)',
        color: '#d1d5db',
        fontFamily: 'sans-serif',
        letterSpacing: '0.05em',
        padding: '20px 40px',
    },
};

const BaseLayout = ({ children }) => {
    const location = useLocation();
    const { routes: availableRoutes } = useRouteContext();

    // Memoize current route for better performance
    const currentRoute = useMemo(() => getCurrentRoute(location, availableRoutes), [location, availableRoutes]);

    // Fallback values
    const pageName = currentRoute?.name || 'Page Not Found';
    const section = currentRoute?.section || 'Default';

    return (
        <Layout>
            {/* Header Section */}
            <Header style={styles.header}>
                <HeaderContent />
            </Header>

            {/* Content Section */}
            <Content style={styles.content}>
                <AppBreadcrumbHeader />
                <PageHeader PageName={pageName} Section={section} />
                {children}
            </Content>

            {/* Footer Section */}
            <Footer style={styles.footer}>
                <FooterContent />
            </Footer>

            {/* Context Menu within DonateProvider */}
            <DonateProvider>
                <ContextMenu />
            </DonateProvider>
        </Layout>
    );
};

export default BaseLayout;
