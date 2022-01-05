import React, { useState } from 'react';
import '../styles/Navbar.css';

// type navProps = {};

export default function Navbar() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => setIsClicked((prev) => !prev);
  const closeMobileMenu = () => setIsClicked(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fas fa-map-marker-alt" />
            HubLocal
          </button>
          <button className="menu-icon" onClick={handleClick}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
          <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <button className="nav-links" onClick={closeMobileMenu}>
                Início
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={closeMobileMenu}>
                Sobre
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={closeMobileMenu}>
                Vantagens
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
