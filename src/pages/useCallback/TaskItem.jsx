/* eslint-disable react/prop-types */

const TaskItem = ({ task, onRemove }) => {
  const handleRemove = () => {
    onRemove(task.id);
  };

  return (
    <li>
      {task.text}
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
