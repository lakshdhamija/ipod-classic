import React, { Component } from 'react';
import './css/App.css';
import Display from './components/display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
