import React, { Component } from 'react';
import './css/App.css';
import Display from './components/display';

class App extends Component {
  state = {
    menuDisp: true,
    albumsDisp: false,
    songsDisp: false,
    artistsDisp: false,
    settingsDisp: false
  };  
  render() {
    const {menuDisp} = this.state;
    return (
      <div className="App">
        <div className="main">
          {menuDisp && <Display />}
        </div>
      </div>
    );
  }
}

export default App;
