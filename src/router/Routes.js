// Routes
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../views/Dashboard/Dashboard';
import Pacientes from '../views/Pacientes/Pacientes';
import Usuarios from '../views/Usuarios/Usuarios';
import HistorialClinico from '../views/Historias/HistorialClinico'
import Citas from '../views/Citas/Citas';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pacientes" element={<Pacientes />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/historias" element={<HistorialClinico />} />
      <Route path="/citas" element={<Citas />} />
    </Routes>
  );
};

export default AppRoutes;
