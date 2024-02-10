import React from 'react';
import ReactDOM from 'react-dom';
import Userlist from './components/Userlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserDetailsPage from './components/UserDetailsPage';
import { createRoot } from 'react-dom/client';

import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<div><Userlist /></div>} />
        <Route path="/user/:userId" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

export default App;
