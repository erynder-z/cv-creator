import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PersonalInfoSidePreview extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const personal = this.props.personal

        return (
            <div className="personal-information-preview-side">
                <div className="picture">
                    <img src={personal.picture} alt="Test" />
                </div>
                <h4>Personal Info</h4>
                <div className="personal-preview">
                    <h5>Date of birth:</h5>
                    {personal.birthday}
                </div>
                <div className="personal-preview">
                    <h5>Address:</h5>
                    {personal.address}
                </div>
                <div className="personal-preview">
                    <h5>Phone:</h5>
                    {personal.phone}
                </div>
                <div className="personal-preview">
                    <h5>Email:</h5>
                    {personal.email}
                </div>
            </div>
        )
    }
}

PersonalInfoSidePreview.propTypes = {
    personal: PropTypes.object,
    picture: PropTypes.string,
    birthday: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
}
