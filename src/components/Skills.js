import React from 'react'
import PropTypes from 'prop-types'

export const Skills = (props) => {
    return (
        <div className="skills ">
            <div className="skills-input">
                <div className="input-section-title">Skills</div>

                {props.skills.map((item) => {
                    return (
                        <input
                            key={item.id}
                            className="skill-input"
                            type="text"
                            id="positionInput"
                            placeholder="input skill"
                            value={item.name}
                            onChange={(e) => {
                                props.changeSkill(e, item.id)
                            }}
                        />
                    )
                })}
                <input
                    className="skill-input"
                    type="text"
                    id="positionInput"
                    placeholder="input skill"
                    value={props.skill.name}
                    onChange={(e) => {
                        props.changeSkill(e, props.skill.id)
                    }}
                />
                <div
                    className={'add-skill-button'}
                    onClick={(e) => {
                        props.addSkill(e)
                    }}
                >
                    Add skill
                </div>
            </div>
        </div>
    )
}

Skills.propTypes = {
    getSample: PropTypes.func,
    resetData: PropTypes.func,
    changeSkill: PropTypes.func,
    addSkill: PropTypes.func,
    skill: PropTypes.object,
    skills: PropTypes.array,
}
