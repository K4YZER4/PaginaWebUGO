import React from "react";

const Navigation = () => {
  // Definimos los links aquí para que sea fácil editar el menú
  const menuItems = [
    { label: "Inicio", href: "#" },
    { label: "Sobre el Proyecto", href: "#proyecto" },
    { label: "Cómo Funciona", href: "#funciona" },
    { label: "Equipo", href: "#equipo" },
  ];

  return (
    <ul className="header-nav">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.href} className="nav-link">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
