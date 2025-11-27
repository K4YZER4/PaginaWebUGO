import React, { useEffect, useState } from "react";
import Button from "../../ui/button/Button"; // Reutilizamos tu botón
import heroImage from "../../../assets/bus.jpg";
import "./Hero.css";

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 5; // Ajusta la velocidad del conteo
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Círculo de fondo difuminado (efecto glow) */}
      <div className="hero-glow"></div>

      <div className="hero-content">
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="hero-text-col">
          <div className="badge-container">
            <span className="badge">
              <i className="icon-plane"></i> Transporte Urbano Inteligente
            </span>
          </div>

          <h1 className="hero-title">
            Bienvenido a <br />
            <span className="gradient-text">UrbanGO</span>
          </h1>

          <p className="hero-description">
            La solución inteligente para navegar el transporte público en
            Guasave. Encuentra tu ruta ideal en segundos.
          </p>

          <div className="hero-actions">
            <Button variant="primary" className="btn-glow">
              Descubre cómo funciona
            </Button>
            <Button variant="outline">Más información</Button>
          </div>

          {/* Estadísticas Animadas */}
          <div className="hero-stats">
            <div className="stat-item">
              <h3>
                <AnimatedCounter end={14} />+
              </h3>
              <p>Rutas</p>
            </div>
            <div className="stat-item">
              <h3>
                <AnimatedCounter end={50} />+
              </h3>
              <p>Paradas</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Disponible</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: IMAGEN CON EFECTO CRISTAL */}
        <div className="hero-image-col">
          <div className="glass-card">
            <img src={heroImage} alt="UrbanGO App" className="phone-mockup" />
          </div>
        </div>
      </div>

      {/* Onda blanca inferior (opcional, si la quieres) */}
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
