// Modal.js
import React, { useState } from "react";
import "./Modal.css";
import { FormControl } from "react-bootstrap";

const ModalPacientes = ({ onClose, isOpen }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
    genero: "",
    direccion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    setFormData({
      nombre: "",
      apellido: "",
      cedula: "",
      correo: "",
      telefono: "",
      fechaNacimiento: "",
      genero: "",
      direccion: "",
    });
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      nombre: "",
      apellido: "",
      cedula: "",
      correo: "",
      telefono: "",
      fechaNacimiento: "",
      genero: "",
      direccion: "",
    });
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-inner">
          <h3>Agregar Paciente</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-control"
                    value={formData.nombre}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="apellido" className="form-label">
                    Apellido:
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    className="form-control"
                    value={formData.apellido}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="cedula" className="form-label">
                    Cédula:
                  </label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    className="form-control"
                    value={formData.cedula}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo:
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    className="form-control"
                    value={formData.correo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="form-control"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">
                    Fecha de Nacimiento:
                  </label>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    className="form-control"
                    value={formData.fechaNacimiento}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="genero" className="form-label">
                    Genero:
                  </label>
                  <FormControl
                    as="select"
                    id="genero"
                    name="genero"
                    value={formData.genero}
                    onChange={handleInputChange}
                  >
                    <option value="administrador">Masculino</option>
                    <option value="doctor">Femenino</option>
                    <option value="doctor">Otro</option>
                  </FormControl>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">
                    Dirección:
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    className="form-control"
                    value={formData.direccion}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-success">
                Agregar Paciente
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPacientes;
