import React from 'react';
import './style.css';
import Button from '../../atoms/button';

export const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <img src="./assets/logo-header.png" alt="logo" />
      </div>
      <div className="content">
        <nav className="navbar">
          <ul>
            <li className='active'><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Pages</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
        <div className="header-button">
          <Button title="Book A Table" isRed={false} />
        </div>
      </div>
    </header>
  )
}
