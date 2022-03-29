import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WorkExperiencePreview } from './WorkExperiencePreview'

export class Preview extends Component {
    constructor() {
        super()
    }
    render() {
        const { personal } = this.props
        const additionalExperienceItems = this.props.experiences
        console.log(additionalExperienceItems)
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
                        <WorkExperiencePreview
                            {...this.props}
                        ></WorkExperiencePreview>

                        {additionalExperienceItems.map((item) => {
                            return (
                                <WorkExperiencePreview
                                    key={item.id}
                                    {...this.props}
                                ></WorkExperiencePreview>
                            )
                        })}
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
}
