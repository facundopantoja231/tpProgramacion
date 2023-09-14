import React from "react";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Listado from "./componentes/Listado";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Materias: [],
    };
  }

  componentDidMount() {
    this.obtenerMaterias();
  }

  obtenerMaterias() {
    const url = "https://hd6v8q-3000.csb.app/api/materias";

    axios
      .get(url)
      .then((resp) => {
        console.log(resp.data);

        escribir(resp.data.materias);
        //resp.data.materias
      })

      .catch((error) => {
        alert("ocurrio un error");
        console.log(error);
      });
  }

  guardar(datos) {
    const url = "http://192.168.0.196:3010/api/materias/";

    axios
      .post(url, datos)
      .then((resp) => {
        console.log(resp.data);
        obtenerMateria();
      })
      .catch((error) => {
        alert("ocurrio un error");
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <Formulario />
        <Listado />
      </div>
    );
  }
}
