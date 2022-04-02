import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class EducationPreview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const education = this.props
        return (
            <div className="education-wrapper">
                <h4>Education</h4>

                {this.props.educations.map((item) => {
                    return (
                        <div key={item.id} className="education-preview">
                            <h5>Institution</h5>
                            <div className="preview-item">
                                {item.institution}
                            </div>
                            <h5>City</h5>
                            <div className="preview-item">{item.city}</div>
                            <h5>Degree</h5>
                            <div className="preview-item">{item.degree}</div>
                            <h5>Major</h5>
                            <div className="preview-item">{item.major}</div>
                            <h5>From</h5>
                            <div className="preview-item">{item.from}</div>
                            <h5>To</h5>
                            <div className="preview-item">{item.to}</div>
                        </div>
                    )
                })}
                <div className="education-preview">
                    <h5>Institution</h5>
                    <div className="preview-item">{education.institution}</div>
                    <h5>City</h5>
                    <div className="preview-itemw">{education.city}</div>
                    <h5>Degree</h5>
                    <div className="preview-itemw">{education.degree}</div>
                    <h5>Major</h5>
                    <div className="preview-item">{education.major}</div>
                    <h5>From</h5>
                    <div className="preview-item">{education.from}</div>
                    <h5>To</h5>
                    <div className="preview-item">{education.to}</div>
                </div>
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
