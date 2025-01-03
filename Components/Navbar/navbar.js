import { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav">
        <div className="navLeft">Robert Garcia</div>
        <div className="burgerMenu" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`navRight ${isMenuOpen ? 'active' : ''}`}>
          <Link href="./aboutus" className="navLink">About</Link>
          <Link href="#contact-us" className="navLink">Contact</Link>
        </div>
      </div>
    </nav>
  );
}