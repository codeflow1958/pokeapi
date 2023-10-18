import { useState, useEffect } from "react";
function Pokemon() {
  const [data, setData] = useState(null);
  const [all, setAll] = useState(null);
  const [pokemon, setPokemon] = useState("pickachu");

  const getData = async (url, setState) => {
    const res = await fetch(url);
    const datos = await res.json();
    setState(datos);
  };

  useEffect(() => {
    getData("https://pokeapi.co/api/v2/pokemon?limit=10", setAll);
  }, []);

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  }, [pokemon]);

  const changePokemon = (e) => {
    e.preventDefault();
    setPokemon(e.target[0].value);
  };

  const handClick = (e) => {
    setPokemon(e.target.value);
  };

  return { all, data, pokemon, changePokemon, handClick };
}
export default Pokemon;
