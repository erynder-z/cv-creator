import React from 'react'
import PropTypes from 'prop-types'

export const PersonalInfoSidePreview = (props) => {
    const personal = props.personal

    return (
        <div className="personal-information-preview-side">
            <div className="picture">
                <img src={personal.picture} alt="Test" />
            </div>
            <h4>Personal Info</h4>
            <div className="personal-preview">
                <h5>Date of birth:</h5>
                <div className="preview-item">{personal.birthday}</div>
            </div>
            <div className="personal-preview">
                <h5>Address:</h5>
                <div className="preview-item">{personal.address}</div>
            </div>
            <div className="personal-preview">
                <h5>Phone:</h5>
                <div className="preview-item">{personal.phone}</div>
            </div>
            <div className="personal-preview">
                <h5>Email:</h5>
                <div className="preview-item">{personal.email}</div>
            </div>
        </div>
    )
}

PersonalInfoSidePreview.propTypes = {
    personal: PropTypes.object,
    picture: PropTypes.string,
    birthday: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
}
