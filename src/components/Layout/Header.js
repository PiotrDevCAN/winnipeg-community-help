import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { useRouteContext } from '../../context/RouteContext';
import { useAuthContext } from '../../context/AuthContext';
import QuickActions from '../QuickActions';
import UserActions from '../UserActions';
import { filterMenuData } from '../../services/filterMenuData';
import { convertMenuDataToItems } from '../../services/convertMenuDataToItems';
import { getSelectedMenuItemKey } from '../../services/getSelectedMenuItemKey';

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
        <>
            <div className="demo-logo">
                <a href='/'><img src="/icon2.png" alt="logo" /></a>
            </div>
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
            <QuickActions />
            <UserActions />
        </>
    );
};

export default Header;