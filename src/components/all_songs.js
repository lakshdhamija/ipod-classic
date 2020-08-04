import React from "react";
import "../css/display.css";
import MusicPlayer from '../components/music_player.js';
import ZingTouch from 'zingtouch';
class AllSongs extends React.Component { // class based component
    state = {
        dispCurrPage: true,
        dispSong1: false,
        dispSong2: false,
        dispSong3: false,
        degree: 0
    }
    componentDidMount() { // when component is mounted
        this.rotation();
        var midBtn = document.getElementsByClassName("midBtn")[0];
        midBtn.addEventListener("click", this.select);
    }
    componentWillUnmount() { // when component unmounts
        this.setState({
            dispSong1: false,
            dispSong2: false,
            dispSong3: false,
            dispCurrPage: false
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
    select = () => { // to select the current selection
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
                {/* Calling MusicPlayer Component */}
                {dispSong1 && <MusicPlayer name="Thandi Hawa - Ritviz" imagePath="https://i.ytimg.com/vi/VZ60FEaZZXA/hqdefault.jpg" songPath="http://mp3.vlcmusic.com/mp3/org/27159.mp3"/>}
                {dispSong2 && <MusicPlayer name="Cold/Mess - Prateek Kuhad" imagePath="https://www.redwolf.in/image/cache/catalog/marketplace/prateek-kuhad/prateek-kuhad-cold-mess-teal-sweatshirt-artwork-700x700.png" songPath="https://t4.bcbits.com/stream/2d3d6f625764fcfdc758ddf190eeb53e/mp3-128/3058631755?p=0&ts=1596634649&t=49afd583d0bbd75251443f1f72d04cefdccce61a&token=1596634649_3687c09f269fc25649026a69b464d97798fc40f1"/>}
                {dispSong3 && <MusicPlayer name="Shape of You - Ed Sheeran" imagePath="https://m.media-amazon.com/images/I/81PPDaaySeL._SS500_.jpg" songPath="https://dexo.cutepup.club/2ccf9e9a5ac0d999e3b26/Ed%20Sheeran%20-%20Shape%20Of%20You%20%5BOfficial%5D.mp3"/>}
            </div>
        );
    }
}

export default AllSongs;