import React, { Component } from 'react';
import './css/App.css';
import Display from './components/display';
import Albums from './components/albums';
import Artists from './components/artists';
import Settings from './components/settings';
import Disk from './components/disk';

class App extends Component {
  state = {
    menuDisp: true,
    albumsDisp: false,
    songsDisp: false,
    artistsDisp: false,
    settingsDisp: false
  };  
  componentDidMount(){
    this.rotation();
  }
  rotation = async function() {
    var disk = document.getElementsByClassName("Disk");
    var activeRegion = ZingTouch.Region(containerElement[0]); //defining active region
    activeRegion.bind(containerElement[0], "rotate", (event) => {
      event.stopPropagation();

      //comparing angle with previous angle in state
      if (
        event.detail.angle - this.state.angle > 15 ||
        event.detail.angle - this.state.angle < -15
      ) {
        if (event.detail.distanceFromLast > 0) {
          this.toggleClockwise();
        } else if (event.detail.distanceFromLast < 0) {
          this.toggleAntiClockwise();
        }
        this.setState({
          angle: event.detail.angle,
        });
      }
    });
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
          <Disk />
        </div>
      </div>
    );
  }
}

export default App;
