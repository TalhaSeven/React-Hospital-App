import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModalList from "../Components/ModalList.jsx";

const DoctorList = ({ doctors, appointmentList, setAppointmentList }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleClick = (dr) => {
    setSelectedDoctor(dr);
    setShowModal(true);
  };

  return (
    <div>
      <Container className="p-2">
        <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
          Our Doctors
        </h3>
        <Row className="justify-content-center">
          {doctors.map((dr) => (
            <Col key={dr.id} xs={6} sm={4} md={3}>
              <img
                src={dr.img}
                alt={dr.name}
                className="img-thumbnail doctor-img"
                onClick={() => handleClick(dr.name)}
              />
              <h5>{dr.name}</h5>
              <h6 className="text-danger">{dr.dep}</h6>
            </Col>
          ))}
        </Row>
        <ModalList
          show={showModal}
          drname={selectedDoctor}
          onHide={() => setShowModal(false)}
          appointmentList={appointmentList}
          setAppointmentList={setAppointmentList}
        />
      </Container>
    </div>
  );
};

export default DoctorList;
