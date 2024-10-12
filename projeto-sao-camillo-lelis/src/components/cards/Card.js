import { useState } from "react";
import "../../styles/card.css";

export default function Card({ titulo, paragrafo }) {
  const [ativo, setAtivo] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => {
        setAtivo(true);
      }}
      onMouseLeave={() => {
        setAtivo(false);
      }}
    >
      {ativo ? <p>{paragrafo}</p> : <h1>{titulo}</h1>}
    </div>
  );
}
