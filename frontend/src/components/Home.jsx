import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="home-container">
      <h1>Welcome to the Grievance Support Application</h1>
      <p>
        This platform is designed to help citizens easily raise and track grievances related to government schemes.
        Submit your complaints, check status updates, and receive quick resolutions.
      </p>

      <div className="home-buttons">
        <button className="btn" onClick={() => navigate("/login")}>Login</button>
        <button className="btn" onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Home;
