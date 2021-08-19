import React from "react";
import Componente from "./Componente";

function App() {
  return (
    <div>
      <Componente Plan="Annual" Precio="99.99$"></Componente>
      <Componente Plan="Mensual" Precio="59.99$"></Componente>
      <Componente Plan="Semanal" Precio="29.99$"></Componente>
    </div>
  );
}

export default App;
