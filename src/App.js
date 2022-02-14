import React, { useState } from "react";
import "./App.scss";
import Nome from "./components/Nome/Nome";

// const lista = [
//   { nome: "Marco", anni: 29 },
//   { nome: "Marco", anni: 30 },
//   { nome: "Enrico", anni: 39 },
//   { nome: "Giulia", anni: 29 },
// ];

function App() {
  const [lista, setLista] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        {lista.map((item, idx) => {
          return (
            <Nome
              nome={item.nome}
              anni={item.anni}
              key={item.nome + "-" + idx}
            />
          );
        })}
        <button
          onClick={() => {
            setLista([...lista, { nome: "Marco", anni: 29 }]);
          }}
        >
          Aggiungi persona
        </button>
        <button
          onClick={() => {
            setLista(lista.filter((item, idx) => idx !== 0));
          }}
        >
          Rimuovi persona
        </button>
      </header>
    </div>
  );
}

export default App;
