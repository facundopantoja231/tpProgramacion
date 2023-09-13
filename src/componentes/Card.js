import React from "react";
import Accion from "./Accion";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { titulo, onClick } = this.props;
    return(
    <div className="Card">
      <div className="Datos">
        <span>ID:</span>
        <span>Materia:</span>
        <span>Docente:</span>
        <span>HsCatedras:</span>
      </div>


      <Accion />
    </div>
  )};
}
