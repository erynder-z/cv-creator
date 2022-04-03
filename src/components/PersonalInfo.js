import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PersonalInfo extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const { personal } = this.props
        return (
            <div className="personal-information-input">
                <div className="input-section-title">Personal Infomation</div>
                <input
                    className="first-name-input"
                    type="text"
                    id="firstNameInput"
                    placeholder="first name"
                    value={personal.firstName}
                    onChange={(e) => {
                        this.props.changeFirstName(e)
                    }}
                />
                <input
                    className="last-name-input"
                    type="text"
                    id="lastNameInput"
                    placeholder="last name"
                    value={personal.lastName}
                    onChange={(e) => {
                        this.props.changeLastName(e)
                    }}
                />
                <input
                    className="birthday-input"
                    type="text"
                    id="birthdayInput"
                    placeholder="birthday"
                    value={personal.birthday}
                    onFocus={(e) => {
                        this.props.changeInputTypeIn(e)
                    }}
                    onBlur={(e) => {
                        this.props.changeInputTypeOut(e)
                    }}
                    onChange={(e) => {
                        this.props.changeDOB(e)
                    }}
                />

                <input
                    className="address-input"
                    type="text"
                    id="addressInput"
                    placeholder="address"
                    value={personal.address}
                    onChange={(e) => {
                        this.props.changeAddress(e)
                    }}
                />
                <input
                    className="phone-input"
                    type="phone"
                    id="phoneInput"
                    placeholder="phone"
                    value={personal.phone}
                    onChange={(e) => {
                        this.props.changePhone(e)
                    }}
                />
                <input
                    className="email-input"
                    type="email"
                    id="emailInput"
                    placeholder="email"
                    value={personal.email}
                    onChange={(e) => {
                        this.props.changeEmail(e)
                    }}
                />
                <input
                    className="title-input"
                    type="text"
                    id="titleInput"
                    placeholder="title"
                    value={personal.title}
                    onChange={(e) => {
                        this.props.changeTitle(e)
                    }}
                />
                <textarea
                    className="description-input"
                    type="text"
                    id="descriptionInput"
                    placeholder="description"
                    value={personal.description}
                    onChange={(e) => {
                        this.props.changeDescription(e)
                    }}
                />
                <label htmlFor="picture" className="custom-file-upload-label">
                    Change picture
                </label>
                <input
                    className="custom-file-upload"
                    type="file"
                    id="picture"
                    name="picture"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                        this.props.uploadPic(e)
                    }}
                ></input>
            </div>
        )
    }
}

PersonalInfo.propTypes = {
    id: PropTypes.string,
    changeFirstName: PropTypes.func,
    changeLastName: PropTypes.func,
    changeDOB: PropTypes.func,
    changeTitle: PropTypes.func,
    changeAddress: PropTypes.func,
    changePhone: PropTypes.func,
    changeEmail: PropTypes.func,
    changeDescription: PropTypes.func,
    uploadPic: PropTypes.func,
    changeInputTypeIn: PropTypes.func,
    changeInputTypeOut: PropTypes.func,
    personal: PropTypes.object,
}
