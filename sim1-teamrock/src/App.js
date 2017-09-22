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
        <h1>SHELFIE</h1>
        <span className="shelfA"><ShelfA/></span>
        <span className="shelfA"><ShelfB/></span>
        <span className="shelfA"><ShelfC/></span>
        <span className="shelfA"><ShelfD/></span>
      </div>
    );
  }
}

export default App;
