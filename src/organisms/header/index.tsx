import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@atoms/Button';
import {
  ReorderOutlined,
  CloseOutlined
} from "@mui/icons-material";
import './style.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false)
  }, [location])
  
  return (
    <header className={`header ${(location.pathname === '/menu') && 'bg-white'}`} id="header">
      <div className="logo">
        <Link to="/">
          <img src="https://res.cloudinary.com/dpb8gwksd/image/upload/v1703579414/food-web/logo-header_orwdmc.png" alt="logo" />
        </Link>
      </div>
      <div className="content">
        <nav className="navbar">
          <ul>
            <li className={(location.pathname === "/" || location.pathname === "/book") ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === "/menu" ? "active" : ""}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <Link to="/blog">Pages</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="header-button">
          <Button onClick={() => navigate('/book')} title="Book A Table" variant='secondary' />
        </div>
      </div>
      {/* MOBILE */}
      <ReorderOutlined onClick={() => setIsOpen(true)} className='mobile-icon' />
      <div className={isOpen ? "mobile-nav block " : "mobile-nav hidden " }>
        <CloseOutlined onClick={() => setIsOpen(false)} className='close-icon'/>
        <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/about" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === "/menu" ? "active" : ""}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <Link to="/blog">Pages</Link>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="header-button">
          <Button onClick={() => navigate('/book')} title="Book A Table" variant='secondary' />
        </div>
      </div>
    </header>
  )
}
export default Header;