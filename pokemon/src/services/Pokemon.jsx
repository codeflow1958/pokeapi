import React, { useEffect, useState } from "react";

function Pokemon() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(" ");
      const data = await res.json();
      setData(data);
    };

    getData();
  }, []);

  return <div>Pokemon</div>;
}

export default Pokemon;
