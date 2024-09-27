import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const breadcrumbStyle = {
    margin: '16px 0',
}

const AppBreadcrumb = ({ ...props }) => {

    // Get the current location
    const location = useLocation();
    // Split path into parts
    const pathnames = location.pathname.split('/').filter((x) => x);

    const breadItems = pathnames.map((value, index) => {
        // Build path for each breadcrumb
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const item = {
            title: decodeURIComponent(value),
            href: to,
        };
        return (
            item
        );
    });

    const items = [
        {
            title: 'Home',
            href: '/home',
        },
        ...breadItems
    ];

    return (
        <Breadcrumb
            style={breadcrumbStyle}
            separator=">"
            items={items}
        />
    );
};

export default AppBreadcrumb;
