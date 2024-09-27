import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import TaskForm from '../components/Task/TaskForm';

const TaskDetailPage = () => {
  const { taskId } = useParams();
  const { tasks } = useContext(TaskContext);
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    const task = [{
      id: 1000,
      title: '',
      description: '',
      status: ''
    }];
    alert('empty task');
    // return <div>({ taskId } { task.id }) Task not found</div>;
  } else {
    alert('task set');
  }

  return (
    <div>
      <h1>Task Details Page</h1>
      <TaskForm taskId={task.id} task={task} />
    </div>
  );
};

export default TaskDetailPage;
