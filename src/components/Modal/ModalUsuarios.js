import React, { useState } from "react";
import "./Modal.css";
import { Typeahead } from "react-bootstrap-typeahead";

const options = [
  { value: "administrador", label: "Administrador" },
  { value: "doctor", label: "Doctor" },
];

const ModalUsuarios = ({ onClose, isOpen }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
    rol: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (selected) => {
    if (selected[0]) {
      setFormData((prevData) => ({ ...prevData, rol: selected[0].value }));
    }
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
      rol: "",
      password: "",
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
      rol: "",
      password: "",
    });
  
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-inner">
          <h3>Agregar Usuario</h3>
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
                  <label htmlFor="rol" className="form-label">
                    Rol:
                  </label>
                  <Typeahead
                    id="rol"
                    name="rol"
                    options={options}
                    onChange={handleSelectChange}
                    allowNew={false}
                    placeholder="Seleccione un rol..."
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
                  <label htmlFor="password" className="form-label">
                  Contraseña:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-success">
                Agregar Usuario
              </button>
              <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Cancelar
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalUsuarios;
