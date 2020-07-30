import React, { Component } from 'react';
import './css/App.css';
import Display from './components/display';
import Albums from './components/albums';
import Artists from './components/artists';
import Settings from './components/settings';
import Disk from './components/disk';
import ZingTouch from 'zingtouch';
import Songs from './components/songs';

class App extends Component {
  state = {
    mainMenuDisp: true,
    albumsDisp: false,
    songsDisp: false,
    artistsDisp: false,
    settingsDisp: false,
    degree: 0
  };
  componentDidMount() {
    this.rotation();
  }
  rotation = function () { // Function to make our disk rotate
    var disk = document.getElementsByClassName("Disk")[0];
    var turnRegion = ZingTouch.Region(disk);
    turnRegion.bind(disk, 'rotate', (e) => {
      if (e.detail.angle - this.state.degree > 15 || e.detail.angle - this.state.degree < -15) {
        if (e.detail.distanceFromLast > 0) {
          this.rotateRight();
        } else if (e.detail.distanceFromLast < 0) {
          this.rotateLeft();
        }
        this.setState({
          degree: e.detail.angle
        });
      }
    });
  };
  rotateRight = function () {
    var albums = document.getElementsByClassName("albums")[0];
    var songs = document.getElementsByClassName("songs")[0];
    var artists = document.getElementsByClassName("artists")[0];
    var settings = document.getElementsByClassName("settings")[0];
    if (this.state.mainMenuDisp) {
      if (albums.classList.contains('highlight')) {
        albums.classList.remove('highlight');
        songs.classList.add('highlight');
      } else if (songs.classList.contains('highlight')) {
        songs.classList.remove('highlight');
        artists.classList.add('highlight');
      } else if (artists.classList.contains('highlight')) {
        artists.classList.remove('highlight');
        settings.classList.add('highlight');
      } else if (settings.classList.contains('highlight')) {
        settings.classList.remove('highlight');
        albums.classList.add('highlight');
      }
    }
  };

  rotateLeft = function () {
    var albums = document.getElementsByClassName("albums")[0];
    var songs = document.getElementsByClassName("songs")[0];
    var artists = document.getElementsByClassName("artists")[0];
    var settings = document.getElementsByClassName("settings")[0];
    if (this.state.mainMenuDisp) {
      if (albums.classList.contains('highlight')) {
        albums.classList.remove('highlight');
        settings.classList.add('highlight');
      } else if (settings.classList.contains('highlight')) {
        settings.classList.remove('highlight');
        artists.classList.add('highlight');
      } else if (artists.classList.contains('highlight')) {
        artists.classList.remove('highlight');
        songs.classList.add('highlight');
      } else if (songs.classList.contains('highlight')) {
        songs.classList.remove('highlight');
        albums.classList.add('highlight');
      }
    }
  };
  goHome = () => { // function to go back to the main menu(home)
    this.setState({
      mainMenuDisp: true,
      albumsDisp: false,
      songsDisp: false,
      artistsDisp: false,
      settingsDisp: false
    });
  };
  select = () => { // function to select a menu choice
    if (this.state.mainMenuDisp) {
      this.setState({
        mainMenuDisp: false,
        albumsDisp: false,
        songsDisp: false,
        artistsDisp: false,
        settingsDisp: false
      });

      var albums = document.getElementsByClassName("albums")[0];
      var songs = document.getElementsByClassName("songs")[0];
      var artists = document.getElementsByClassName("artists")[0];
      var settings = document.getElementsByClassName("settings")[0];

      if (albums.classList.contains('highlight')) {
        this.setState({
          albumsDisp: true
        });
      }else if (songs.classList.contains('highlight')) {
        this.setState({
          songsDisp: true
        });
      }else if (artists.classList.contains('highlight')) {
        this.setState({
          artistsDisp: true
        });
      }else if (settings.classList.contains('highlight')) {
        this.setState({
          settingsDisp: true
        });
      }
    }
  }
  render() {
    const { mainMenuDisp, albumsDisp, songsDisp, artistsDisp, settingsDisp } = this.state;
    return (
      <div className="App">
        <div className="main">
          {mainMenuDisp && <Display />}
          {albumsDisp && <Albums />}
          {songsDisp && <Songs />}
          {artistsDisp && <Artists />}
          {settingsDisp && <Settings />}
          <Disk goHome={this.goHome} select={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
