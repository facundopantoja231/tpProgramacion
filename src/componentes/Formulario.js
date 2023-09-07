import React from "react";
import Input from "./Input";
import Boton from "./Boton";
export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Materia: "",
      Docente: "",
      HsCatedras: "",
      Nota: ""
    };
  }

  agregarNota() {
    const divNotas = document.getElementById("notas");
    const notaHTML = `<input class="notita" type="number" name="nota" placeholder="Nota">`; 
    divNotas.innerHTML += notaHTML;  

}

  render() {


    const { ID, Materia, Docente, HsCatedras, Nota } = this.state;
    return (
      <div className="Formulario">
        <h2 className="title">Registro de Materias</h2>
        <Input
          esNota={false}
          titulo="ID"
          valor={ID}
          onChange={(valor) => this.setstate({ ID: valor })}
        />
        <Input
          esNota={false}
          titulo="Materia"
          valor={Materia}
          onChange={(valor) => this.setstate({ Materia: valor })}
        />
        <Input
          esNota={false}
          titulo="Docente"
          valor={Docente}
          onChange={(valor) => this.setstate({ Docente: valor })}
        />
        <Input
          esNota={false}
          titulo="HsCatedras"
          valor={HsCatedras}
          onChange={(valor) => this.setstate({ HsCatedras: valor })}
        />
        <div className="notas" id="notas">
          <Input
            esNota={true}
            titulo="Nota"
            valor={Nota}
            onChange={(valor) => this.setstate({ Nota: valor })}
          />
        </div>
        <div className="botones">
          <Boton titulo="G" onClick={() => alert("Guardado")}/>
          <Boton titulo="+" onClick={() => this.agregarNota()} />
          <Boton titulo="B" onClick={() => alert("Borrado")}/>
        </div>
        <div></div>
      </div>
    );
  }
}
