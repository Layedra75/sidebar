import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faUser, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './components.css';

const SidebarComponent = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
  };

  return (
    <Sidebar className="sidebar">
      <Menu iconShape="square">
        <MenuItem className="menu-item">
          <Link className="logo" to="/">
            <img src="/images/logos/logo-navbar.png" alt="Logo Empresa" />
          </Link>
        </MenuItem>
        <MenuItem className="menu-item">
          <Link to="/" style={linkStyle}>
            <FontAwesomeIcon icon={faHome} className="menu-icon" />
            <span className="menu-text">Home</span>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item">
          <Link to="/usuarios/registro" style={linkStyle}>
            <FontAwesomeIcon icon={faUser} className="menu-icon" />
            <span className="menu-text">Registro Usuarios</span>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item">
          <Link to="/pacientes/registro" style={linkStyle}>
            <FontAwesomeIcon icon={faAddressCard} className="menu-icon" />
            <span className="menu-text">Registro Paciente</span>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item">
          <Link to="/usuarios" style={linkStyle}>
            <FontAwesomeIcon icon={faUser} className="menu-icon" />
            <span className="menu-text">Usuarios</span>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item">
          <Link to="/pacientes" style={linkStyle}>
            <FontAwesomeIcon icon={faAddressCard} className="menu-icon" />
            <span className="menu-text">Pacientes</span>
          </Link>
        </MenuItem>
        <MenuItem className="menu-item">
          <Link to="/about" style={linkStyle}>
            <FontAwesomeIcon icon={faInfoCircle} className="menu-icon" />
            <span className="menu-text">About</span>
          </Link>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
