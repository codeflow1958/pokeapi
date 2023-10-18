import { useState } from "react";
import "./App.css";
import Buscador from "./componentes/Buscador";
import Card from "./componentes/Card";
Buscador;
Card;

function App() {
  return (
    <>
      <main>
        <Buscador></Buscador>
        <Card imagen={data?.sprites.other.home.front_default} src={data.name} />
      </main>
    </>
  );
}

export default App;
