import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FormOptions extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="options ">
                <div className="options-input">
                    <div className="input-section-title">Document options</div>
                    <div
                        className={'sample-button'}
                        onClick={() => {
                            this.props.getSample()
                        }}
                    >
                        Load Sample
                    </div>
                    <div
                        className={'reset-button'}
                        onClick={() => {
                            this.props.resetData()
                        }}
                    >
                        Reset data
                    </div>
                </div>
            </div>
        )
    }
}

FormOptions.propTypes = {
    getSample: PropTypes.func,
    resetData: PropTypes.func,
}
