import React, { Component } from 'react';
import GoogleApiWrapper from './Map'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<GoogleApiWrapper />
      </div>
    );
  }
}

export default App;
