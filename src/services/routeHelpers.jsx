export const getCurrentRoute = (location, routes) => {
    try {
        const pathName = location.pathname;
        const replacements = {
            ":itemId": "\\d+",
            ":catId": "\\d+",
            ":typeId": "\\d+",
            ":communityId": "\\d+",
            ":categoryId": "\\d+",
            ":volunteerId": "\\d+",
            ":needyId": "\\d+",
            ":userId": "\\d+",
        };
        const keysPattern = Object.keys(replacements).join('|');
        const regex = new RegExp(keysPattern, 'g');
        for (const route of routes) {
            const regexPath = route.path.replace(regex, match => replacements[match]);
            const regexPattern = new RegExp(`^${regexPath}$`);
            if (regexPattern.test(pathName)) return route;
        }
    } catch (error) {
        console.error("Error while determining the current route:", error.message);
    }
    return null;
};