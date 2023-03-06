import React from 'react';
import './App.scss';
import Landing from './components/Landing';
import Signup from './components/Signup';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Landing navigate={navigate} />} />
      <Route path="/signup" element={<Signup navigate={navigate} />} />
    </Routes>
  );
}

export default App;
