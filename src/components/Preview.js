import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WorkExperiencePreview } from './WorkExperiencePreview'
import { EducationPreview } from './EducationPreview'

export class Preview extends Component {
    constructor() {
        super()
    }
    render() {
        const { personal } = this.props
        /* const additionalExperienceItems = this.props.experiences */
        return (
            <div className="preview ">
                <div className="personal-information-preview-top">
                    <div className="first-name-preview">
                        {personal.firstName}&nbsp;
                    </div>
                    <div className="last-name-preview">{personal.lastName}</div>
                </div>

                <div className="personal-information-preview-side">
                    <div className="picture">
                        <img src={personal.picture} alt="Test" />
                    </div>
                    <h4>Personal Info</h4>
                    <div className="title-preview">
                        <h5>Date of birth:</h5>
                        {personal.birthday}
                    </div>
                    <div className="title-preview">
                        <h5>Address:</h5>
                        {personal.address}
                    </div>
                    <div className="title-preview">
                        <h5>Phone:</h5>
                        {personal.phone}
                    </div>
                    <div className="title-preview">
                        <h5>Email:</h5>
                        {personal.email}
                    </div>
                </div>

                <div className="info-preview">
                    <div className="title-preview">{personal.title}</div>
                    <h5>Description:</h5>
                    <div className="title-preview">{personal.description}</div>

                    <div className="work-preview">
                        {this.props.experiences.map((item) => {
                            return (
                                <WorkExperiencePreview
                                    key={item.id}
                                    id={item.id}
                                    position={item.position}
                                    company={item.company}
                                    from={item.from}
                                    to={item.to}
                                ></WorkExperiencePreview>
                            )
                        })}
                        {/*   {additionalExperienceItems.map((item) => {
                            return (
                                <WorkExperiencePreview
                                    key={item.id}
                                    {...this.props}
                                ></WorkExperiencePreview>
                            )
                        })} */}
                        <WorkExperiencePreview
                            key={this.props.experience.id}
                            /* {...this.props} */
                            id={this.props.experience.id}
                            position={this.props.experience.position}
                            company={this.props.experience.company}
                            from={this.props.experience.from}
                            to={this.props.experience.to}
                        ></WorkExperiencePreview>
                    </div>

                    <div className="education-preview">
                        {this.props.educations.map((item) => {
                            return (
                                <EducationPreview
                                    key={item.id}
                                    id={item.id}
                                    institution={item.institution}
                                    city={item.city}
                                    degree={item.degree}
                                    major={item.major}
                                    from={item.from}
                                    to={item.to}
                                ></EducationPreview>
                            )
                        })}
                        <EducationPreview
                            key={this.props.education.id}
                            id={this.props.education.id}
                            institution={this.props.education.institution}
                            city={this.props.education.city}
                            degree={this.props.education.degree}
                            major={this.props.education.major}
                            from={this.props.education.from}
                            to={this.props.education.to}
                        ></EducationPreview>
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
}
