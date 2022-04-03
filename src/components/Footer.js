import React, { Component } from 'react'

export class Footer extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="footer ">
                {' '}
                <div id="myFooter" className="myFooterClass">
                    Copyright © Erynder-Z 2021 ||{' '}
                    <a
                        href="https://github.com/erynder-z"
                        target="_blank"
                        rel="noreferrer"
                    >
                        My GitHub
                    </a>
                </div>
            </div>
        )
    }
}
