import React, { Component } from 'react';

export class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="inputs ">
        <div className="personal-information-input">
          <input
            className="first-name-input"
            type="text"
            id="firstNameInput"
            placeholder="first name"
            onChange={(e) => {
              this.props.change(e);
            }}
          />
        </div>
      </div>
    );
  }
}
