import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalList = ({
  show,
  drname,
  onHide,
  appointmentList,
  setAppointmentList,
}) => {
  const [date, setDate] = useState("");
  const [patientName, setPatientName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointmentList([
      ...appointmentList,
      {
        id: appointmentList + 1,
        patient: patientName,
        day: date,
        consulted: false,
        doctor: drname,
      },
    ]);
    onHide();
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setPatientName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="text-center p-1">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={onHide}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalList;
