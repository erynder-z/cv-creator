import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PersonalInfo } from './PersonalInfo'
import { WorkExperience } from './WorkExperience'
import { Education } from './Education'
import { FormOptions } from './FormOptions'

export class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const additionalExperienceItems = this.props.experiences
        const additionalEducationItems = this.props.educations
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

                {additionalEducationItems.map((item) => {
                    return (
                        <Education
                            key={item.id}
                            sectionValues={item}
                            isHidden={true}
                            {...this.props}
                        ></Education>
                    )
                })}
                <Education
                    key={this.props.education.id}
                    bottomItem={true}
                    {...this.props}
                ></Education>
                <FormOptions {...this.props}></FormOptions>
            </div>
        )
    }
}

Inputs.propTypes = {
    experiences: PropTypes.array,
    experience: PropTypes.object,
    educations: PropTypes.array,
    education: PropTypes.object,
}
