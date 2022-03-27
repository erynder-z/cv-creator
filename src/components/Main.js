import React, { Component } from 'react';
import uniqid from 'uniqid';
import { Inputs } from './Inputs';
import { Preview } from './Preview';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      personal: {
        id: uniqid(),
        firstName: '',
        lastName: '',
      },
    };
  }

  handleFirstNameInput(e) {
    this.setState({
      personal: { firstName: e.target.value, id: this.state.personal.id },
    });
  }

  render() {
    const personal = this.state.personal;
    return (
      <div className="main-wrapper">
        <Inputs
          change={(e) => {
            this.handleFirstNameInput(e);
          }}
        ></Inputs>
        <Preview personal={personal}></Preview>
      </div>
    );
  }
}
