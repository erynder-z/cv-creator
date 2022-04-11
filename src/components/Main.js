import React, { useState, useRef } from 'react'
import uniqid from 'uniqid'
import { Inputs } from './Inputs'
import { Preview } from './Preview'
import placeholder from '../assets/placeholder.png'
import samplePic from '../assets/napoleon.jpg'
import printIcon from '../assets/printer.svg'
import ReactToPrint from 'react-to-print'

export const Main = () => {
    const componentRef = useRef()

    const [personal, setPersonal] = useState({
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
    })

    const [experience, setExperience] = useState({
        id: uniqid(),
        position: '',
        company: '',
        from: '',
        to: '',
    })

    const [experiences, setExperiences] = useState({
        experiences: [],
    })

    const [education, setEducation] = useState({
        id: uniqid(),
        institution: '',
        city: '',
        degree: '',
        major: '',
        from: '',
        to: '',
    })

    const [educations, setEducations] = useState({
        educations: [],
    })

    const [skill, setSkill] = useState({
        id: uniqid(),
        name: '',
    })

    const [skills, setSkills] = useState({
        skills: [],
    })

    const handleInput = (e, target) => {
        let key = `${target}`

        setPersonal((prevState) => ({
            ...prevState,
            [key]: e.target.value,
        }))
    }

    const handleInputExperience = (e, id, target) => {
        let key = `${target}`

        if (id === experience.id) {
            setExperience((prevState) => ({
                ...prevState,
                [key]: e.target.value,
                /* id: experience.id, */
            }))
        } else {
            setExperiences((prevState) => ({
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

    const addExperienceInput = () => {
        setExperiences(() => ({
            experiences: [...experiences.experiences, experience],
        }))
        setExperience(() => ({
            id: uniqid(),
            position: '',
            company: '',
            from: '',
            to: '',
        }))
    }

    const removeExperienceInput = (e, id) => {
        setExperiences({
            experiences: experiences.experiences.filter(function (item) {
                return item.id !== id
            }),
        })
    }

    const handleInputEducation = (e, id, target) => {
        let key = `${target}`

        if (id === education.id) {
            setEducation((prevState) => ({
                ...prevState,
                [key]: e.target.value,
                /* id: education.id, */
            }))
        } else {
            setEducations((prevState) => ({
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

    const addEducationInput = () => {
        setEducations(() => ({
            educations: [...educations.educations, education],
        }))
        setEducation(() => ({
            id: uniqid(),
            institution: '',
            city: '',
            degree: '',
            major: '',
            from: '',
            to: '',
        }))
    }

    const removeEducationInput = (e, id) => {
        setEducations({
            educations: educations.educations.filter(function (item) {
                return item.id !== id
            }),
        })
    }

    const handleInputSkill = (e, id) => {
        if (id === skill.id) {
            setSkill((prevState) => ({
                ...prevState.skill,
                name: e.target.value,
                id: skill.id,
            }))
        } else {
            setSkills((prevState) => ({
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

    const addSkillInput = () => {
        setSkills(() => ({
            skills: [...skills.skills, skill],
        }))
        setSkill(() => ({
            id: uniqid(),
            name: '',
        }))
    }

    const changeInputToDate = (e) => {
        e.target.type = 'date'
    }

    const changeInputToText = (e) => {
        e.target.type = 'text'
    }

    const uploadPicture = (e) => {
        let file = e.target.files[0]
        if (!file) return
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
        const reader = new FileReader()

        reader.onload = () => {
            setPersonal((prevState) => ({
                ...prevState,
                picture: [reader.result],
            }))
        }
        reader.readAsDataURL(file)
    }

    const loadSample = () => {
        setPersonal({
            id: 'sample',
            firstName: 'Jean',
            lastName: 'Dupont',
            birthday: '1990-08-15',
            title: 'Web Developer',
            address: '123 Fake Street',
            phone: '+33 1 499 123',
            email: 'me@example.com',
            description:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti cupiditate nobis, earum nam corrupti odit quasi. Nulla amet porro sit sed officiis officia dolores cum modi corrupti molestias ipsa quibusdam vero quasi quos totam doloribus obcaecati architecto accusantium, dolore tenetur. Atque, optio eum aliquam nobis consectetur sunt voluptatem tempore tenetur?',

            picture: samplePic,
        }),
            setExperience({
                id: 'sampleExp2',
                position: 'Junior Web Developer',
                company: 'Vaprorcomp Inc.',
                from: '2013',
                to: '2015',
            }),
            setExperiences({
                experiences: [
                    {
                        id: 'sampleExp',
                        position: 'Senior Web Developer',
                        company: 'Flancrest Enterprises ',
                        from: '2015',
                        to: 'current',
                    },
                ],
            }),
            setEducation({
                id: 'sampleEdu',
                institution: 'Ludwig Maximilian University',
                city: 'Munich, Germany',
                degree: 'Bachelor of Science',
                major: 'Computer Science',
                from: '2010',
                to: '2013',
            }),
            setEducations({
                educations: [],
            }),
            setSkill({
                id: 'sampleskill',
                name: 'HTML',
            }),
            setSkills({
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

    const clearData = () => {
        setPersonal({
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
        })

        setExperience({
            id: uniqid(),
            position: '',
            company: '',
            from: '',
            to: '',
        })

        setExperiences({ experiences: [] })

        setEducation({
            id: uniqid(),
            institution: '',
            city: '',
            degree: '',
            major: '',
            from: '',
            to: '',
        })

        setEducations({
            educations: [],
        })

        setSkill({
            id: uniqid(),
            name: '',
        })

        setSkills({
            skills: [],
        })
    }

    return (
        <div className="main-wrapper">
            <Inputs
                personal={personal}
                experience={experience}
                experiences={experiences.experiences}
                education={education}
                educations={educations.educations}
                skill={skill}
                skills={skills.skills}
                changeFirstName={(e) => {
                    handleInput(e, 'firstName')
                }}
                changeLastName={(e) => {
                    handleInput(e, 'lastName')
                }}
                changeDOB={(e) => {
                    handleInput(e, 'birthday')
                }}
                changeTitle={(e) => {
                    handleInput(e, 'title')
                }}
                changeAddress={(e) => {
                    handleInput(e, 'address')
                }}
                changePhone={(e) => {
                    handleInput(e, 'phone')
                }}
                changeEmail={(e) => {
                    handleInput(e, 'email')
                }}
                changeDescription={(e) => {
                    handleInput(e, 'description')
                }}
                uploadPic={(e) => {
                    uploadPicture(e)
                }}
                changeInputTypeIn={(e) => {
                    changeInputToDate(e)
                }}
                changeInputTypeOut={(e) => {
                    changeInputToText(e)
                }}
                changePosition={(e, id) => {
                    handleInputExperience(e, id, 'position')
                }}
                changeCompany={(e, id) => {
                    handleInputExperience(e, id, 'company')
                }}
                changeCompanyFrom={(e, id) => {
                    handleInputExperience(e, id, 'from')
                }}
                changeCompanyTo={(e, id) => {
                    handleInputExperience(e, id, 'to')
                }}
                addInputFieldExperience={(e) => {
                    addExperienceInput(e)
                }}
                removeInputFieldExperience={(e, id) => {
                    removeExperienceInput(e, id)
                }}
                changeInstitution={(e, id) => {
                    handleInputEducation(e, id, 'institution')
                }}
                changeCity={(e, id) => {
                    handleInputEducation(e, id, 'city')
                }}
                changeDegree={(e, id) => {
                    handleInputEducation(e, id, 'degree')
                }}
                changeMajor={(e, id) => {
                    handleInputEducation(e, id, 'major')
                }}
                changeEducationFrom={(e, id) => {
                    handleInputEducation(e, id, 'from')
                }}
                changeEducationTo={(e, id) => {
                    handleInputEducation(e, id, 'to')
                }}
                addInputFieldEducation={(e) => {
                    addEducationInput(e)
                }}
                removeInputFieldEducation={(e, id) => {
                    removeEducationInput(e, id)
                }}
                changeSkill={(e, id) => {
                    handleInputSkill(e, id)
                }}
                addSkill={(e) => {
                    addSkillInput(e)
                }}
                getSample={() => {
                    loadSample()
                }}
                resetData={() => {
                    clearData()
                }}
            ></Inputs>

            <ReactToPrint
                trigger={() => (
                    <div className="print">
                        <img src={printIcon} alt="printer icon" />
                    </div>
                )}
                content={() => componentRef.current}
            />
            <Preview
                ref={componentRef}
                personal={personal}
                experience={experience}
                experiences={experiences.experiences}
                education={education}
                educations={educations.educations}
                skill={skill}
                skills={skills.skills}
            ></Preview>
        </div>
    )
}
