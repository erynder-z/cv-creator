import React from 'react'
import PropTypes from 'prop-types'

export const PersonalInfo = (props) => {
    const { personal } = props
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
                    props.changeFirstName(e)
                }}
            />
            <input
                className="last-name-input"
                type="text"
                id="lastNameInput"
                placeholder="last name"
                value={personal.lastName}
                onChange={(e) => {
                    props.changeLastName(e)
                }}
            />
            <input
                className="birthday-input"
                type="text"
                id="birthdayInput"
                placeholder="birthday"
                value={personal.birthday}
                onFocus={(e) => {
                    props.changeInputTypeIn(e)
                }}
                onBlur={(e) => {
                    props.changeInputTypeOut(e)
                }}
                onChange={(e) => {
                    props.changeDOB(e)
                }}
            />

            <input
                className="address-input"
                type="text"
                id="addressInput"
                placeholder="address"
                value={personal.address}
                onChange={(e) => {
                    props.changeAddress(e)
                }}
            />
            <input
                className="phone-input"
                type="phone"
                id="phoneInput"
                placeholder="phone"
                value={personal.phone}
                onChange={(e) => {
                    props.changePhone(e)
                }}
            />
            <input
                className="email-input"
                type="email"
                id="emailInput"
                placeholder="email"
                value={personal.email}
                onChange={(e) => {
                    props.changeEmail(e)
                }}
            />
            <input
                className="title-input"
                type="text"
                id="titleInput"
                placeholder="title"
                value={personal.title}
                onChange={(e) => {
                    props.changeTitle(e)
                }}
            />
            <textarea
                className="description-input"
                type="text"
                id="descriptionInput"
                placeholder="description"
                value={personal.description}
                onChange={(e) => {
                    props.changeDescription(e)
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
                    props.uploadPic(e)
                }}
            ></input>
        </div>
    )
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
