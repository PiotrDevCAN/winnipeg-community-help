// src/services/dateHelpers.js
export const formatDate = (date, options = {}) => {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, { ...defaultOptions, ...options });
};

export const getTimeDifference = (startDate, endDate = new Date()) => {
    const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};

export const isPastDate = (date) => {
    return new Date(date) < new Date();
};
