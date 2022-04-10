import React from 'react'
import PropTypes from 'prop-types'

export const FormOptions = (props) => {
    return (
        <div className="options ">
            <div className="options-input">
                <div className="input-section-title">Document options</div>
                <div
                    className={'sample-button'}
                    onClick={() => {
                        props.getSample()
                    }}
                >
                    Load Sample
                </div>
                <div
                    className={'reset-button'}
                    onClick={() => {
                        props.resetData()
                    }}
                >
                    Reset data
                </div>
            </div>
        </div>
    )
}

FormOptions.propTypes = {
    getSample: PropTypes.func,
    resetData: PropTypes.func,
}
