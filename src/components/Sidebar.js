import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faAddressCard,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar bg-light">
      <ul className="sidebar-items">
        {/* Logo */}
        <li className="menu-item-logo">
          <Link className="logo" to="/">
            <img src="/images/logos/logo-navbar.png" alt="Logo Empresa" />
          </Link>
        </li>

        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" className="link">
            <div className="item centered">
              <span className="icon">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span className="text">Home</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === '/usuarios/registro' ? 'active' : ''}>
          <Link to="/usuarios/registro" className="link">
            <div className="item centered">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="text">Registro Usuarios</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === '/pacientes/registro' ? 'active' : ''}>
          <Link to="/pacientes/registro" className="link">
            <div className="item centered">
              <span className="icon">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              <span className="text">Registro Paciente</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === '/usuarios' ? 'active' : ''}>
          <Link to="/usuarios" className="link">
            <div className="item centered">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="text">Usuarios</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === '/pacientes' ? 'active' : ''}>
          <Link to="/pacientes" className="link">
            <div className="item centered">
              <span className="icon">
                <FontAwesomeIcon icon={faAddressCard} />
              </span>
              <span className="text">Pacientes</span>
            </div>
          </Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about" className="link">
            <div className="item centered">
              <span className="icon">
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              <span className="text">About</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
