import React, { useState } from "react";
import "./Nome.scss";

function Nome(props) {
  // Dichiara una nuova variable di stato, che chiameremo "contatore"
  const [medaglie, setMedaglie] = useState(0);
  function onClick() {
    setMedaglie(medaglie + 1);
  }
  const giovaneOVecchio =
    props.anni > 30 ? <div> SEI VECCHIO</div> : <div>SEI GIOVANE</div>;
  // Se hai più di 30 anni, sei vecchio, altrimenti sei giovane.
  return (
    <div className={"nome " + (medaglie % 2 ? "sfondo-blu" : "sfondo-verde")}>
      <div>
        {props.nome}, hai {props.anni} anni.
      </div>
      <div>sei giovane o vecchio?</div>
      {giovaneOVecchio}
      <h1>Numero medaglie: {medaglie}</h1>
      <h5>{medaglie % 2 ? "Dispari" : "Pari"}</h5>
      <button onClick={onClick}>Cliccami</button>
    </div>
  );
}

export default Nome;
