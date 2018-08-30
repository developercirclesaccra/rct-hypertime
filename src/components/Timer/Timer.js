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
        };

        this.grabHours = this.grabHours.bind(this);
        this.grabMinutes = this.grabMinutes.bind(this);
        this.grabSeconds = this.grabSeconds.bind(this);
        this.changeAllTimeInputsToSeconds = this.changeAllTimeInputsToSeconds.bind(this);


    }

    changeAllTimeInputsToSeconds() {
        var timerHours = Number((parseInt(this.hours.value, 10) * 3600)) || 0
        var timerMinutes = Number((parseInt(this.minutes.value, 10) * 60)) || 0
        var timerSeconds = Number(parseInt(this.seconds.value, 10)) || 0

        var allTimeInSeconds = timerHours + timerMinutes + timerSeconds;
        this.setState({ timeToCountdown: allTimeInSeconds })
        console.log(this.state.timeToCountDown);


    }


    grabHours() {
        this.setState({ hours: this.hours.value });
        this.changeAllTimeInputsToSeconds();
    }

    grabMinutes() {
        this.setState({ minutes: this.minutes.value });
        //console.log(parseInt(this.minutes.value, 10))   
        this.changeAllTimeInputsToSeconds();
    }

    grabSeconds() {
        this.setState({ seconds: this.seconds.value });
        //console.log(parseInt(this.seconds.value, 10));
        this.changeAllTimeInputsToSeconds();
    }

    accessChild() {
        console.log("Testing...")
        this.changeTime();
    }

    changeTime() {
        this.refs.child.timeIt();
    }

    render() {
        var timeLeft = this.state.timeToCountdown;
        var startCountdown = this.refs.child;
        //console.log(this.refs.child)
        return (
            <div>
                <Clock ref="child" timeLeft={timeLeft} startCountdown={startCountdown} />
                <form>
                    <fieldset>
                        <div className="form-group row d-flex justify-content-center">
                            <div className="form-group p-1">
                                <label htmlFor="hours">Hours</label>
                                <input ref={hours => this.hours = hours} onChange={this.grabHours} type="number" className="form-control" id="hours" placeholder="Enter hours" />
                            </div>
                            <div className="form-group p-1">
                                <label htmlFor="minutes">Minutes</label>
                                <input ref={minutes => this.minutes = minutes} onChange={this.grabMinutes} type="number" className="form-control" id="minutes" placeholder="Enter minutes" />
                            </div>
                            <div className="form-group p-1">
                                <label htmlFor="hours">Seconds</label>
                                <input ref={seconds => this.seconds = seconds} onChange={this.grabSeconds} type="number" className="form-control" id="hours" placeholder="Enter seconds" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Timer;
