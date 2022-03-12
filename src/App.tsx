import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './features/dashboard/Dashboard';
import { UserView } from './components/UserView/UserView';
import { LandingPage } from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/:uuid" element={<UserView />} />
      </Routes>
    </div>
  );
}

export default App;
