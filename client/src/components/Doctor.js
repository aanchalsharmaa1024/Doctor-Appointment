import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Styles/Doctor.scss"

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div className="card p-2 cursor-pointer doctor-card" onClick={() => navigate(`/book-appointment/${doctor._id}`)}>
      <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-doctor-male-profession-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" alt="" />
      <h1>
        Dr. {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p> <b>Specialization: </b>
      {doctor.specialization} </p>
      <p>
        <b>Phone Number : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Address : </b>
        {doctor.address}
      </p>
      <p>
        <b>Fee per Visit : </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Timings : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
