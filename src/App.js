// App
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './router/Routes';


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar */}
        <Sidebar style={{ height: '100%' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Navbar */}
          <Navbar style={{ height: '50px' }} />
          {/* Main Content */}
          <div style={{ flex: 1, padding: '20px' }}>
            {/* Manejo de las rutas */}
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
