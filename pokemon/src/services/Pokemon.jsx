import React, { useEffect, useState } from "react";

function Pokemon() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/${pokemon}/`);
      const datos = await res.json();
      setData(datos);
    };

    getData();
  }, []);

  return <div>Pokemon</div>;
}

export default Pokemon;
