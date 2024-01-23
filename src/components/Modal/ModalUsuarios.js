// ModalUsuarios.js
import React, { useState } from 'react';
import './Modal.css';
import { FormControl } from 'react-bootstrap';


const ModalUsuarios = ({ onClose, isOpen }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    cedula: '',
    correo: '',
    telefono: '',
    fechaNacimiento: '', 
    rol: '',
    direccion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-inner">
          <h3>Agregar Usuario</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" className="form-control" value={formData.nombre} onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido:</label>
                  <input type="text" id="apellido" name="apellido" className="form-control" value={formData.apellido} onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                <label htmlFor="rol" className="form-label">Rol:</label>
                <FormControl as="select" id="rol" name="rol" value={formData.rol} onChange={handleInputChange}>
                  <option value="administrador">Administrador</option>
                  <option value="doctor">Doctor</option>
                </FormControl>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="cedula" className="form-label">Cédula:</label>
                  <input type="text" id="cedula" name="cedula" className="form-control" value={formData.cedula} onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">Correo:</label>
                  <input type="email" id="correo" name="correo" className="form-control" value={formData.correo} onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono:</label>
                  <input type="tel" id="telefono" name="telefono" className="form-control" value={formData.telefono} onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento:</label>
                  <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="form-control" value={formData.fechaNacimiento} onChange={handleInputChange} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">Pass:</label>
                  <input type="text" id="direccion" name="direccion" className="form-control" value={formData.direccion} onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-success">Agregar Usuario</button>
              <button type="button" onClick={onClose} className="btn btn-secondary">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUsuarios;
