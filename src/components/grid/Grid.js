import React, { Component } from 'react';
import './Grid.css'
class Grid extends Component {

    constructor(props){
        super(props)

        this.state = {
            gridItems : props.gridItems
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            gridItems: nextProps.gridItems
        })
    }

    render() {
        return (
            <div id="grid">
                {this.state.gridItems}
            </div>
        );
    }
}

export default Grid;