import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SkillsPreview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const skill = this.props
        return (
            <div className="skills-wrapper">
                <h4>Skills</h4>
                {this.props.skills.map((item) => {
                    return (
                        <div key={item.id} className="skill-preview">
                            {item.name}
                        </div>
                    )
                })}
                <div className="skill-preview">{skill.name}</div>
            </div>
        )
    }
}

SkillsPreview.propTypes = {
    name: PropTypes.string,
    skills: PropTypes.array,
}
