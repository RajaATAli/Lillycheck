import React, { useState } from 'react';
import TaskRow from './TaskRow';  // Import the TaskRow component

const TaskTable = () => {
  // Sample tasks data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      memberName: 'Alice Mayer',
      description: 'Call Sam For Payments',
      priority: 'High',
      avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp'
    },
    // Add more tasks here
  ]);

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to mark a task as complete
  const markTaskComplete = (id) => {
    console.log("Task", id, "completed");  // Implement completion logic here
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Team Member</th>
          <th>Task</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onMarkComplete={() => markTaskComplete(task.id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;