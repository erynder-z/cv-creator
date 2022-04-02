import React, { Component } from 'react'
import uniqid from 'uniqid'
import { Inputs } from './Inputs'
import { Preview } from './Preview'
import placeholder from '../assets/placeholder.png'
import samplePic from '../assets/napoleon.jpg'

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
            education: {
                id: uniqid(),
                institution: '',
                city: '',
                degree: '',
                major: '',
                from: '',
                to: '',
            },
            educations: [],
            skill: {
                id: uniqid(),
                name: '',
            },
            skills: [],
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
                        ? Object.assign({}, obj, {
                              [key]: e.target.value,
                          })
                        : obj
                ),
            }))
        }
    }

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

    removeExperienceInput(e, id) {
        this.setState({
            experiences: this.state.experiences.filter(function (item) {
                return item.id !== id
            }),
        })
    }

    handleInputEducation(e, id, target) {
        let key = `${target}`

        if (id === this.state.education.id) {
            this.setState((prevState) => ({
                education: {
                    ...prevState.education,
                    [key]: e.target.value,
                    id: this.state.education.id,
                },
            }))
        } else {
            this.setState((prevState) => ({
                educations: prevState.educations.map((obj) =>
                    obj.id === id
                        ? Object.assign({}, obj, {
                              [key]: e.target.value,
                          })
                        : obj
                ),
            }))
        }
    }

    addEducationInput() {
        const { educations, education } = this.state
        this.setState(() => ({
            educations: [...educations, education],
            education: {
                id: uniqid(),
                institution: '',
                city: '',
                degree: '',
                major: '',
                from: '',
                to: '',
            },
        }))
    }

    removeEducationInput(e, id) {
        this.setState({
            educations: this.state.educations.filter(function (item) {
                return item.id !== id
            }),
        })
    }

    handleInputSkill(e, id) {
        console.log(id)
        if (id === this.state.skill.id) {
            this.setState((prevState) => ({
                skill: {
                    ...prevState.skill,
                    name: e.target.value,
                    id: this.state.skill.id,
                },
            }))
        } else {
            this.setState((prevState) => ({
                skills: prevState.skills.map((obj) =>
                    obj.id === id
                        ? Object.assign({}, obj, {
                              name: e.target.value,
                          })
                        : obj
                ),
            }))
        }
    }

    addSkillInput() {
        const { skills, skill } = this.state
        this.setState(() => ({
            skills: [...skills, skill],
            skill: {
                id: uniqid(),
                name: '',
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

    loadSample() {
        this.setState({
            personal: {
                id: 'sample',
                firstName: 'Jean',
                lastName: 'Dupont',
                birthday: '1990-12-31',
                title: 'Web Developer',
                address: '123 Fake Street',
                phone: '+33 1 499 123',
                email: 'me@example.com',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugit quod doloremque, aut fuga iusto commodi officiis maiores ducimus non!',
                picture: samplePic,
            },
            experience: {
                id: 'sampleExp2',
                position: 'Junior Web Developer',
                company: 'Vaprorcomp Inc.',
                from: '2013',
                to: '2015',
            },
            experiences: [
                {
                    id: 'sampleExp',
                    position: 'Senior Web Developer',
                    company: 'Flancrest Enterprises ',
                    from: '2015',
                    to: 'current',
                },
            ],
            education: {
                id: 'sampleEdu',
                institution: 'Ludwig Maximilian University',
                city: 'Munich, Germany',
                degree: 'Bachelor of Science',
                major: 'Computer Science',
                from: '2010',
                to: '2013',
            },
            educations: [],
            skill: {
                id: 'sampleskill',
                name: 'HTML',
            },
            skills: [
                {
                    id: 'sampleskill2',
                    name: 'CSS/SASS',
                },
                {
                    id: 'sampleskill3',
                    name: 'JavaScript',
                },
                {
                    id: 'sampleskill4',
                    name: 'TDD',
                },
                {
                    id: 'sampleskill5',
                    name: 'React',
                },
            ],
        })
    }

    clearData() {
        this.setState({
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
            education: {
                id: uniqid(),
                institution: '',
                city: '',
                degree: '',
                major: '',
                from: '',
                to: '',
            },
            educations: [],
            skill: {
                id: uniqid(),
                name: '',
            },
            skills: [],
        })
    }

    render() {
        return (
            <div className="main-wrapper">
                <Inputs
                    {...this.state}
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
                    removeInputFieldExperience={(e, id) => {
                        this.removeExperienceInput(e, id)
                    }}
                    changeInstitution={(e, id) => {
                        this.handleInputEducation(e, id, 'institution')
                    }}
                    changeCity={(e, id) => {
                        this.handleInputEducation(e, id, 'city')
                    }}
                    changeDegree={(e, id) => {
                        this.handleInputEducation(e, id, 'degree')
                    }}
                    changeMajor={(e, id) => {
                        this.handleInputEducation(e, id, 'major')
                    }}
                    changeEducationFrom={(e, id) => {
                        this.handleInputEducation(e, id, 'from')
                    }}
                    changeEducationTo={(e, id) => {
                        this.handleInputEducation(e, id, 'to')
                    }}
                    addInputFieldEducation={(e) => {
                        this.addEducationInput(e)
                    }}
                    removeInputFieldEducation={(e, id) => {
                        this.removeEducationInput(e, id)
                    }}
                    changeSkill={(e, id) => {
                        this.handleInputSkill(e, id)
                    }}
                    addSkill={(e) => {
                        this.addSkillInput(e)
                    }}
                    getSample={() => {
                        this.loadSample()
                    }}
                    resetData={() => {
                        this.clearData()
                    }}
                ></Inputs>

                <Preview {...this.state}></Preview>
            </div>
        )
    }
}
