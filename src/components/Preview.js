import React, { Component } from 'react'

export class Preview extends Component {
    constructor(props) {
        super()
    }
    render() {
        const { personal } = this.props
        return (
            <div className="preview ">
                <div className="personal-information-preview-top">
                    <div className="first-name-preview">
                        {personal.firstName}&nbsp;
                    </div>
                    <div className="last-name-preview">{personal.lastName}</div>
                </div>

                <div className="personal-information-preview-side">
                    Personal Info
                </div>
                <div className="info-wrapper-preview">
                    <div className="title-preview">{personal.title}</div>
                </div>
            </div>
        )
    }
}
