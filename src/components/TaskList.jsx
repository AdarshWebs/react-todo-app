// src/components/TaskList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/todoSlice';

function TaskList() {
  const tasks = useSelector(state => state.todos.tasks);
  const dispatch = useDispatch();

  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet. Add one above!</p>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <div>
              <strong>{task.text}</strong> (<em>{task.priority}</em>)
            </div>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
