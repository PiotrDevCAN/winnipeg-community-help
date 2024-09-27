import React, { useContext } from 'react';
import TaskContext from '../../context/TaskContext'; // Assuming you are using a context to manage tasks
import TaskCard from '../../components/Task/TaskCard'; // Reuse TaskCard component

const TaskListPage = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="task-list-page p-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Current Tasks</h1>

      {/* Check if there are tasks to display */}
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      ) : (
        <p className="text-gray-700">No tasks available. Start by adding some tasks!</p>
      )}
    </div>
  );
};

export default TaskListPage;
