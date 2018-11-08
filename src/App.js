import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Papa from "papaparse"
import DataContainer from "./DataContainer"

import data from './data.csv';


class App extends Component {
  state = {
    data:[],
  }

  updateData = (result) =>{
    const data = result.data;
    this.setState({ data });
  }


  componentDidMount(){
    Papa.parse( data , {
      header: true,
      dynamicTyping: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    })
    console.table(this.state.data)
  }

  render() {
    return (
      <div className="App">
      <DataContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
