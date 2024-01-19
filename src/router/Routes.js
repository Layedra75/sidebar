// Routes
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
