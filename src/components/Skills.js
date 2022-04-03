import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="skills ">
                <div className="skills-input">
                    <div className="input-section-title">Skills</div>

                    {this.props.skills.map((item) => {
                        return (
                            <input
                                key={item.id}
                                className="skill-input"
                                type="text"
                                id="positionInput"
                                placeholder="input skill"
                                value={item.name}
                                onChange={(e) => {
                                    this.props.changeSkill(e, item.id)
                                }}
                            />
                        )
                    })}
                    <input
                        className="skill-input"
                        type="text"
                        id="positionInput"
                        placeholder="input skill"
                        onChange={(e) => {
                            this.props.changeSkill(e, this.props.skill.id)
                        }}
                    />
                    <div
                        className={'add-skill-button'}
                        onClick={(e) => {
                            this.props.addSkill(e)
                        }}
                    >
                        Add skill
                    </div>
                </div>
            </div>
        )
    }
}

Skills.propTypes = {
    getSample: PropTypes.func,
    resetData: PropTypes.func,
    changeSkill: PropTypes.func,
    addSkill: PropTypes.func,
    skill: PropTypes.object,
    skills: PropTypes.array,
}
