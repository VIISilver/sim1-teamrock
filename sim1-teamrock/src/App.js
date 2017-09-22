import React, { Component } from 'react';
import './App.css';
import ShelfA from './components/ShelfA/ShelfA.js';
import ShelfB from './components/ShelfB/ShelfB.js';
import ShelfC from './components/ShelfC/ShelfC.js';
import ShelfD from './components/ShelfD/ShelfD.js';
import router from './router.js';
import {Link} from 'react-router-dom';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        
        <h1 className="shelfie">SHELFIE</h1>
        {router}
        <div className="boxes">
        <div className="shelfA"><Link to='Bins/A'>ShelfA</Link></div>
        <div className="shelfB"><Link to='Bins/A'>ShelfB</Link></div>
        <div className="shelfC"><Link to='Bins/A'>ShelfC</Link></div>
        <div className="shelfD"><Link to='Bins/A'>ShelfD</Link></div>
        </div>
      </div>
    );
  }
}

export default App;
