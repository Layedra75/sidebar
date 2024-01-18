import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Navbar = () => {
  // Simular datos del usuario
  const user = {
    name: 'Sebas Joel',
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light sticky-top ">
      <div className="container-fluid">
        {/* Foto del usuario y Logout */}
        <div className="dropdown-container ms-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {user.name}
              <img
                src="/images/profile/user.jpg"
                alt="Usuario"
                className="rounded-circle"
                width="30"
                height="30"
                style={{ marginLeft: '10px' }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;