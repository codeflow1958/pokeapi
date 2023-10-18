import React from "react";

export default function Buscador() {
  return (
    <div>
      <form>
        <label> escribe el nombre del pokemon</label>
        <input type="text" />
        <button type="submit"></button>
      </form>
      <div>
        <p>filtra letra por letra</p>
        <button type="submit"></button>
      </div>
    </div>
  );
}
