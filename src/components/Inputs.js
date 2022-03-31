import React, { Component } from 'react'
/* import uniqid from 'uniqid' */
import PropTypes from 'prop-types'
import { PersonalInfo } from './PersonalInfo'
import { WorkExperience } from './WorkExperience'

export class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const additionalExperienceItems = this.props.experiences
        return (
            <div className="inputs ">
                <PersonalInfo {...this.props}></PersonalInfo>

                {additionalExperienceItems.map((item) => {
                    return (
                        <WorkExperience
                            key={item.id}
                            sectionValues={item}
                            isHidden={true}
                            {...this.props}
                        ></WorkExperience>
                    )
                })}
                <WorkExperience
                    key={this.props.experience.id}
                    bottomItem={true}
                    {...this.props}
                ></WorkExperience>
            </div>
        )
    }
}

Inputs.propTypes = {
    experiences: PropTypes.array,
    experience: PropTypes.object,
}
