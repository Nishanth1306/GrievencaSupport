import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = ({ token, handleLogout }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">GovSchemes</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
