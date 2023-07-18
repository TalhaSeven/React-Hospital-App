import { useState } from "react";
import DoctorList from "../Components/DoctorList";
import AppointmentList from "../Components/AppointmentList";
import { doctorData, appointmentData } from "../Helper/data";

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData);
  const [appointmentList, setAppointmentList] = useState(appointmentData);
  console.log(setDoctors);
  return (
    <div className="text-center mt-2">
      <h1 className="text-danger text-center m-5 display-4">SEVEN HOSPITAL</h1>
      <DoctorList
        doctors={doctors}
        appointmentList={appointmentList}
        setAppointmentList={setAppointmentList}
      />
      <AppointmentList
        appointmentList={appointmentList}
        setAppointmentList={setAppointmentList}
      />
    </div>
  );
};

export default Home;
