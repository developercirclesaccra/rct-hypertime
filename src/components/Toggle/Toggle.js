import React, { Component } from 'react';
import './Toggle.css';

//CHILD COMPONENTS
import Clock from '../Clock/Clock';
import Timer from '../Timer/Timer'

class Toggle extends Component {
    constructor(props){
        super(props);

        this.state = {
            playButtonPressed: false,
            pauseButtonPressed: false,
            stopButtonPressed: false,
            resetButtonPressed: false,
            playImageSource: './Images/play.svg',
            pauseImageSource: './Images/pause.svg',
            stopImageSource: './Images/stop.svg',
            resetImageSource: './Images/reset.svg',
        };

        this.onClickPlay = this.onClickPlay.bind(this);
        this.onClickPause = this.onClickPause.bind(this);
        this.onClickStop = this.onClickStop.bind(this);
        this.onMouseOverReset = this.onMouseOverReset.bind(this);
        this.onMouseLeaveReset = this.onMouseLeaveReset.bind(this);
        this.onClickReset = this.onClickReset.bind(this);
    }

    onClickPlay(){
        if(!this.state.playButtonPressed){
        this.accessChild();
        this.setState(playButtonPressedValue => ({ playButtonPressed: !playButtonPressedValue.playButtonPressed}));

        this.setState({playImageSource: './Images/playActive.svg'});
        // if(!this.state.playButtonPressed){
        //     this.setState({playImageSource: './Images/playActive.svg'});
        // }
        // else {
        //     this.setState({playImageSource: './Images/play.svg'});
        // }

        //console.log(`Play Button Currently Clicked?: ${this.state.playButtonPressed}`);
    }
    else {
        return
    }
    }

    onClickPause(){
        if(!this.state.pauseButtonPressed){
            this.setState(pauseButtonPressedValue => ({ pauseButtonPressed: !pauseButtonPressedValue.pauseButtonPressed }));

        // if (!this.state.pauseButtonPressed) {
        //     this.setState({ pauseImageSource: './Images/pauseActive.svg' });
        // }
        // else {
        //     this.setState({ pauseImageSource: './Images/pause.svg' });
        // }
        this.setState({ pauseImageSource: './Images/pauseActive.svg' });
        }    
        else {
            return;
        }

        console.log(`Pause Button Currently Clicked?: ${this.state.pauseButtonPressed}`);
    }

    onClickStop(){
        if(!this.state.stopButtonPressed){
            this.setState({ stopImageSource: './Images/stopActive.svg' });
        }
        else {
            return
        }
        // this.setState(stopButtonPressedValue => ({ stopButtonPressed: !stopButtonPressedValue.stopButtonPressed }));

        // if (!this.state.stopButtonPressed) {
        //     this.setState({ stopImageSource: './Images/stopActive.svg' });
        // }
        // else {
        //     this.setState({ stopImageSource: './Images/stop.svg' });
        // }

        console.log(`Stop Button Currently Clicked?: ${this.state.stopButtonPressed}`);
    }

    onMouseOverReset(){             
        this.setState({ resetImageSource: './Images/resetActive.svg' });
    }

    onMouseLeaveReset() {
        this.setState({ resetImageSource: './Images/reset.svg' });
    }

    onClickReset() {
        console.log('Timer Resetted');
    }

    accessChild() {
        this.refs.child.accessChild();
        //console.log(this.refs.child)
    }

    render() {
        return (
            <div>       
                <Timer ref="child"/>
            <div className='d-flex justify-content-center pt-5'>
                <i className="play" ><img onClick={this.onClickPlay} src={require(`${this.state.playImageSource}`)} alt=""></img></i>
                <i className="pause"><img onClick={this.onClickPause} src={require(`${this.state.pauseImageSource}`)} alt=""></img></i>
                <i className="stop"><img onClick={this.onClickStop} src={require(`${this.state.stopImageSource}`)} alt=""></img></i>
                <i className="reset"><img onMouseOver={this.onMouseOverReset} onMouseLeave={this.onMouseLeaveReset} onClick={this.onClickReset} src={require(`${this.state.resetImageSource}`)} alt=""></img></i>
            </div>
            </div>
        );
    }
}

export default Toggle;
