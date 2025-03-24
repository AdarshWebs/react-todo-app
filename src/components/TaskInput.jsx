// src/components/TaskInput.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todoSlice';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      priority,
    };
    dispatch(addTask(newTask));
    setTaskText('');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
      />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
