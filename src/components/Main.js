import React, { Component } from 'react'
import uniqid from 'uniqid'
import { Inputs } from './Inputs'
import { Preview } from './Preview'

export class Main extends Component {
    constructor() {
        super()
        this.state = {
            personal: {
                id: uniqid(),
                firstName: '',
                lastName: '',
                title: '',
                address: '',
                phone: '',
                email: '',
            },
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

    render() {
        const personal = this.state.personal
        return (
            <div className="main-wrapper">
                <Inputs
                    changeFirstName={(e) => {
                        this.handleInput(e, 'firstName')
                    }}
                    changeLastName={(e) => {
                        this.handleInput(e, 'lastName')
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
                ></Inputs>
                <Preview personal={personal}></Preview>
            </div>
        )
    }
}
