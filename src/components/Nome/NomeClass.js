import React from "react";
import "./Nome.scss";

class Nome extends React.Component {
  constructor() {
    super();
    this.state = {
      medaglie: 0,
    };
  }

  onClick() {
    this.setState({
      medaglie: this.state.medaglie + 1,
    });
    // setMedaglie(medaglie + 1);
  }

  componentDidMount() {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const giovaneOVecchio =
      this.props.anni > 30 ? <div> SEI VECCHIO</div> : <div>SEI GIOVANE</div>;
    // Se hai più di 30 anni, sei vecchio, altrimenti sei giovane.
    return (
      <div
        className={
          "nome " + (this.state.medaglie % 2 ? "sfondo-blu" : "sfondo-verde")
        }
      >
        <div>
          {this.props.nome}, hai {this.props.anni} anni.
        </div>
        <div>sei giovane o vecchio?</div>
        {giovaneOVecchio}
        <h1>Numero medaglie: {this.state.medaglie}</h1>
        <h5>{this.state.medaglie % 2 ? "Dispari" : "Pari"}</h5>
        <button onClick={() => this.onClick()}>Cliccami</button>
      </div>
    );
  }
}

export default Nome;
