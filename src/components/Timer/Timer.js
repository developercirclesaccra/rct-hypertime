import React, { Component } from 'react';
import './Timer.css';
import Clock from '../Clock/Clock'


class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: "",
            minutes: "",
            seconds: "",
            timeToCountdown: 0
        }
    }

    changeAllTimeInputsToSeconds = () => {
        var timerHours = Number((parseInt(this.hours.value, 10) * 3600)) || 0;
        var timerMinutes = Number((parseInt(this.minutes.value, 10) * 60)) || 0;
        var timerSeconds = Number(parseInt(this.seconds.value, 10)) || 0;

        var allTimeInSeconds = timerHours + timerMinutes + timerSeconds;
        this.setState({ timeToCountdown: allTimeInSeconds});
    }

    grabHours = () => {
        this.setState({ hours: this.hours.value });
        this.changeAllTimeInputsToSeconds();
    }

    grabMinutes = () => {
        this.setState({ minutes: this.minutes.value });  
        this.changeAllTimeInputsToSeconds();
    }

    grabSeconds = () => {
        this.setState({ seconds: this.seconds.value });
        this.changeAllTimeInputsToSeconds();
    }

    accessChild() {
        console.log("Testing...")
        this.changeTime();
    }

    changeTime() {
        this.refs.child.clockTicking();
    }

    isDeleteKeyPressed(event) {
        var keyID = event.keyCode;
        switch (keyID) {
            case 8:
                console.log("backspace");               
                break;
            case 46:
                console.log("delete");
                break;
            default:
                break;
        }
    }

    render() {
        
        var timeLeft = this.state.timeToCountdown;
        var startCountdown = this.refs.child;
        
        return (
            <div>
                <Clock toggleState={this.props} ref="child" timeLeft={timeLeft} startCountdown={startCountdown} />
                <form>
                    <fieldset>
                        <div className="form-group row d-flex justify-content-center">
                            <div className="form-group p-1">
                                <label htmlFor="hours">Hours</label>
                                <input ref={hours => this.hours = hours} onChange={this.grabHours} onKeyUp={this.isDeleteKeyPressed} type="number" min="0" className="form-control" id="hours" placeholder="Enter hours" />
                            </div>
                            <div className="form-group p-1">
                                <label htmlFor="minutes">Minutes</label>
                                <input ref={minutes => this.minutes = minutes} onChange={this.grabMinutes} type="number" min="0" className="form-control" id="minutes" placeholder="Enter minutes" />
                            </div>
                            <div className="form-group p-1">
                                <label htmlFor="hours">Seconds</label>
                                <input ref={seconds => this.seconds = seconds} onChange={this.grabSeconds} type="number" min="0" className="form-control" id="hours" placeholder="Enter seconds" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Timer;
