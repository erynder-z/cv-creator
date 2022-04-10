import React from 'react'
import PropTypes from 'prop-types'

export const Education = (props) => {
    const id = props.id
    let sectionItem
    if (props.sectionValues === undefined) {
        sectionItem = props.education
    } else {
        sectionItem = props.sectionValues
    }

    const isHidden = props.isHidden
    const bottomItem = props.bottomItem

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
                        props.changeInstitution(e, id)
                    }}
                />
                <input
                    className="education-city-input"
                    type="text"
                    id="eduCityInput"
                    placeholder="city"
                    value={sectionItem.city}
                    onChange={(e) => {
                        props.changeCity(e, id)
                    }}
                />
                <input
                    className="education-degree-input"
                    type="text"
                    id="eduDegreeInput"
                    placeholder="degree"
                    value={sectionItem.degree}
                    onChange={(e) => {
                        props.changeDegree(e, id)
                    }}
                />
                <input
                    className="education-major-input"
                    type="text"
                    id="eduMajorInput"
                    placeholder="major"
                    value={sectionItem.major}
                    onChange={(e) => {
                        props.changeMajor(e, id)
                    }}
                />
                <input
                    className="education-from-input"
                    type="text"
                    id="eduFromInput"
                    placeholder="from"
                    value={sectionItem.from}
                    onFocus={(e) => {
                        props.changeInputTypeIn(e, id)
                    }}
                    onBlur={(e) => {
                        props.changeInputTypeOut(e, id)
                    }}
                    onChange={(e) => {
                        props.changeEducationFrom(e, id)
                    }}
                />
                <input
                    className="education-to-input"
                    type="text"
                    id="eduToInput"
                    placeholder="to"
                    value={sectionItem.to}
                    onFocus={(e) => {
                        props.changeInputTypeIn(e, id)
                    }}
                    onBlur={(e) => {
                        props.changeInputTypeOut(e, id)
                    }}
                    onChange={(e) => {
                        props.changeEducationTo(e, id)
                    }}
                />
                <div
                    className={isHidden ? 'hidden' : 'addSection'}
                    onClick={(e) => {
                        props.addInputFieldEducation(e, id)
                    }}
                >
                    Add education section
                </div>
                <div
                    className={bottomItem ? 'hidden' : 'removeSection'}
                    onClick={(e) => {
                        props.removeInputFieldEducation(e, id)
                    }}
                >
                    Remove this section
                </div>
            </div>
        </div>
    )
}

Education.propTypes = {
    id: PropTypes.string,
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
