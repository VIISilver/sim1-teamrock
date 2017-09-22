import React, { Component } from 'react';
import './App.css';
import ShelfA from './components/ShelfA/ShelfA.js';
import ShelfB from './components/ShelfB/ShelfB.js';
import ShelfC from './components/ShelfC/ShelfC.js';
import ShelfD from './components/ShelfD/ShelfD.js';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        <h1 className="shelfie">SHELFIE</h1>
        <span className="shelfA"><ShelfA/></span>
        <span className="shelfB"><ShelfB/></span>
        <span className="shelfC"><ShelfC/></span>
        <span className="shelfD"><ShelfD/></span>
      </div>
    );
  }
}

export default App;
