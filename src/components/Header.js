import React, { Component } from 'react'

export class Header extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <nav className="navbar ">
                <div className="header-text">CV-CREATOR</div>
            </nav>
        )
    }
}
