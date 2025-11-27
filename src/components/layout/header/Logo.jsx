import React from "react";
// 1. Importamos la imagen.
// "src/assets" suele estar dos niveles arriba de "components/layout/header",
// así que usamos ../../../
import logoImg from "../../../assets/logoAzul.png";

const Logo = () => {
  return (
    <div className="header-logo">
      {/* 2. Usamos la variable importada en el src de la imagen */}
      <img src={logoImg} alt="Logo UrbanGO" className="logo-image" />

      <span className="logo-text">UrbanGO</span>
    </div>
  );
};

export default Logo;
