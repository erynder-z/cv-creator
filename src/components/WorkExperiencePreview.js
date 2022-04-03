import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WorkExperiencePreview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const experience = this.props
        return (
            <div className="experience-wrapper">
                <h4>Experience</h4>

                {this.props.experiences.map((item) => {
                    return (
                        <div key={item.id} className="experience-preview">
                            <div className="fromto-wrapper">
                                <h5>From</h5>
                                <h5> </h5>
                                <h5>To</h5>
                                <div className="preview-item">{item.from}</div>
                                <div>-</div>
                                <div className="preview-item">{item.to}</div>
                            </div>
                            <div className="item-wrapper">
                                <h5>Company</h5>
                                <div className="preview-item">
                                    {item.company}
                                </div>
                                <h5>Position</h5>
                                <div className="preview-item">
                                    {item.position}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="experience-preview">
                    <div className="fromto-wrapper">
                        <h5>From</h5>
                        <h5> </h5>
                        <h5>To</h5>
                        <div className="preview-item">{experience.from}</div>
                        <div>-</div>
                        <div className="preview-item">{experience.to}</div>
                    </div>
                    <div className="item-wrapper">
                        <h5>Company</h5>
                        <div className="preview-item">{experience.company}</div>
                        <h5>Position</h5>
                        <div className="preview-item">
                            {experience.position}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

WorkExperiencePreview.propTypes = {
    experience: PropTypes.object,
    experiences: PropTypes.array,
    position: PropTypes.string,
    company: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
}
