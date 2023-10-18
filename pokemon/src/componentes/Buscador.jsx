import React from "react";

export default function Buscador() {
  return (
    <div className="buscador">
      <form>
        <label> escribe el nombre del pokemon</label>
        <input type="text" />
        <button type="submit">buscar</button>
      </form>
      <div>
        <p>filtra letra por letra</p>
        <button type="submit">buscar</button>
      </div>
    </div>
  );
}
