import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";

const AppointmentList = ({ appointmentList, setAppointmentList }) => {
  const handleDelete = (id) => {
    setAppointmentList(appointmentList.filter((item) => item.id !== id));
  };

  const handleDoubleClick = (id) => {
    setAppointmentList(
      appointmentList.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      <div className="d-flex flex-column align-items-center">
        {!appointmentList.length && (
          <img src="./Img/appointment.jpg" width="80%" alt="Kayıt Yok" />
        )}
        {appointmentList.map((list) => {
          const { id, patient, consulted, doctor, day } = list;
          return (
            <div
              key={list.id}
              className={consulted ? "appointments consulted" : "appointments"}
              onDoubleClick={() => handleDoubleClick(id)}
            >
              <Row className="justify-content-center align-items-center g-3 ">
                <Col xs={12} sm={12} md={6}>
                  <h4 className="text-danger">{patient} </h4>
                  <h5 className="">{doctor}</h5>
                </Col>
                <Col xs={10} sm={8} md={5}>
                  <h6>Date:{new Date(day).toLocaleDateString()}</h6>
                  <h6>Time:{new Date(day).toLocaleTimeString()}</h6>
                </Col>
                <Col xs={2} sm={4} md={1}>
                  <FaTimesCircle
                    className="text-danger fs-1"
                    type="button"
                    onClick={() => handleDelete(id)}
                  />
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default AppointmentList;
