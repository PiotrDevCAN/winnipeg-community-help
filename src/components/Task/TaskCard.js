import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const TaskCard = ({ task }) => {
  const { deleteTask, updateTask } = useContext(TaskContext);

  const navigate = useNavigate();

  const handleEdit = (id) => {

    // const updatedTask = { ...task, title: task.title + ' (Edited)' }; // Example edit
    // updateTask(updatedTask);

    navigate('/task', { taskId: id } );

  };

  return (
    <div className="task-card p-4 border rounded shadow-sm mb-4">
      <h2 className="text-lg font-semibold">{task.title}</h2>
      <p>{task.description}</p>
      <div className="status">{task.status}</div>
      <button onClick={() => handleEdit(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskCard;
