import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class WorkExperience extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="inputs ">
                <div className="experience-input">
                    <div>Experience</div>
                    <input
                        className="experience-position-input"
                        type="text"
                        id="positionInput"
                        placeholder="position"
                        onChange={(e) => {
                            this.props.changePosition(e)
                        }}
                    />
                    <input
                        className="experience-company-input"
                        type="text"
                        id="companyInput"
                        placeholder="company"
                        onChange={(e) => {
                            this.props.changeCompany(e)
                        }}
                    />
                    <input
                        className="experience-from-input"
                        type="text"
                        id="fromInput"
                        placeholder="from"
                        onFocus={(e) => {
                            this.props.changeInputTypeIn(e)
                        }}
                        onBlur={(e) => {
                            this.props.changeInputTypeOut(e)
                        }}
                        onChange={(e) => {
                            this.props.changeCompanyFrom(e)
                        }}
                    />
                    <input
                        className="experience-to-input"
                        type="text"
                        id="toInput"
                        placeholder="to"
                        onFocus={(e) => {
                            this.props.changeInputTypeIn(e)
                        }}
                        onBlur={(e) => {
                            this.props.changeInputTypeOut(e)
                        }}
                        onChange={(e) => {
                            this.props.changeCompanyTo(e)
                        }}
                    />
                    <div
                        className="addSection"
                        onClick={(e) => {
                            this.props.addInputFieldExperience(e)
                        }}
                    >
                        Add section
                    </div>
                    <div className="removeSection">Remove section</div>
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
    addElement: PropTypes.func,
}
