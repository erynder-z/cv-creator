import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PersonalInfoSidePreview } from './PersonalInfoSidePreview'
import { WorkExperiencePreview } from './WorkExperiencePreview'
import { EducationPreview } from './EducationPreview'
import { SkillsPreview } from './SkillsPreview'

export class Preview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { personal } = this.props

        return (
            <div className="preview ">
                <div className="personal-information-preview-top">
                    <div className="first-name-preview">
                        {personal.firstName}&nbsp;
                    </div>
                    <div className="last-name-preview">{personal.lastName}</div>
                </div>

                <PersonalInfoSidePreview
                    {...this.props}
                ></PersonalInfoSidePreview>

                <div className="info-preview">
                    <div className="personal-preview">{personal.title}</div>
                    <h5>Description:</h5>
                    <div className="personal-preview">
                        {personal.description}
                    </div>

                    <div className="work-preview">
                        <WorkExperiencePreview
                            key={this.props.experience.id}
                            id={this.props.experience.id}
                            position={this.props.experience.position}
                            company={this.props.experience.company}
                            from={this.props.experience.from}
                            to={this.props.experience.to}
                            {...this.props}
                        ></WorkExperiencePreview>
                    </div>

                    <div className="edu-preview">
                        <EducationPreview
                            key={this.props.education.id}
                            id={this.props.education.id}
                            institution={this.props.education.institution}
                            city={this.props.education.city}
                            degree={this.props.education.degree}
                            major={this.props.education.major}
                            from={this.props.education.from}
                            to={this.props.education.to}
                            {...this.props}
                        ></EducationPreview>
                    </div>

                    <div className="skills-preview">
                        <SkillsPreview
                            key={this.props.skill.id}
                            id={this.props.skill.id}
                            name={this.props.skill.name}
                            {...this.props}
                        ></SkillsPreview>
                    </div>
                </div>
            </div>
        )
    }
}

Preview.propTypes = {
    personal: PropTypes.object,
    experience: PropTypes.object,
    experiences: PropTypes.array,
    education: PropTypes.object,
    educations: PropTypes.array,
    skill: PropTypes.object,
    skills: PropTypes.array,
}
