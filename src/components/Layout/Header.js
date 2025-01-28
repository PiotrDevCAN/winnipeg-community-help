import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Menu } from 'antd';
import { useRouteContext } from '@/context/RouteContext';
import { useAuthContext } from '@/context/auth/AuthContext';
import QuickActions from '@/components/QuickActions';
import UserActions from '@/components/UserActions';
import { filterMenuData } from '@/services/filterMenuData';
import { convertMenuDataToItems } from '@/services/convertMenuDataToItems';
import { getSelectedMenuItemKey } from '@/services/getSelectedMenuItemKey';

const findMenuItemByKey = (menuData, key) => {
    for (const item of menuData) {
        if (item.key === key) {
            return item;
        }

        if (item.children) {
            const childItem = findMenuItemByKey(item.children, key);
            if (childItem) {
                return childItem;
            }
        }
    }
    return null;
};

const handleMenuClick = (menuData, e, navigate) => {
    const clickedItem = findMenuItemByKey(menuData, e.key);
    if (clickedItem && clickedItem.disabled) {
        e.preventDefault();
        alert('You do not have permission to access this page.');
    } else if (clickedItem) {
        navigate(clickedItem.path);
    }
};

const Header = () => {

    const { menuNewItems } = useRouteContext();
    const { isAuthenticated, user, isAdmin } = useAuthContext();

    const navigate = useNavigate();
    const location = useLocation();

    const filteredMenuData = filterMenuData(menuNewItems, isAdmin);
    const filteredMenuItems = convertMenuDataToItems(filteredMenuData);
    const selectedKey = useMemo(() => getSelectedMenuItemKey(menuNewItems, location.pathname), [menuNewItems, location.pathname]);

    return (
        <Row gutter={16} align='middle'>
            <Col xs={8} sm={6} md={5} lg={4} xl={3}>
                <div className="demo-logo">
                    <a href='/'><img src="/icon2.png" alt="logo" /></a>
                </div>
            </Col>
            <Col xs={12} sm={12} md={11} lg={11} xl={14}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    selectedKeys={[selectedKey]}
                    items={filteredMenuItems}
                    onClick={(e) => handleMenuClick(menuNewItems, e, navigate)}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}>
                </Menu>
            </Col>
            <Col xs={0} sm={0} md={7} lg={8} xl={6}>
                <QuickActions />
            </Col>
            <Col xs={4} sm={1} md={1} lg={1} xl={1}>
                <UserActions />
            </Col>
        </Row>
    );
};

export default Header;