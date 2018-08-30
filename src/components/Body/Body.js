import React, { Component } from 'react';
import './Body.css';

//CHILD COMPONENTS
import Toggle from '../Toggle/Toggle'

class Body extends Component {
    render() {
        return (
            <div> 
                <Toggle />
            </div>
        );
    }
}

export default Body;
