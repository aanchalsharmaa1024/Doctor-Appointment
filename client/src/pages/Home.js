import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Doctor from "../components/Doctor";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import "../pages/Styles/Layout.scss";
import doctor from "../pages/assets/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441-removebg-preview.png";
import { Link, useLocation, useNavigate } from "react-router-dom";


function Home() {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get("/api/user/get-all-approved-doctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      dispatch(hideLoading())
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading())
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
        <div className="landing-page">
          <div className="lhs">
            <h1>Better care for your health.</h1>
            <p>Welcome to a new way of finding quality treatment from qualified doctors in just a click!</p>
            <div className="landing-btns">
              <Link to="/doctor/appointments" ><button className="getAppt">Get your appointment</button></Link>

            <button className="giveUsCall"><img src="https://img.icons8.com/dotty/80/phone-disconnected.png" alt="" srcset="" /> Give us a call</button>
            </div>
          </div>
          <div className="rhs">
            <img src={doctor} alt="" />
          </div>
        </div>
    <h1 style={{fontSize:"1.5rem", fontWeight:"700", marginBottom:"50px"}}>Available Doctors</h1>
      <Row gutter={20}>
        {doctors.map((doctor) => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <Doctor doctor={doctor} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default Home;
