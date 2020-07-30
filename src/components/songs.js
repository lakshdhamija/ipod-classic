import React from "react";
import '../css/display.css';
import AllSongs from '../components/all_songs';
import TopCharts from '../components/top_charts';
import ZingTouch from 'zingtouch';

class Songs extends React.Component {
    state = {
        dispAllSongs: false,
        dispTopCharts: false,
        dispCurrPage: true,
        degree: 0
    }
    componentDidMount() {
        this.rotation();
        var midBtn = document.getElementsByClassName("midBtn")[0];
        midBtn.addEventListener("click", this.select);
    }
    componentWillUnmount() {
        this.setState({
            dispAllSongs: false,
            dispTopCharts: false,
            dispCurrPage: true
        });
    }
    rotation = function () { // Function to make our disk rotate
        const allSongs = document.getElementsByClassName('all-songs')[0];
        const topCharts = document.getElementsByClassName("top-charts")[0];
        const disk = document.getElementsByClassName("Disk")[0];
        var turnRegion = ZingTouch.Region(disk);
        turnRegion.bind(disk, 'rotate', (e) => {
            if (e.detail.angle - this.state.degree > 15 || e.detail.angle - this.state.degree < -15) {
                if (e.detail.distanceFromLast > 0) {
                    if (this.state.dispCurrPage) {
                        if (allSongs.classList.contains('highlight')) {
                            allSongs.classList.remove('highlight');
                            topCharts.classList.add('highlight');
                        } else if (topCharts.classList.contains('highlight')) {
                            topCharts.classList.remove('highlight');
                            allSongs.classList.add('highlight');
                        }
                    }
                } else if (e.detail.distanceFromLast < 0) {
                    if (this.state.dispCurrPage) {
                        if (allSongs.classList.contains('highlight')) {
                            allSongs.classList.remove('highlight');
                            topCharts.classList.add('highlight');
                        } else if (topCharts.classList.contains('highlight')) {
                            topCharts.classList.remove('highlight');
                            allSongs.classList.add('highlight');
                        }
                    }
                }
            }
        });
    };
    select = () => {
        var allSongs = document.querySelector('.all-songs');
        var topCharts = document.querySelector('.top-charts');
        if (this.state.dispCurrPage) {
            this.setState({
                dispAllSongs: false,
                dispTopCharts: false,
                dispCurrPage: false
            });
            if (allSongs.classList.contains('highlight')) {
                this.setState({
                    dispAllSongs: true
                });
            }
            if (topCharts.classList.contains('highlight')) {
                this.setState({
                    dispTopCharts: true
                });
            }
        }
    }
    render() {
        const { dispCurrPage, dispAllSongs, dispTopCharts } = this.state;
        return (
            <div className='Display'>
                {dispCurrPage &&
                    <div className="menu">
                        <div className="menuTitle">Songs</div>
                        <div className="all-songs highlight">All Songs</div>
                        <div className="top-charts">Top Charts</div>
                    </div>
                }
                {dispAllSongs && <AllSongs />}
                {dispTopCharts && <TopCharts />}
            </div>
        )
    }
}
export default Songs;