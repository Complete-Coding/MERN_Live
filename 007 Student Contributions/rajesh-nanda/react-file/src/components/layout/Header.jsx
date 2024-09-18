// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className="announcement-bar">
        Announcement: I AM TO HELP YOU
      </div>
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo"> Logo Rajesh</div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#">Donate</a>
            <a href="#">Contact</a>
          </div>
          {/* <div className="cart-icon">
            🛒
            <span className="cart-count">3</span>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;