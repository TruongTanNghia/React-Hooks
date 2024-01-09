import { useReducer, useState } from 'react';
import todoReducer, { initState } from '../stores/todoLists/reducer';
import { addTodoAction, deleteTodoAction } from '../stores/todoLists/action';

const LearnUseReducer = () => {
  const [form, setForm] = useState({
    todo: '',
  });

  const [state, dispatch] = useReducer(todoReducer, initState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(form));
    return handleClear();
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const handleClear = () => {
    setForm({
      todo: '',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form style={{ background: 'none', marginBottom: '20px', textAlign: 'center' }} onSubmit={handleAddTodo}>
        <h1 style={{ fontSize: '15px', marginBottom: '10px' }} htmlFor="focus">
          Please enter value input
        </h1>
        <input
          id="focus"
          type="text"
          name="todo"
          onChange={handleChange}
          value={form.todo}
          placeholder="Please enter value input"
          style={{width: '300px', height: '30px', marginBottom: '10px'}}
        />
        <button style={{ marginTop: '10px' }} onClick={handleAddTodo}>
          Add
        </button>
      </form>

      {state?.todos.map((item) => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <span style={{ marginRight: '10px',fontSize: '25px' }}>{item.text}</span>
          <button  onClick={() => handleDelete(item.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default LearnUseReducer;
