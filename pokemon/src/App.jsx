import "./App.css";
import Buscador from "./componentes/Buscador";
import Card from "./componentes/Card";
import Pokemon from "./services/Pokemon";
Buscador;
Card;

function App() {
  const { all, data, pokemon, change } = Pokemon();
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
