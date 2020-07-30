import React from "react";
import '../css/display.css';

function Display() { // Function based Component Display
    return (
        <div className="Display">
            <div className="menu">
                <div className="menuTitle">iPod.js</div>
                <div className="albums" className="selected">Albums</div>
                <div className="songs">Songs</div>
                <div className="artists">Artists</div>
                <div className="settings">Settings</div>
            </div>
        </div>
    );
}

export default Display;
