import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Education extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const id = this._reactInternals.key
        let sectionItem
        if (this.props.sectionValues === undefined) {
            sectionItem = this.props.education
        } else {
            sectionItem = this.props.sectionValues
        }

        const isHidden = this.props.isHidden
        const bottomItem = this.props.bottomItem

        return (
            <div className="inputs ">
                <div className="education-input">
                    <div className="input-section-title">Education</div>
                    <input
                        className="education-institution-input"
                        type="text"
                        id="institutionInput"
                        placeholder="institution"
                        value={sectionItem.institution}
                        onChange={(e) => {
                            this.props.changeInstitution(e, id)
                        }}
                    />
                    <input
                        className="education-city-input"
                        type="text"
                        id="eduCityInput"
                        placeholder="city"
                        value={sectionItem.city}
                        onChange={(e) => {
                            this.props.changeCity(e, id)
                        }}
                    />
                    <input
                        className="education-degree-input"
                        type="text"
                        id="eduDegreeInput"
                        placeholder="degree"
                        value={sectionItem.degree}
                        onChange={(e) => {
                            this.props.changeDegree(e, id)
                        }}
                    />
                    <input
                        className="education-major-input"
                        type="text"
                        id="eduMajorInput"
                        placeholder="major"
                        value={sectionItem.major}
                        onChange={(e) => {
                            this.props.changeMajor(e, id)
                        }}
                    />
                    <input
                        className="education-from-input"
                        type="text"
                        id="eduFromInput"
                        placeholder="from"
                        value={sectionItem.from}
                        onFocus={(e) => {
                            this.props.changeInputTypeIn(e, id)
                        }}
                        onBlur={(e) => {
                            this.props.changeInputTypeOut(e, id)
                        }}
                        onChange={(e) => {
                            this.props.changeEducationFrom(e, id)
                        }}
                    />
                    <input
                        className="education-to-input"
                        type="text"
                        id="eduToInput"
                        placeholder="to"
                        value={sectionItem.to}
                        onFocus={(e) => {
                            this.props.changeInputTypeIn(e, id)
                        }}
                        onBlur={(e) => {
                            this.props.changeInputTypeOut(e, id)
                        }}
                        onChange={(e) => {
                            this.props.changeEducationTo(e, id)
                        }}
                    />
                    <div
                        className={isHidden ? 'hidden' : 'addSection'}
                        onClick={(e) => {
                            this.props.addInputFieldEducation(e, id)
                        }}
                    >
                        Add section
                    </div>
                    <div
                        className={bottomItem ? 'hidden' : 'removeSection'}
                        onClick={(e) => {
                            this.props.removeInputFieldEducation(e, id)
                        }}
                    >
                        Remove section
                    </div>
                </div>
            </div>
        )
    }
}

Education.propTypes = {
    changeInstitution: PropTypes.func,
    changeCity: PropTypes.func,
    changeDegree: PropTypes.func,
    changeMajor: PropTypes.func,
    changeInputTypeIn: PropTypes.func,
    changeInputTypeOut: PropTypes.func,
    changeEducationFrom: PropTypes.func,
    changeEducationTo: PropTypes.func,
    addInputFieldEducation: PropTypes.func,
    educations: PropTypes.array,
    education: PropTypes.object,
    addElement: PropTypes.func,
    itemValues: PropTypes.object,
    sectionValues: PropTypes.object,
    isHidden: PropTypes.bool,
    bottomItem: PropTypes.bool,
    removeInputFieldEducation: PropTypes.func,
}
