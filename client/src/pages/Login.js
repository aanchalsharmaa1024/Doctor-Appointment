import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import "../pages/Styles/Login.scss";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
        window.location.reload();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
            <div className="authentication-form card">
            <div className="logo1">
        medi<span>cure</span>
      </div>
              <h1>Login to your Account</h1>
              <p>Login using social media accounts</p>
              <div className="icons">
                <img src="https://img.icons8.com/color/480/facebook-new.png" alt="" srcset="" />
                <img src="https://img.icons8.com/color/480/google-plus--v1.png" alt="" />
                <img src="https://img.icons8.com/color/480/linkedin.png" alt="" srcset="" />
              </div>
              <div className="or">
                <hr />
                <p>or</p>
                <hr />
              </div>

        <Form layout="vertical" className="login-card"  onFinish={onFinish}> 
          <Form.Item name="email">
            <Input placeholder="Email" className="form-input"/>
          </Form.Item>
          <Form.Item name="password">
            <Input placeholder="Password"  type="password" className="form-input"/>
          </Form.Item>

          
          <Button className="my-3 full-width-button login-btn" htmlType="submit">
            Login
          </Button>
         
        </Form>
      </div>
      <div className="login-content">
      <h1>New Here?</h1>
        <p style={{textAlign: "center"}}>Sign Up and discover a great <br></br> amount of curated list of doctors<br></br> for your wellbeing.</p>      
        <Link to="/register" className="anchor mt-2">
        <Button className="my-3 register-btn">
            Sign up
          </Button>
          </Link></div>

    </div>
  );
}

export default Login;
