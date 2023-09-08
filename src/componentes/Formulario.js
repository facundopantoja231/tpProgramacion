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
      Nota: [""]
    };
  }

  agregarNota() {
    let nuevo = this.state.Nota;
    nuevo.push("")
    this.setState({Nota: nuevo})
    /*
    const divNotas = document.getElementById("notas");
    const notaHTML = `<Input class="notita" titulo="Nota" />`; 
    divNotas.innerHTML += notaHTML;  
*/
}

editarNota(index, valor) {
  let nuevo = this.state.Nota;
  nuevo[index] = valor;
  this.setState({Nota: nuevo})
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
          {Nota.map((item, index) => {
            return(
              <Input
                key={index}
                esNota={true}
                titulo="Nota"
                valor={item}
                onChange={(valor) => this.editarNota(index, valor)}
              />
            )
          })}
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
