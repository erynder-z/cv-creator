import React from 'react'
import PropTypes from 'prop-types'
import { PersonalInfo } from './PersonalInfo'
import { WorkExperience } from './WorkExperience'
import { Education } from './Education'
import { Skills } from './Skills'
import { FormOptions } from './FormOptions'

export const Inputs = (props) => {
    const additionalExperienceItems = props.experiences
    const additionalEducationItems = props.educations

    return (
        <div className="inputs ">
            <PersonalInfo {...props}></PersonalInfo>

            {additionalExperienceItems.map((item) => {
                return (
                    <WorkExperience
                        key={item.id}
                        id={item.id}
                        sectionValues={item}
                        isHidden={true}
                        {...props}
                    ></WorkExperience>
                )
            })}
            <WorkExperience
                key={props.experience.id}
                id={props.experience.id}
                bottomItem={true}
                {...props}
            ></WorkExperience>

            {additionalEducationItems.map((item) => {
                return (
                    <Education
                        key={item.id}
                        id={item.id}
                        sectionValues={item}
                        isHidden={true}
                        {...props}
                    ></Education>
                )
            })}
            <Education
                key={props.education.id}
                id={props.education.id}
                bottomItem={true}
                {...props}
            ></Education>

            <Skills key={props.skill.id} bottomItem={true} {...props}></Skills>
            <FormOptions {...props}></FormOptions>
        </div>
    )
}

Inputs.propTypes = {
    experiences: PropTypes.array,
    experience: PropTypes.object,
    educations: PropTypes.array,
    education: PropTypes.object,
    skill: PropTypes.object,
    skills: PropTypes.array,
}
