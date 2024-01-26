import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalCitas = ({
  show,
  onHide,
  onSave,
  selectedDate,
  selectedHour,
  setSelectedHour,
}) => {
  const [title] = useState("Cita Médica");
  const [start, setStart] = useState(
    selectedDate ? selectedDate.toISOString().slice(0, 10) : ""
  );
  const [hour, setHour] = useState(
    selectedHour !== "" ? selectedHour.toString().padStart(2, "0") + ":00" : ""
  );
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setStart(selectedDate ? selectedDate.toISOString().slice(0, 10) : "");
    setHour(selectedHour !== "" ? selectedHour.toString().padStart(2, "0") + ":00" : "");
  }, [selectedDate, selectedHour]);

  const handleSave = () => {
    const fullStartDate = `${start}T${hour}`;
    onSave(title, description, new Date(fullStartDate), null, patient, doctor); // Convertir a objeto Date
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label>Fecha</label>
          <input
            type="date"
            className="form-control"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Hora</label>
          <input
            type="time"
            className="form-control"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Paciente</label>
          <input
            type="text"
            className="form-control"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Doctor</label>
          <input
            type="text"
            className="form-control"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción (Opcional)</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCitas;
