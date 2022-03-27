import React, { Component } from 'react';
import { Inputs } from './Inputs';
import { Preview } from './Preview';

export class Main extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    /*  return <div className="main ">main</div>; */
    return (
      <div className="main-wrapper">
        <Inputs></Inputs>
        <Preview></Preview>
      </div>
    );
  }
}
