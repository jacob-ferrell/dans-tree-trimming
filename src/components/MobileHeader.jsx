import "../styles/MobileHeader.css";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MobileHeader = (props) => {
  return (
    <header id="mobile-header" className="container">
      <div className="d-flex top-row justify-content-between">
        <div className="mx-1">Dan's Tree Trimming</div>
        <div className="mx-1" id="mobile-phone-container">
          
          <a href="tel:999-999-9999">
              <div>(999)-999-9999</div>
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
      <nav className="d-flex justify-content-center">
          <Link to="/" className="nav-link">
            {"Home |"}
          </Link>
          <Link to="/services" className="nav-link">
            {"Services |"}
          </Link>
          <Link to="/contact" className="nav-link">
            {"Contact Us"}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
