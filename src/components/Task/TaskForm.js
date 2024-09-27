import React, { useState, useContext } from 'react';
import TaskContext from '../../context/TaskContext';

const TaskForm = ({ taskId, task }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit({ title, description, status });
    addTask({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('');
  };

  console.log(taskId);
  console.log(task);

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
        ></textarea>

        <label htmlFor="status">Status</label>
        <input
          type="text"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
