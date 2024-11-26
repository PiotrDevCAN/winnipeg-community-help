import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const breadcrumbStyle = {
    margin: '8px 0',
}

const buildBreadItems = (location) => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadItems = pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const item = {
            title: decodeURIComponent(value),
            href: to,
        };
        return (
            item
        );
    });
    return breadItems;
}

const AppBreadcrumb = () => {
    const location = useLocation();
    const breadItems = buildBreadItems(location);
    const items = [
        {
            title: 'Home',
            href: '/',
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
