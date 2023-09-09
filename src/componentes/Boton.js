import React from "react";

export default class Boton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { onClick, imageButton, altButton } = this.props;
    return (
      <span className="Boton" onClick={() => onClick()}>
        <img src={imageButton} alt={altButton}/>
      </span>
    );
  }
}
