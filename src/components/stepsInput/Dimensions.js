import React, { Component } from 'react';

class Dimensions extends Component {

    constructor(props){
        super(props)

        this.onHeightChange = this.onHeightChange.bind(this)
        this.onWidthChange = this.onWidthChange.bind(this)

    }

    onHeightChange(){
        let width = document.querySelector("#height-input").value
        document.querySelector('#width-input').value = width
        this.props.changeGridWidth(width)
    }
    onWidthChange(){
        let width = document.querySelector("#width-input").value
        document.querySelector('#height-input').value = width
        this.props.changeGridWidth(width)
    }
    
    render() {
        return (
            <div id="dimensions">
                <div className="ui right labeled input" wfd-id="82">
                <input type="number" id="height-input" placeholder="Enter height.." wfd-id="203" onChange={this.onHeightChange}/>
                <div className="ui basic label" wfd-id="83">
                    <i className="arrows alternate vertical icon"></i>
                </div>
                </div>
                X
                <div className="ui right labeled input" wfd-id="82">
                <input type="number" id="width-input" placeholder="Enter Weight.." wfd-id="203" onChange={this.onWidthChange}/>
                <div className="ui basic label" wfd-id="83">
                    <i className="arrows alternate horizontal icon"></i>
                </div>
                </div>
                <button className="ui right labeled icon button" wfd-id="353" onClick = {this.props.onStepDone}>
                    <i className="right arrow icon"></i>
                    Next
                </button>
            </div>
        );
    }
}

export default Dimensions;