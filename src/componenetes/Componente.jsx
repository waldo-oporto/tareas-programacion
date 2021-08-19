import React from "react";
import MusicLogo from "../images/icon-music.svg";
import HeroLogo from "../images/illustration-hero.svg";
import "../styles/componentes.css";

function Componente({ Plan, Precio }) {
  return (
    <div>
      <div className="contenedor-principal">
        <img src={HeroLogo} alt="NONA" />
        <div className="sumario">
          <h1>Order Summary</h1>
          <p>
            you can now listen to millions of songs, audiobooks,and podcast on
            any device anywhere you like!
          </p>
        </div>
        <div className="precios">
          <img src={MusicLogo} alt="Nani?" />
          <div>
            <p>{Plan}</p>
            <p>{Precio}</p>
          </div>
          <a href="#">Change</a>
        </div>
        <div className="botones">
          <button>proceed to payment </button>
          <button>cancel order</button>
        </div>
      </div>
    </div>
  );
}

export default Componente;
