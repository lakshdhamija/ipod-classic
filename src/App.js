import React, { Component } from 'react';
import './css/App.css';
import Display from './components/display';
import Albums from './components/albums';
import Artists from './components/artists';
import Settings from '../components/settings';

class App extends Component {
  state = {
    menuDisp: true,
    albumsDisp: false,
    songsDisp: false,
    artistsDisp: false,
    settingsDisp: false
  };  
  render() {
    const {menuDisp, albumsDisp, songsDisp, artistsDisp, settingsDisp} = this.state;
    return (
      <div className="App">
        <div className="main">
          {menuDisp && <Display />}
          {albumsDisp && <Albums />}
          {artistsDisp && <Artists />}
          {settingsDisp && <Settings />}
        </div>
      </div>
    );
  }
}

export default App;
