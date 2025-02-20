import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import HeaderContent from "@/components/Layout/Header";
import PageHeader from "@/components/Layout/PageHeader";
import FooterContent from "@/components/Layout/Footer";
import ContextMenu from "@/components/Layout/ContextMenu";
import { getCurrentRoute } from "@/services//routeHelpers";
import { useAppMessageContext } from "@/context/auxiliary/AppMessageContext";
import { useAppNotificationContext } from "@/context/auxiliary/AppNotificationContext";
import { useAuthContext } from "@/context/auth/AuthContext";

import { filterMenuData } from "@/services/filterMenuData";
import { convertMenuDataToItems } from "@/services/convertMenuDataToItems";
import { getSelectedMenuItemKey } from "@/services/getSelectedMenuItemKey";
import useSiderMenu from "@/customHooks/useSiderMenu";
import useSuggestionModal from "@/customHooks/useSuggestionModal";
import useAppMenus from "@/customHooks/routes/useAppMenus";
import useAppRoutes from "@/customHooks/routes/useAppRoutes";

const { Header, Content, Footer, Sider } = Layout;

// Extracted styles for better organization
const styles = {
  // header: { height: '115px' },
  // content: { padding: '0 48px' },
  header: {
    height: "140px",
    // display: 'flex',
    // alignItems: 'center',
  },
  content: { padding: "8px" },
  footer: {
    background: "linear-gradient(to right, #1f2937, #3f3f46, #1f2937)",
    color: "#d1d5db",
    fontFamily: "sans-serif",
    letterSpacing: "0.05em",
    padding: "20px 40px",
  },
};

const findMenuItemByKey = (menuFooterData, key) => {
  for (const item of menuFooterData) {
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

const handleMenuClick = (menuFooterData, e, navigate) => {
  const clickedItem = findMenuItemByKey(menuFooterData, e.key);
  if (clickedItem && clickedItem.disabled) {
    e.preventDefault();
    alert("You do not have permission to access this page.");
  } else if (clickedItem) {
    navigate(clickedItem.path);
  }
};

const BaseLayout = ({ children }) => {
  const { menuHeaderData } = useAppMenus();
  const { isAuthenticated, user, isAdmin } = useAuthContext();
  const { contextHolder: suggestionHolder } = useSuggestionModal();

  const navigate = useNavigate();
  const location = useLocation();

  const filteredMenuFooterData = filterMenuData(menuHeaderData, isAdmin);
  const filteredMenuItems = convertMenuDataToItems(filteredMenuFooterData);
  const selectedKey = useMemo(
    () => getSelectedMenuItemKey(menuHeaderData, location.pathname),
    [menuHeaderData, location.pathname]
  );

  const { contextHolder: messageHolder } = useAppMessageContext();
  const { contextHolder: notificationHolder } = useAppNotificationContext();

  const { routesData: availableRoutes } = useAppRoutes();

  // Memoize current route for better performance
  const currentRoute = useMemo(
    () => getCurrentRoute(location, availableRoutes),
    [location, availableRoutes]
  );

  // Fallback values
  const pageName = currentRoute?.name || "Page Not Found";
  const section = currentRoute?.section || "Default";

  const { collapsed, toggleCollapsed } = useSiderMenu();

  return (
    <>
      <Layout>
        {messageHolder}
        {notificationHolder}

        {/* Header Section */}
        <Header style={styles.header}>
          <HeaderContent />
        </Header>
        <Layout>
          {/* Sider Section */}
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            width="250"
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["home"]}
              selectedKeys={[selectedKey]}
              defaultOpenKeys={[selectedKey]}
              items={filteredMenuItems}
              onClick={(e) => handleMenuClick(menuHeaderData, e, navigate)}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            ></Menu>
          </Sider>

          {/* Content Section */}
          <Content style={styles.content}>
            {/* <AppBreadcrumbHeader /> */}
            <PageHeader PageName={pageName} Section={section} />
            {children}
          </Content>
        </Layout>

        {/* Footer Section */}
        <Footer style={styles.footer}>
          <FooterContent />
        </Footer>

        {/* Context Menu within DonateProvider */}
        <ContextMenu />

        {/* Suggestion Form */}
        {suggestionHolder}
      </Layout>
    </>
  );
};

export default BaseLayout;
