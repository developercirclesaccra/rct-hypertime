import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Body from './components/Body/Body';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto bg-light mt-5 p-5 rounded">
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
