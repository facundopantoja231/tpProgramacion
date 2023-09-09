import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    function agregarNota() {
      const divNotas = document.getElementById("notas");

      const notaHTML = `
      		<Input
            esNota=${true}
            titulo="Nota"
            valor=${Nota}
            onChange=${(valor) => this.setstate({ Nota: valor })}
          />
  		` 
      
      	divNotas.innerHTML += notaHTML;  

  }


    const { titulo, valor, onChange, esNota } = this.props;
    return (
        <input
          className={esNota ? "notita" : "input"}
          placeholder={titulo}
          value={valor}
          onChange={(e) => onChange(e.target.value)}
        />
    );
  }
}
