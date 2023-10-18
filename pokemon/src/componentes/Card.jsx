import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div>
          <img src={props.imagen} alt={props.rsc} />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Propiedades</th>
                <th>valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>id</td>
                <td>25</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
