import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
import Swal from 'sweetalert2';
import logo from '../assets/logo.png';

const LoginForm = ({ onLogin, setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Swal.fire({
        title: '¡Ya estás logueado!',
        icon: 'info',
        confirmButtonText: 'Ir al Dashboard',
      }).then(() => {
        navigate('/dashboard');
      });
    }

    // Agregar el listener para el evento 'storage'
    const handleStorageChange = (event) => {
      if (event.key === 'token' && !event.newValue) {
        // Se eliminó el token en otra pestaña
        Swal.fire({
          title: '¡Sesión cerrada en otra pestaña!',
          icon: 'warning',
          confirmButtonText: 'Ir al Login',
        }).then(() => {
          navigate('/login');
        });
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      // Limpiar el listener al desmontar el componente
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await LoginService.login(username, password);
      setToken(token);
      onLogin(token);

      Swal.fire({
        title: '¡Login exitoso!',
        icon: 'success',
        confirmButtonText: 'Ir al Dashboard',
      }).then(() => {
        navigate('/dashboard');
      });
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-center mb-4">
                <img
                  src={logo}
                  alt="Imagen de inicio de sesión"
                  className="img-fluid"
                  style={{ maxWidth: '150px', borderRadius: '0' }}
                />
              </div>
              <h2 className="card-title text-center">Login</h2>
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div className="mt-3">
                <Link to="/register" className="btn btn-secondary">
                  Crear cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;