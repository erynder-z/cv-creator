import React, { Component } from 'react'

import { PersonalInfo } from './PersonalInfo'
import { WorkExperience } from './WorkExperience'

export class Inputs extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="inputs ">
                <PersonalInfo></PersonalInfo>
                <WorkExperience></WorkExperience>
            </div>
        )
    }
}
