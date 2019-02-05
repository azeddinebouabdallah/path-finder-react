import React, { Component } from 'react';
import './stepsInput.css'

import Dimensions from './Dimensions'
import ChooseStartPoint from './ChooseStartPoint'

class StepsInput extends Component {

    constructor(props){
        super(props)

        this.state = {
            step : 0, 
            stepComponenet: null,
            isStepTwoItemSelected : false,
            StepTwoItemSelected: null,

        }

        this.onStepDone = this.onStepDone.bind(this)
        this.onStepBack = this.onStepBack.bind(this)
        this.setStepComponenet = this.setStepComponenet.bind(this)
        this.changeStepBar = this.changeStepBar.bind(this)
        this.onStepTwoClickPoint = this.onStepTwoClickPoint.bind(this)
    }
    
    onStepDone(){
        this.setState({
            step : this.state.step + 1
        }, this.setStepComponenet)
    }
    onStepBack(){
        switch(this.state.step){
            case 1:
                this.setState({
                    step: this.state.step - 1,
                    isStepTwoItemSelected: false,
                    StepTwoItemSelected: null
                }, this.setStepComponenet)
                this.removeStepTwoOnClickEvent()
                break;
            default:
                this.setState({
                    step: this.state.step - 1,
                }, this.setStepComponenet)
                break;
        }   
    }
    componentWillMount(){
        this.setStepComponenet()
    }
    setStepComponenet(){
        switch(this.state.step){
            case 0:
                 this.setState({
                     stepComponenet : <Dimensions changeGridWidth = {this.props.changeGridWidth} onStepDone = {this.onStepDone}/>
                    },
                    this.changeStepBar
                    ) 
                break;
            case 1:
                this.setState({
                    stepComponenet: <ChooseStartPoint onStepDone={this.onStepDone} onStepBack={this.onStepBack}/>
                }, () => {
                    this.changeStepBar()
                    this.addStepTwoOnClickEvent()
                })
                break;
            default:
                this.setState({
                    stepComponenet: <h1>Step Done</h1>
                },
                this.changeStepBar
                )
                break;
        }
    }

    changeStepBar(){
            document.querySelectorAll('.step').forEach((element, index) => {
                if (index === this.state.step){
                    element.className = 'active step'
                }else {
                    element.className = 'disabled step'
                }
            })
    }

    addStepTwoOnClickEvent(){
        document.querySelectorAll('.grid-item').forEach(element => {
            element.onclick =  this.onStepTwoClickPoint
        })
    }

    removeStepTwoOnClickEvent(){
        document.querySelectorAll('.grid-item').forEach(element => {
            element.onclick = null
        })
    }

    onStepTwoClickPoint(event){
        if (this.state.StepTwoItemSelected !== event.target.id){
            if (!this.state.isStepTwoItemSelected){
                event.target.style.background = 'black'
                this.setState({
                    isStepTwoItemSelected : true,
                    StepTwoItemSelected : event.target.id
                })
            }
        }else {
            event.target.style.background = 'none'
            this.setState({
                isStepTwoItemSelected : false,
                StepTwoItemSelected : null
            })
        }
        
    }

    render() {       
        return (
            <div id='steps-inputs'>
            {this.state.stepComponenet}
            </div>
        );
    }
}

export default StepsInput;