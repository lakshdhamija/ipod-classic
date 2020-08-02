import React from "react";
import "../css/display.css";
import MusicPlayer from '../components/music_player.js';
import ZingTouch from 'zingtouch';
class AllSongs extends React.Component {
    state = {
        dispCurrPage: true,
        dispSong1: false,
        dispSong2: false,
        dispSong3: false,
        degree: 0
    }
    componentDidMount() {
        this.rotation();
        var midBtn = document.getElementsByClassName("midBtn")[0];
        midBtn.addEventListener("click", this.select);
    }
    componentWillUnmount() {
        this.setState({
            dispSong1: false,
            dispSong2: false,
            dispSong3: false,
            dispCurrPage: true
        });
    }
    rotation = function () { // Function to make our disk rotate
        const song1 = document.getElementsByClassName('song1')[0];
        const song2 = document.getElementsByClassName("song2")[0];
        const song3 = document.getElementsByClassName("song3")[0];
        const disk = document.getElementsByClassName("Disk")[0];
        var turnRegion = ZingTouch.Region(disk);
        turnRegion.bind(disk, 'rotate', (e) => {
            if (e.detail.angle - this.state.degree > 15 || e.detail.angle - this.state.degree < -15) {
                if (e.detail.distanceFromLast > 0) {
                    if (this.state.dispCurrPage) {
                        if (song1.classList.contains('highlight')) {
                            song1.classList.remove('highlight');
                            song2.classList.add('highlight');
                        } else if (song2.classList.contains('highlight')) {
                            song2.classList.remove('highlight');
                            song3.classList.add('highlight');
                        } else if(song3.classList.contains('highlight')){
                            song3.classList.remove('highlight');
                            song1.classList.add('highlight');
                        }
                    }
                } else if (e.detail.distanceFromLast < 0) {
                    if (this.state.dispCurrPage) {
                        if (song1.classList.contains('highlight')) {
                            song1.classList.remove('highlight');
                            song3.classList.add('highlight');
                        } else if (song3.classList.contains('highlight')) {
                            song3.classList.remove('highlight');
                            song2.classList.add('highlight');
                        } else if (song2.classList.contains('highlight')){
                            song2.classList.remove('highlight');
                            song1.classList.add('highlight');
                        }
                    }
                }
            }
        });
    };
    select = () => {
        const song1 = document.getElementsByClassName('song1')[0];
        const song2 = document.getElementsByClassName("song2")[0];
        const song3 = document.getElementsByClassName("song3")[0];
        if (this.state.dispCurrPage) {
            this.setState({
                dispCurrPage: false,
                dispSong1: false,
                dispSong2: false,
                dispSong3: false
            });
            if (song1.classList.contains('highlight')) {
                this.setState({
                    dispSong1: true
                });
            }
            if (song2.classList.contains('highlight')) {
                this.setState({
                    dispSong2: true
                });
            }
            if (song3.classList.contains('highlight')) {
                this.setState({
                    dispSong3: true
                });
            }
        }
    }
    render() {
        const { dispCurrPage, dispSong1, dispSong2, dispSong3 } = this.state;
        return (
            <div style={{ width: "100%", height: "100%" }}>
                {dispCurrPage &&
                    <div className="menu">
                        <div className="menuTitle">All Songs</div>
                        <div className="song1 highlight">Thandi Hawa - Ritviz</div>
                        <div className="song2">Cold/Mess - Prateek Kuhad</div>
                        <div className="song3">Shape of You - Ed Sheeran</div>
                    </div>
                }
                {dispSong1 && <MusicPlayer />}
                {dispSong2 && <MusicPlayer />}
                {dispSong3 && <MusicPlayer />}
            </div>
        );
    }
}

export default AllSongs;