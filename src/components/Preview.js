import React from 'react'
import PropTypes from 'prop-types'
import { PersonalInfoSidePreview } from './PersonalInfoSidePreview'
import { WorkExperiencePreview } from './WorkExperiencePreview'
import { EducationPreview } from './EducationPreview'
import { SkillsPreview } from './SkillsPreview'

export const Preview = React.forwardRef((props, ref) => {
    const { personal } = props

    return (
        <div ref={ref} className="preview ">
            <div className="personal-information-preview-top">
                <div className="first-name-preview">
                    {personal.firstName}&nbsp;
                </div>
                <div className="last-name-preview">{personal.lastName}</div>
            </div>

            <PersonalInfoSidePreview {...props}></PersonalInfoSidePreview>

            <div className="info-preview">
                <div className="personal-preview-title">{personal.title}</div>
                <h5>About me:</h5>
                <div className="personal-preview">{personal.description}</div>

                <div className="work-preview">
                    <WorkExperiencePreview
                        key={props.experience.id}
                        id={props.experience.id}
                        position={props.experience.position}
                        company={props.experience.company}
                        from={props.experience.from}
                        to={props.experience.to}
                        {...props}
                    ></WorkExperiencePreview>
                </div>

                <div className="edu-preview">
                    <EducationPreview
                        key={props.education.id}
                        id={props.education.id}
                        institution={props.education.institution}
                        city={props.education.city}
                        degree={props.education.degree}
                        major={props.education.major}
                        from={props.education.from}
                        to={props.education.to}
                        {...props}
                    ></EducationPreview>
                </div>

                <div className="skills-preview">
                    <SkillsPreview
                        key={props.skill.id}
                        id={props.skill.id}
                        name={props.skill.name}
                        {...props}
                    ></SkillsPreview>
                </div>
            </div>
        </div>
    )
})

Preview.displayName = 'Preview'

Preview.propTypes = {
    personal: PropTypes.object,
    experience: PropTypes.object,
    experiences: PropTypes.array,
    education: PropTypes.object,
    educations: PropTypes.array,
    skill: PropTypes.object,
    skills: PropTypes.array,
}
