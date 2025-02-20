// src/services/taskHelpers.js
let tasks = [];

export const addTask = (task) => {
    tasks.push(task);
};

export const getTasks = () => {
    return tasks;
};

export const removeTask = (taskId) => {
    tasks = tasks.filter(task => task.id !== taskId);
};

export const updateTask = (taskId, updatedTask) => {
    tasks = tasks.map(task => (task.id === taskId ? { ...task, ...updatedTask } : task));
};
