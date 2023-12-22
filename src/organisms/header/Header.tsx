import { useState } from 'react';
import './style.css';
import Button from '../../atoms/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    navigate('/book');
  }
  
  return (
    <header className='header' id="header">
      <div className="logo">
        <a href="/">
          <img src="./assets/logo-header.png" alt="logo" />
        </a>
      </div>
      <div className="content">
        <nav className="navbar">
          <ul>
            <li className={(location.pathname === "/" || location.pathname === "/book") ? "active" : ""}><Link to="/">Home</Link></li>
            <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
            <li className={location.pathname === "/menu" ? "active" : ""}><Link to="/menu">Menu</Link></li>
            <li className={location.pathname === "/blog" ? "active" : ""}><Link to="/blog">Pages</Link></li>
            <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-button">
          <Button onClick={handleClick} title="Book A Table" />
        </div>
      </div>
      {/* MOBILE */}
      <ReorderOutlinedIcon onClick={() => setIsOpen(true)} className='mobile-icon' />
      <div className={isOpen ? "mobile-nav block " : "mobile-nav hidden " }>
        <CloseOutlinedIcon onClick={() => setIsOpen(false)} className='close-icon'/>
        <ul>
            <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
            <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
            <li className={location.pathname === "/menu" ? "active" : ""}><Link to="/menu">Menu</Link></li>
            <li className={location.pathname === "/blog" ? "active" : ""}><Link to="/blog">Pages</Link></li>
            <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="header-button">
          <Button onClick={handleClick} title="Book A Table" isRed={false} />
        </div>
      </div>
    </header>
  )
}
