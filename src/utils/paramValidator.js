export const validateIdParam = (param) => {
    const parsed = parseInt(param, 10);
    return !isNaN(parsed) && parsed > 0;  // Returns true if it's a valid positive integer
};