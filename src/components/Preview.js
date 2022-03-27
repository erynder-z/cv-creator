import React, { Component } from 'react'
import placeholder from '../assets/placeholder.png'

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
                    <div className="picture">
                        <img src={placeholder} alt="" />
                    </div>
                    <h4>Personal Info</h4>
                    <div className="title-preview">
                        <h5>Address:</h5>
                        {personal.address}
                    </div>
                    <div className="title-preview">
                        <h5>Phone:</h5>
                        {personal.phone}
                    </div>
                    <div className="title-preview">
                        <h5>Email:</h5>
                        {personal.email}
                    </div>
                </div>

                <div className="info-wrapper-preview">
                    <div className="title-preview">{personal.title}</div>
                </div>
            </div>
        )
    }
}
