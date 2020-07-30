import React from "react";
import "../css/disk.css";

function disk(props) {
  return (
    <div className="Disk">
      <img className="forward" src="https://image.flaticon.com/icons/svg/709/709586.svg" alt="forward"></img>
      <img className="previous" src="https://image.flaticon.com/icons/svg/860/860790.svg" alt="previous"></img>
      <img className="play-pause" src="https://www.flaticon.com/premium-icon/icons/svg/3031/3031722.svg" alt="play-pause"></img>
      <span className="home" onClick={props.menuHandler}>HOME</span>
      <div className="midBtn" onClick={props.handleClick}></div>
    </div>
  );
}

export default disk;
