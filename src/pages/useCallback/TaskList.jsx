import React from 'react';
import { dummyTasks } from '../../dummy/Data';
import TaskItem from './TaskItem';

const LearnUseCallback =  () => {
  const [tasks, setTasks] = React.useState(dummyTasks);

  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onRemove={removeTask} />
        ))}
      </ul>
    </div>
  );
}

export default LearnUseCallback;
