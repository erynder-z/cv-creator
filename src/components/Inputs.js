import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Inputs extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="inputs ">
                <div className="personal-information-input">
                    <div>Personal Infomation</div>
                    <input
                        className="first-name-input"
                        type="text"
                        id="firstNameInput"
                        placeholder="first name"
                        onChange={(e) => {
                            this.props.changeFirstName(e)
                        }}
                    />
                    <input
                        className="last-name-input"
                        type="text"
                        id="lastNameInput"
                        placeholder="last name"
                        onChange={(e) => {
                            this.props.changeLastName(e)
                        }}
                    />
                    <input
                        className="title-input"
                        type="text"
                        id="titleInput"
                        placeholder="title"
                        onChange={(e) => {
                            this.props.changeTitle(e)
                        }}
                    />
                    <input
                        className="address-input"
                        type="text"
                        id="addressInput"
                        placeholder="address"
                        onChange={(e) => {
                            this.props.changeAddress(e)
                        }}
                    />
                    <input
                        className="phone-input"
                        type="phone"
                        id="phoneInput"
                        placeholder="phone"
                        onChange={(e) => {
                            this.props.changePhone(e)
                        }}
                    />
                    <input
                        className="email-input"
                        type="email"
                        id="emailInput"
                        placeholder="email"
                        onChange={(e) => {
                            this.props.changeEmail(e)
                        }}
                    />
                    <textarea
                        className="description-input"
                        type="text"
                        id="descriptionInput"
                        placeholder="description"
                        onChange={(e) => {
                            this.props.changeDescription(e)
                        }}
                    />
                    <label htmlFor="picture">Choose a profile picture:</label>
                    <input
                        type="file"
                        id="picture"
                        name="picture"
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                            this.props.uploadPic(e)
                        }}
                    ></input>
                </div>
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
                </div>
            </div>
        )
    }
}

Inputs.propTypes = {
    id: PropTypes.string,
    changeFirstName: PropTypes.func,
    changeLastName: PropTypes.func,
    changeTitle: PropTypes.func,
    changeAddress: PropTypes.func,
    changePhone: PropTypes.func,
    changeEmail: PropTypes.func,
    changeDescription: PropTypes.func,
    uploadPic: PropTypes.func,
    changePosition: PropTypes.func,
}
