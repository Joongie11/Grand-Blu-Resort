import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">Grand Blu Resort</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <div className="language-switcher">
            <select id="language-select">
              <option value="en">EN</option>
              <option value="pl">PL</option>
              <option value="ua">UA</option>
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
