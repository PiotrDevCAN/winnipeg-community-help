import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for task 1', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Description for task 2', status: 'Completed' },
    { id: 3, title: 'Task 3', description: 'Description for task 3', status: 'Completed' },
    { id: 4, title: 'Task 4', description: 'Description for task 4', status: 'Completed' },
    { id: 5, title: 'Task 5', description: 'Description for task 5', status: 'Completed' }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: new Date().toISOString() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
