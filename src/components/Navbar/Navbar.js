// Navbar.js
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  const user = {
    name: 'Sebas Joel',
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <div className="dropdown-container ms-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" className="custom-toggle">
              {user.name}
              <img
                src="/images/profile/user.jpg"
                alt="Usuario"
                className="rounded-circle user-image"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
            <button className="custom-button" onClick={() => window.location.href = "#/logout"}>
            Cerrar Sesión
            </button>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
