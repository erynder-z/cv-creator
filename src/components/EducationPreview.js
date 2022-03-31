import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class EducationPreview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="education-wrapper">
                <h4>Education</h4>
                <h5>Institution</h5>
                <div className="title-preview">{this.props.institution}</div>
                <h5>City</h5>
                <div className="title-preview">{this.props.city}</div>
                <h5>Degree</h5>
                <div className="title-preview">{this.props.degree}</div>
                <h5>Major</h5>
                <div className="title-preview">{this.props.major}</div>
                <h5>From</h5>
                <div className="title-preview">{this.props.from}</div>
                <h5>To</h5>
                <div className="title-preview">{this.props.to}</div>
            </div>
        )
    }
}

EducationPreview.propTypes = {
    education: PropTypes.object,
    educations: PropTypes.array,
    institution: PropTypes.string,
    city: PropTypes.string,
    degree: PropTypes.string,
    major: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
}
