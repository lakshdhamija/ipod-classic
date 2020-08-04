

import React from "react";
import "../css/music_player.css"
class MusicPlayer extends React.Component {
  state = {
    dispCurr: true
  }
  componentDidMount() {
    var playPauseBtn = document.getElementsByClassName("play-pause")[0]; // get playPause button
    playPauseBtn.addEventListener("click", this.playPauseMusic); // Event Listner to play and pause music

    var forward = document.getElementsByClassName('forward')[0]; // forward button
    forward.addEventListener('click', this.forwardMusic); // event listener to forward music

    var previous = document.getElementsByClassName('previous')[0]; // reverse button
    previous.addEventListener('click', this.reverseMusic); // event listener to reverse music

    var fillBar = document.getElementById("fill");
    var music = document.getElementsByClassName("music")[0];
    music.addEventListener('timeupdate', function () { // event listener to update fillbar and handle as song progresses
      var position = music.currentTime / music.duration;
      fillBar.style.width = position * 100 + '%';
    });
  }

  // function to play and paue music
  playPauseMusic() {
    var music = document.getElementsByClassName("music")[0];
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }

  //function to forward music
  forwardMusic() {
    var music = document.getElementsByClassName("music")[0];
    if (music.currentTime + 5 < music.duration) {
      music.currentTime += 5;
    }
  }

  //function to reverse music
  reverseMusic() {
    var music = document.getElementsByClassName("music")[0];
    if (music.currentTime - 5 > 0) {
      music.currentTime -= 5;
    }
  }

  render() {
    return (
      <div className="Music_player">
        <p style={{ textAlign: "center", margin: 0, padding: 0, fontWeight: "bold" }}>{this.props.name}</p>
        <img src={this.props.imagePath} alt="artists" // music poster
          style={{
            width: "80%",
            height: "70%",
            marginLeft: "1.8em",
            marginTop: "0.3em",
            borderRadius: "5%"
          }}
        />
        {/* audio file */}
        <audio className="music" autoPlay src={this.props.songPath}></audio>
        {/* audio bar */}
        <div id="seek-bar">
          <div id="fill"></div>
          <div id="handle"></div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;