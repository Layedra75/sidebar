// Routes
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../views/Dashboard/Dashboard';
import Pacientes from '../views/Pacientes/Pacientes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pacientes" element={<Pacientes />} />
    </Routes>
  );
};

export default AppRoutes;
