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
                <ul>
                    {this.props.skills.map((item) => {
                        return (
                            <li key={item.id} className="skill-preview">
                                {item.name}
                            </li>
                        )
                    })}
                    <li className="skill-preview">{skill.name}</li>
                </ul>
            </div>
        )
    }
}

SkillsPreview.propTypes = {
    name: PropTypes.string,
    skills: PropTypes.array,
}
