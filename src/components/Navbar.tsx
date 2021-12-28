import React, { useState } from 'react';

// type navProps = {};

export default function Navbar() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => setIsClicked((prev) => !prev);
  const closeMobileMenu = () => setIsClicked(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <button className="navbar-logo">Teste</button>
          <button className="menu-icon" onClick={handleClick}>
            <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
          <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <button className="nav-links" onClick={closeMobileMenu}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={closeMobileMenu}>
                More
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={closeMobileMenu}>
                Info
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
