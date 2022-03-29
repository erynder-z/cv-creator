import React, { Component } from 'react'

import { PersonalInfo } from './PersonalInfo'
import { WorkExperience } from './WorkExperience'

export class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="inputs ">
                <PersonalInfo {...this.props}></PersonalInfo>
                <WorkExperience {...this.props}></WorkExperience>
            </div>
        )
    }
}
