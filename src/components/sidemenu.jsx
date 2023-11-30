import React from "react";
import { NavLink } from "react-router-dom";

export default ({ toggleMenu }) => (
  <div className="sidemenu">
    <div className="card profile-card">
      <div className="card-body">
        <h4 className="card-title">Sohaib ur rehman</h4>
        <h6 className="card-subtitle mb-3 text-muted">Administrator</h6>
        <NavLink to="/" onClick={toggleMenu} className="card-link">
          Home
        </NavLink>

        <NavLink to="/login" onClick={toggleMenu} className="card-link">
          Logout
        </NavLink>
      </div>
    </div>
    <NavLink className="link" to="/login">
      login
    </NavLink>
    <NavLink className="link" to="/signup">
      SignUp
    </NavLink>
    <NavLink className="link" to="/flights" onClick={toggleMenu}>
      Flights
    </NavLink>
    <NavLink className="link" to="/profile" onClick={toggleMenu}>
      Profile
    </NavLink>
    <NavLink className="link" to="/aboutus" onClick={toggleMenu}>
      About Us
    </NavLink>{" "}
    <NavLink className="link" to="/contactus" onClick={toggleMenu}>
      Contact US
    </NavLink>
    <NavLink className="link" to="/services" onClick={toggleMenu}>
      Services
      <NavLink className="dropdown-item" to="/hotels">
        Hotels
      </NavLink>
      <NavLink className="dropdown-item" to="/restaurant">
        Restaurants
      </NavLink>
      <NavLink className="dropdown-item" to="/tourpakages">
        Tour Packages
      </NavLink>
      <NavLink className="link" to="/admin" onClick={toggleMenu}>
        Admin
      </NavLink>
      <NavLink className="dropdown-item" to="/adminlogin">
        Admin Login
      </NavLink>
      <NavLink className="dropdown-item" to="/feedbacks">
        Feedbacks
      </NavLink>
      <NavLink className="dropdown-item" to="/managepackages">
        Manage Packages
      </NavLink>
    </NavLink>
  </div>
);
