// Sidebar
import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressCard, faHospital, faCalendarCheck, faAddressBook } from '@fortawesome/free-regular-svg-icons';


const Sidebar = () => {
  const location = useLocation();

  const sidebarMenu = [
    {
      title: 'Inicio',
      items: [
        {
          name: 'Dashboard',
          route: '/',
          icon: <FontAwesomeIcon icon={faHospital} />,
          hideMenu: 'Dashboard',
        },
        {
          name: 'Citas',
          route: '/citas',
          icon: <FontAwesomeIcon icon={faCalendarCheck} />,
          hideMenu: 'Citas Médicas',
        },
        {
          name: 'Historial clínico',
          route: '/historias',
          icon: <FontAwesomeIcon icon={faAddressBook} />,
          hideMenu: 'Historial clínico',
        },
      ],
    },
    {
      title: 'Registros',
      items: [
        {
          name: 'Usuarios',
          route: '/usuarios',
          icon: <FontAwesomeIcon icon={faUser} />,
          hideMenu: 'Usuarios',
        },
        {
          name: 'Pacientes',
          route: '/pacientes',
          icon: <FontAwesomeIcon icon={faAddressCard} />,
          hideMenu: 'Pacientes',
        },
      ],
    },
  ];

  return (
    <div className="sidebar bg-white">
      <ul className="sidebar-items">
        {/* Logo */}
        <li className="menu-item-logo">
          <Link className="logo" to="/">
            <img src="/images/logos/logo-navbar.png" alt="Logo" />
          </Link>
        </li>

        {/* Renderizar opciones de la barra lateral */}
        {sidebarMenu.map((section, index) => (
          <React.Fragment key={index}>
            <li className={`nav-small-cap ${section.title.toLowerCase()}-title`}>
              <span className="hide-menu">{section.title}</span>
            </li>
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={`sidebar-item ${location.pathname === item.route ? 'active' : ''}`}
              >
                <Link to={item.route} className="link">
                  <div className="item centered">
                    <span className="icon">
                      {item.icon}
                    </span>
                    <span className="text">{item.hideMenu}</span>
                  </div>
                </Link>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;