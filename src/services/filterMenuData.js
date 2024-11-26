export const filterMenuData = (menuData, isAdmin) => {
  return menuData.map(item => {
    const isAdminItem = item.admins === 'true';

    if (!isAdmin && isAdminItem) {
      return { ...item, disabled: true, children: null };
    }

    const filteredItems = item.children
      ? filterMenuData(item.children, isAdmin)
      : null;

    return {
      ...item,
      disabled: isAdminItem && !isAdmin,
      children: filteredItems,
    };
  });
};
