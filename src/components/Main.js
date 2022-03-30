import React, { Component } from 'react'
import uniqid from 'uniqid'
import { Inputs } from './Inputs'
import { Preview } from './Preview'
import placeholder from '../assets/placeholder.png'

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

    handleInputExperience(e, id, target) {
        let key = `${target}`
        /*     console.log(id) */

        if (id === this.state.experience.id) {
            this.setState((prevState) => ({
                experience: {
                    ...prevState.experience,
                    [key]: e.target.value,
                    id: this.state.experience.id,
                },
            }))
        } else {
            this.setState((prevState) => ({
                experiences: prevState.experiences.map((obj) =>
                    obj.id === id
                        ? Object.assign(obj, {
                              [key]: e.target.value,
                          })
                        : obj
                ),
            }))
        }
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

    /* handleInputExperience(e, id, target) {
        let key = `${target}`
        this.setState((prevState) => ({
            experience: {
                ...prevState.experience,
                [key]: e.target.value,
                id: this.state.experience.id,
            },
        }))
    } */

    /*   addExperienceInput(e, target) {
        let key = `${target}`
        const { experiences, experience } = this.state
        this.setState(
            (prevState) => ({
                experiences: [...experiences, experience],
                experience: {
                    ...prevState.experience,
                    [key]: e.target.value,
                    id: this.state.experience.id,
                },
            }),
            () => {
                console.log(this.state)
            }
        )
    } */

    addExperienceInput() {
        const { experiences, experience } = this.state
        this.setState(() => ({
            experiences: [...experiences, experience],
            experience: {
                id: uniqid(),
                position: '',
                company: '',
                from: '',
                to: '',
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
        /*         const personal = this.state.personal
        const experience = this.state.experience */
        return (
            <div className="main-wrapper">
                <Inputs
                    {...this.state}
                    /*  experiences={experience} */
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
                    changeInputTypeIn={(e) => {
                        this.changeInputToDate(e)
                    }}
                    changeInputTypeOut={(e) => {
                        this.changeInputToText(e)
                    }}
                    changePosition={(e, id) => {
                        this.handleInputExperience(e, id, 'position')
                    }}
                    changeCompany={(e, id) => {
                        this.handleInputExperience(e, id, 'company')
                    }}
                    changeCompanyFrom={(e, id) => {
                        this.handleInputExperience(e, id, 'from')
                    }}
                    changeCompanyTo={(e, id) => {
                        this.handleInputExperience(e, id, 'to')
                    }}
                    addInputFieldExperience={(e) => {
                        this.addExperienceInput(e)
                    }}
                ></Inputs>

                <Preview
                    {...this.state}
                    /*  personal={personal}
                    experience={experience} */
                ></Preview>
            </div>
        )
    }
}
