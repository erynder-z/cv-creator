import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WorkExperience extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const id = this._reactInternals.key
        let sectionItem
        if (this.props.sectionValues === undefined) {
            sectionItem = this.props.experience
        } else {
            sectionItem = this.props.sectionValues
        }

        const isHidden = this.props.isHidden
        const bottomItem = this.props.bottomItem

        return (
            <div className="inputs ">
                <div className="experience-input">
                    <div className="input-section-title">Experience</div>
                    <input
                        className="experience-position-input"
                        type="text"
                        id="positionInput"
                        placeholder="position"
                        value={sectionItem.position}
                        onChange={(e) => {
                            this.props.changePosition(e, id)
                        }}
                    />
                    <input
                        className="experience-company-input"
                        type="text"
                        id="companyInput"
                        placeholder="company"
                        value={sectionItem.company}
                        onChange={(e) => {
                            this.props.changeCompany(e, id)
                        }}
                    />
                    <input
                        className="experience-from-input"
                        type="text"
                        id="fromInput"
                        placeholder="from"
                        value={sectionItem.from}
                        onFocus={(e) => {
                            this.props.changeInputTypeIn(e, id)
                        }}
                        onBlur={(e) => {
                            this.props.changeInputTypeOut(e, id)
                        }}
                        onChange={(e) => {
                            this.props.changeCompanyFrom(e, id)
                        }}
                    />
                    <input
                        className="experience-to-input"
                        type="text"
                        id="toInput"
                        placeholder="to"
                        value={sectionItem.to}
                        onFocus={(e) => {
                            this.props.changeInputTypeIn(e, id)
                        }}
                        onBlur={(e) => {
                            this.props.changeInputTypeOut(e, id)
                        }}
                        onChange={(e) => {
                            this.props.changeCompanyTo(e, id)
                        }}
                    />
                    <div
                        className={isHidden ? 'hidden' : 'addSection'}
                        onClick={(e) => {
                            this.props.addInputFieldExperience(e, id)
                        }}
                    >
                        Add another experience
                    </div>
                    <div
                        className={bottomItem ? 'hidden' : 'removeSection'}
                        onClick={(e) => {
                            this.props.removeInputFieldExperience(e, id)
                        }}
                    >
                        Remove this section
                    </div>
                </div>
            </div>
        )
    }
}

WorkExperience.propTypes = {
    changePosition: PropTypes.func,
    changeCompany: PropTypes.func,
    changeInputTypeIn: PropTypes.func,
    changeInputTypeOut: PropTypes.func,
    changeCompanyFrom: PropTypes.func,
    changeCompanyTo: PropTypes.func,
    addInputFieldExperience: PropTypes.func,
    experiences: PropTypes.array,
    experience: PropTypes.object,
    addElement: PropTypes.func,
    itemValues: PropTypes.object,
    sectionValues: PropTypes.object,
    isHidden: PropTypes.bool,
    bottomItem: PropTypes.bool,
    removeInputFieldExperience: PropTypes.func,
}
