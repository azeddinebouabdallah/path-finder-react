import React, { Component } from 'react';
import './App.css'

import Steps from './components/steps/Steps'
import StepsInput from './components/stepsInput/StepsInput'
import Grid from './components/grid/Grid'

class App extends Component {

  constructor(props){
    super(props)
    console.clear()
    this.state = {
      width : 5,
      gridItems : []
    }
    this.changeGrid = this.changeGrid.bind(this)
    this.changeGridWidth = this.changeGridWidth.bind(this)

  }
  componentDidMount(){
    this.changeGrid()
  }

  changeGridWidth(width){
    this.setState({
      width
    },
    this.changeGrid
    )
  }

  changeGrid(){
    let grid = document.querySelector('#grid')

    grid.style.gridTemplateColumns = 'auto '.repeat(this.state.width)
    let gridItems = []
    for (let i = 0; i < this.state.width; i++){
     for (let j = 0; j < this.state.width; j++){
        gridItems.push(<div className="grid-item" id={i + '' + j} key={i + '' + j}>Point</div>)
     }     
    }

    this.setState({
      gridItems : gridItems
    })
  }


  render() {
    return (
      <div className="path-finder-app">
        <Steps/>
        <StepsInput changeGridWidth = {(width) => {this.changeGridWidth(width)}}/>
        <Grid gridItems = {this.state.gridItems}/>
      </div>
    );
  }
}

export default App; 
