import React, { useState } from "react";
import "../Styles/LoginPage.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPageLMS() {
  const navigate = useNavigate();
  const [pin, setVoucherPin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    try {
        const response = await axios.post('http://localhost:3000/auth/login', { pin, password }); // Adjusted URL
        const { token } = response.data; // Destructure token from response data

        if (token) {
            localStorage.setItem('token', token); // Store token for authenticated routes
            navigate('/StudentDashboard'); // Navigate to the application form page
        } else {
            throw new Error('Token not received');
        }
    } catch (error) {
        console.error('Login failed', error);
        alert('Login failed. Please check your voucher pin and password.');
    }
};

  return (
    <>
      <div className="page-background">
        <div className="image-section">
          <img className="graduation-image" src='https://github.com/SelasiHyp/novaHive-work/blob/main/image1.jpg?raw=true' alt="graduates" />
          <div className="image-text-overlay">
            <h2 className="welcome-text">Welcome to <br />TM Pre-University College <br /> LMS CORE<br /></h2>
          </div>
        </div>

        <div className="login-section">
          <div className="login-container">
            <p className="login-title">Log In</p>
            <p className="login-instruction">Enter your student ID and Pin to login to the LMS</p>
            <input
              className="login-field"
              type="text"
              placeholder="Student ID"
              value={pin}
              onChange={(e) => setVoucherPin(e.target.value)}
            />
            <input
              className="login-field"
              type="password"
              placeholder="Pin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLoginClick} className="signIn-button"> Sign in</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPageLMS;
