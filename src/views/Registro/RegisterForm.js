import React, { useState, useEffect } from 'react';
import RegisterService from '../services/RegisterService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Swal.fire({
        title: 'Ya estás logueado',
        text: 'No puedes acceder a la página de registro mientras estés logueado.',
        icon: 'info',
        confirmButtonText: 'Ir al Dashboard',
      }).then(() => {
        navigate('/dashboard');
      });
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const message = await RegisterService.register(username, password);
      console.log(message);

      Swal.fire({
        title: 'Usuario creado con éxito',
        icon: 'success',
        confirmButtonText: 'Ir al Login',
      }).then(() => {
        navigate('/login');
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
                  alt="Imagen de registro"
                  className="img-fluid"
                  style={{ maxWidth: '150px', borderRadius: '0' }}
                />
              </div>
              <h2 className="card-title text-center">Register</h2>
              {error && <p className="text-danger text-center">{error}</p>}
              <form onSubmit={handleRegister}>
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
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    navigate('/login');
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;