import React from 'react'

const ChooseStartPoint = props => {
    return (
        <div id="choose-start-point">
        <button className="ui right labeled icon button" wfd-id="353" onClick = {props.onStepBack}>
                    Back
                    <i className="left arrow icon"></i>
        </button>
        <button className="ui right labeled icon button" wfd-id="353" onClick = {props.onStepDone}>
                    <i className="right arrow icon"></i>
                    Next
        </button>
        </div>
    )
}

export default ChooseStartPoint