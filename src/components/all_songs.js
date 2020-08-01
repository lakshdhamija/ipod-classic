import React from "react";
import "../css/display.css";
import MusicPlayer from '../components/music_player.js'
class AllSongs extends React.Component {
    state={
        dispCurrPage: true,
        dispSong1: false,
        dispSong2: false,
        dispSong3: false,
        degree:0
    }
    render() {
        const {dispCurrPage, dispSong1, dispSong2, dispSong3} = this.state;
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