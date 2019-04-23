import React, { Component } from 'react';
import './App.css';
import { Grid } from './Grid';
import ComponentForApp  from './componentForApp';
import { SelectBtn } from './SelectBtn';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      row: 1,
      columns: 20,
      color: ['red', 'blue', 'green'],
      board: []
    }
  }

  addRow = () => {
    const arr = Array.from({ length: this.state.row }, () =>
      Array.from({ length: this.state.columns }, () => {})
    );
    this.setState ({
      board: arr,
      row: this.state.row +=1
    })
  }

  clearBoard = () =>{
    this.setState ({
      board: [],
      row: 1
    })
  }

  toggleCellColor = (e) => {
     const elementBc = e.target.style.backgroundColor;
     e.target.style.backgroundColor = elementBc === this.state.color ? 'gray' : this.state.color;
   };

   setColVal = (e) => {
     console.log(e.target.value);
     this.setState({
       color: e.target.value
     })
   }

  render(){
    return (
      <div className="App">
        <ComponentForApp addRow={this.addRow}
          clearBoard={this.clearBoard}
          toggleCellColor={this.toggleCellColor}
          setColorVal={this.setColVal}
          colorVal={this.state.color}
          board={this.state.board}
        />
      </div>
    )
  }
}
