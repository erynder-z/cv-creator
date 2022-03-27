import React, { Component } from 'react';

export class Preview extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { personal } = this.props;
    return (
      <div className="preview ">
        <div className="personal-information-preview">
          <div className="first-name-preview">{personal.firstName}</div>
          <div className="last-name-preview">{personal.lastName}</div>
        </div>
      </div>
    );
  }
}
