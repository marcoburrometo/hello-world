import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Nome from "./components/Nome/Nome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          ciao <Nome nome="Marco" anni={29} />
        </div>
        <div>
          <Nome nome="Enrico" anni={39} />
          <Nome nome="giulia" anni={29} />
        </div>
      </header>
    </div>
  );
}

export default App;
