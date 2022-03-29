import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WorkExperiencePreview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { experience } = this.props
        return (
            <div className="info-wrapper-preview">
                <h4>Experience</h4>
                <h5>Position</h5>
                {<div className="title-preview">{experience.position}</div>}
                <h5>Company</h5>
                {<div className="title-preview">{experience.company}</div>}
                <h5>From</h5>
                {<div className="title-preview">{experience.to}</div>}
                <h5>To</h5>
                {<div className="title-preview">{experience.from}</div>}
            </div>
        )
    }
}

WorkExperiencePreview.propTypes = {
    experience: PropTypes.object,
}
