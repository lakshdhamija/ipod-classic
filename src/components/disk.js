import React from "react";
import "../css/disk.css";

function disk(props) { //function based component
  return (
    <div className="Disk">
      <img className="forward" src="https://image.flaticon.com/icons/svg/709/709586.svg" alt="forward"></img>
      <img className="previous" src="https://image.flaticon.com/icons/svg/860/860790.svg" alt="previous"></img>
      <img className="play-pause" src="https://www.flaticon.com/premium-icon/icons/svg/3031/3031722.svg" alt="play-pause"></img>
      {/* To go home when home button clicked */}
      <span className="home" onClick={props.goHome}>HOME</span>
      
      {/* To select current Selection */}
      <div className="midBtn" onClick={props.select}></div>
    </div>
  );
}

export default disk;
