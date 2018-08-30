import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            timeLeft: 5
        }

        this.timeIt = this.timeIt.bind(this);
    }

    
    timeIt() {

        this.setState({ hours: this.state.hours + 1 });
        this.setState({timeLeft: this.props.timeLeft - 1})
        setInterval(this.convertSeconds, 1000)
    }


    convertSeconds(time) {

        var minutes = Math.floor((time / 60) % 60);
        var hours = Math.trunc((time - (time % 60)) / 3600);
        var seconds = time % 60;

        return `${hours}:${minutes}:${seconds}`
    }

    render() {
        setInterval(() => {
            this.setState({timeLeft: this.state.timeLeft - 1})
        }, 1000)

        return (
            <div className="App-headerclock text-center">
                <p className="display-2">{this.convertSeconds(this.props.timeLeft - this.state.hours)}</p>
            </div>
        );
    }
}


export default Clock;
