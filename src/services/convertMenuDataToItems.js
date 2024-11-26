export const convertMenuDataToItems = (menuData) => {
    return menuData.map(item => {
        if (!item.disabled) {
            const menuItem = {
                key: item.key,
                label: item.label,
                icon: item.icon,
                children: item.children,
                path: item.path,
                disabled: item.disabled,
            };

            if (item.children && item.children.length > 0) {
                menuItem.children = convertMenuDataToItems(item.children);
            }

            return menuItem;
        }
        return null;
    });
};