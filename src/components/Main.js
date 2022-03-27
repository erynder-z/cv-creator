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
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        firstName: e.target.value,
        id: this.state.personal.id,
      },
    }));
  }

  handleLastNameInput(e) {
    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        lastName: e.target.value,
        id: this.state.personal.id,
      },
    }));
  }

  render() {
    const personal = this.state.personal;
    return (
      <div className="main-wrapper">
        <Inputs
          changeFirstName={(e) => {
            this.handleFirstNameInput(e);
          }}
          changeLastName={(e) => {
            this.handleLastNameInput(e);
          }}
        ></Inputs>
        <Preview personal={personal}></Preview>
      </div>
    );
  }
}
