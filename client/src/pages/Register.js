import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import "../pages/Styles/Register.scss";
import profilepic from "../pages/assets/12291026_Group of doctors standing at hospital building.jpg";


function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="register-authentication">
      
      <div className="register-authentication-form card p-3">
      <div className="logo1">
        medi<span>cure</span>
      </div>
        <h1 className="">Create your account</h1>
        <p>Sign up using</p>

        <div className="icons">
          <button style={{borderColor:"rgb(0, 153, 255)", color: "rgb(0, 153, 255)"}}> <img src="https://img.icons8.com/color/480/twitter--v1.png" alt="" /> Sign up using twitter</button>
          <button> <img src="https://img.icons8.com/fluency/240/gmail-new.png" alt="" /> Sign up using Google</button>
        </div>

        <div className="or">
                <hr />
                <p>or</p>
                <hr />
              </div>

        <Form layout="vertical" className="register-card" onFinish={onFinish}>
          <Form.Item name="name">
            <Input placeholder="Name" className="form-input" />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="Email" className="form-input" />
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Password" type="password" className="form-input" />
          </Form.Item>

          <Button className="my-3 full-width-button register-btn" htmlType="submit">
            Register
          </Button>
        </Form>
      </div>

      <div className="register-content">

      <h1>Healthcare Made Easy</h1>
        <p> Sign Up Now for<br></br> Quick and Painless Doctor Appointments!</p>      
        <Link to="/login" className="anchor mt-2">
        <Button className="my-3 login-btn">
            Login
          </Button>
          </Link></div>
    </div>
  );
}

export default Register;
