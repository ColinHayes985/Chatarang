import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor(){
    super()
    this.state={user: {uid:'hayes122', displayName:'Colin', email:'hayes122@purdue.edu'}}
  }
  render() {
    return (
      <div className="App">
        <h1>Chatarang</h1>
        <Main user={this.state.user}/>  
      </div>
    );
  }
}

export default App;
