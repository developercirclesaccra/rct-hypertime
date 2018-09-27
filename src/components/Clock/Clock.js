import React, { Component } from 'react';
import './Clock.css';


var timerID;

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            timeLeft: ""
        }
    }

    timeIt = () => {

        this.setState({ hours: this.state.hours + 1 });
        this.setState({ timeLeft: this.props.timeLeft - this.state.hours })
    }

    clockTicking() { 
        timerID = setInterval(this.timeIt, 1000)
    }

    convertSeconds(time) {
        let hours = Math.trunc((time - (time % 60)) / 3600);
        let minutes = Math.floor((time / 60) % 60);      
        let seconds = time % 60;

        if (this.state.timeLeft === 0) {
            clearInterval(timerID)          
        }
        return `${hours}:${minutes}:${seconds}`
    }


    render() {
        return (
            <div className="App-headerclock text-center">
                <p className="display-2">{this.convertSeconds(this.props.timeLeft - this.state.hours)}</p>
            </div>
        );
    }
}


export default Clock;
