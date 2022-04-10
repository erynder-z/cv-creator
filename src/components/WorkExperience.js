import React from 'react'
import PropTypes from 'prop-types'

export const WorkExperience = (props) => {
    const id = props.id
    let sectionItem
    if (props.sectionValues === undefined) {
        sectionItem = props.experience
    } else {
        sectionItem = props.sectionValues
    }

    const isHidden = props.isHidden
    const bottomItem = props.bottomItem

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
                        props.changePosition(e, id)
                    }}
                />
                <input
                    className="experience-company-input"
                    type="text"
                    id="companyInput"
                    placeholder="company"
                    value={sectionItem.company}
                    onChange={(e) => {
                        props.changeCompany(e, id)
                    }}
                />
                <input
                    className="experience-from-input"
                    type="text"
                    id="fromInput"
                    placeholder="from"
                    value={sectionItem.from}
                    onFocus={(e) => {
                        props.changeInputTypeIn(e, id)
                    }}
                    onBlur={(e) => {
                        props.changeInputTypeOut(e, id)
                    }}
                    onChange={(e) => {
                        props.changeCompanyFrom(e, id)
                    }}
                />
                <input
                    className="experience-to-input"
                    type="text"
                    id="toInput"
                    placeholder="to"
                    value={sectionItem.to}
                    onFocus={(e) => {
                        props.changeInputTypeIn(e, id)
                    }}
                    onBlur={(e) => {
                        props.changeInputTypeOut(e, id)
                    }}
                    onChange={(e) => {
                        props.changeCompanyTo(e, id)
                    }}
                />
                <div
                    className={isHidden ? 'hidden' : 'addSection'}
                    onClick={(e) => {
                        props.addInputFieldExperience(e, id)
                    }}
                >
                    Add experience section
                </div>
                <div
                    className={bottomItem ? 'hidden' : 'removeSection'}
                    onClick={(e) => {
                        props.removeInputFieldExperience(e, id)
                    }}
                >
                    Remove this section
                </div>
            </div>
        </div>
    )
}

WorkExperience.propTypes = {
    id: PropTypes.string,
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
