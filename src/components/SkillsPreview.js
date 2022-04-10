import React from 'react'
import PropTypes from 'prop-types'

export const SkillsPreview = (props) => {
    const skill = props
    return (
        <div className="skills-wrapper">
            <h4>Skills</h4>
            <ul>
                {props.skills.map((item) => {
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

SkillsPreview.propTypes = {
    name: PropTypes.string,
    skills: PropTypes.array,
}
