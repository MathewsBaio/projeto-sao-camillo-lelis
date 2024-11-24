import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    document.body.style.overflow = !isOpen ? "hidden" : "unset";
  };

  if (!isMobile) return null;

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`hamburger-button ${isOpen ? "open" : ""}`}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {isOpen && (
        <div className="mobile-menu-overlay">
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <nav className="mobile-nav">
              <a
                href="#programas"
                className="mobile-nav-item"
                onClick={toggleMenu}
              >
                Programas
              </a>
              <a href="#sobre" className="mobile-nav-item" onClick={toggleMenu}>
                Sobre Nós
              </a>
              <a
                href="#historias"
                className="mobile-nav-item"
                onClick={toggleMenu}
              >
                Nossas Histórias
              </a>
              <a
                href="#doar"
                className="mobile-nav-item btn-doar"
                onClick={toggleMenu}
              >
                DOAR AGORA
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="logo">
          <img
            className="logo"
            src="/icons/logo.png"
            alt="logo da Casa São Camillo de Lelis"
          />
          <h1>Casa São Camillo de Lelis</h1>
        </div>
        <Nav />
      </div>
      <MenuMobile />
    </>
  );
};

export default Menu;
