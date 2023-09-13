import React from "react";
import Card from "../componentes/Card";

export default class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="listado">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
