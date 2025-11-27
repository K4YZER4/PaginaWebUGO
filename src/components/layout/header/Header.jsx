import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Button from "../../ui/button/Button"; // Importamos el botón común
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Logo />
        </div>

        <nav className="header-center">
          <Navigation />
        </nav>

        <div className="header-right">
          <Button variant="primary">Contacto</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
