import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login'

class App extends Component {
  login = () => {
  }

  render() {
    return (
      <div className="App">
        <Login click={this.login} />
      </div>
    );
  }
}

export default App;
