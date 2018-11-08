import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Papa from "papaparse"
import DataContainer from "./DataContainer"
import {BrowserRouter, Route} from "react-router-dom"
import {Redirect} from 'react-router'

import data from './data.csv';

class App extends Component {
  state = {
    data: []
  }

  updateData = (result) => {
    const data = result.data;
    this.setState({data});
  }

  componentDidMount() {
    Papa.parse(data, {
      header: true,
      dynamicTyping: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    })
    console.table(this.state.data)
  }

  render() {
    return (<BrowserRouter>
      <Route path='/:key' render={(props) => <DataContainer {...props} data={this.state.data}/>}/>
    </BrowserRouter>);
  }
}

export default App;
