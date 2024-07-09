import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Employee';
import ManagerPage from './Manager';

function App() {
  return (
    <Router>
      <Routes>
        {/* DO NOT REMOVE HOMEPAGE -Employee- PLEASE IF YOU DO IT WILL BREAK!! */}
        <Route path="/" element={<HomePage />} />
        <Route path="/manager" element={<ManagerPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
