import React from "react";

export class Dropdown extends React.Component {
  render() {
    return (
      <select className="custom-select" onChange={this.props.handleChange}>
        <option defaultValue>Wybierz...</option>
        <option value="kobylany">Kobylany</option>
      </select>
    );
  }
}
