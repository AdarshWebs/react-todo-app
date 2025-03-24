// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import WeatherInfo from '../components/WeatherInfo';

function Home() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container">
      <header>
        <h1> React To-Do App</h1>
      </header>

      <TaskInput />
      <TaskList />
      <WeatherInfo />
    </div>
  );
}

export default Home;
