import React, { Component } from 'react'
import uniqid from 'uniqid'
import { Inputs } from './Inputs'
import { Preview } from './Preview'
import placeholder from '../assets/placeholder.png'
import PropTypes from 'prop-types'

export class Main extends Component {
    constructor() {
        super()
        this.state = {
            personal: {
                id: uniqid(),
                firstName: '',
                lastName: '',
                birthday: '',
                title: '',
                address: '',
                phone: '',
                email: '',
                description: '',
                picture: placeholder,
            },
            experience: {
                id: uniqid(),
                position: '',
                company: '',
                from: '',
                to: '',
            },
            experiences: [],
        }
    }

    handleInput(e, target) {
        let key = `${target}`
        this.setState((prevState) => ({
            personal: {
                ...prevState.personal,
                [key]: e.target.value,
                id: this.state.personal.id,
            },
        }))
    }

    /*     handleFirstNameInput(e) {
        this.setState((prevState) => ({
            personal: {
                ...prevState.personal,
                firstName: e.target.value,
                id: this.state.personal.id,
            },
        }))
    } */

    handleInputExperience(e, target) {
        let key = `${target}`
        this.setState((prevState) => ({
            experience: {
                ...prevState.experience,
                [key]: e.target.value,
                id: this.state.experience.id,
            },
        }))
    }

    changeInputToDate(e) {
        e.target.type = 'date'
    }

    changeInputToText(e) {
        e.target.type = 'text'
    }

    uploadPicture(e) {
        let file = e.target.files[0]
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        let reader = new FileReader()

        if (e.target.files.length === 0) {
            return
        }

        reader.onloadend = () => {
            this.setState((prevState) => ({
                personal: {
                    ...prevState.personal,
                    picture: [reader.result],
                    id: this.state.personal.id,
                },
            }))
        }
        reader.readAsDataURL(file)
    }

    render() {
        const personal = this.state.personal
        const experience = this.state.experience
        return (
            <div className="main-wrapper">
                <Inputs
                    changeFirstName={(e) => {
                        this.handleInput(e, 'firstName')
                    }}
                    changeLastName={(e) => {
                        this.handleInput(e, 'lastName')
                    }}
                    changeDOB={(e) => {
                        this.handleInput(e, 'birthday')
                    }}
                    changeTitle={(e) => {
                        this.handleInput(e, 'title')
                    }}
                    changeAddress={(e) => {
                        this.handleInput(e, 'address')
                    }}
                    changePhone={(e) => {
                        this.handleInput(e, 'phone')
                    }}
                    changeEmail={(e) => {
                        this.handleInput(e, 'email')
                    }}
                    changeDescription={(e) => {
                        this.handleInput(e, 'description')
                    }}
                    uploadPic={(e) => {
                        this.uploadPicture(e)
                    }}
                    changePosition={(e) => {
                        this.handleInputExperience(e, 'position')
                    }}
                    changeCompany={(e) => {
                        this.handleInputExperience(e, 'company')
                    }}
                    changeInputTypeIn={(e) => {
                        this.changeInputToDate(e)
                    }}
                    changeInputTypeOut={(e) => {
                        this.changeInputToText(e)
                    }}
                    changeCompanyFrom={(e) => {
                        this.handleInputExperience(e, 'from')
                    }}
                ></Inputs>
                <Preview personal={personal} experience={experience}></Preview>
            </div>
        )
    }
}
Main.propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    birthday: PropTypes.string,
    title: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.number,
    email: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.object,
}
