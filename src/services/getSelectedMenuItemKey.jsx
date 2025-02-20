export const getSelectedMenuItemKey = (menuData, path) => {
    for (const item of menuData) {
        if (item.path === path) return item.key;

        if (item.children) {
            const childKey = getSelectedMenuItemKey(item.children, path);
            if (childKey) return childKey;
        }
    }
    return null;
};