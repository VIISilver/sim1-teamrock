import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ShelfB extends Component{
    render() {
      return (
        <div>
          <h1><Link to='/bins/B'>Shelf B</Link></h1>
         
        </div>
      );
    }
  }



export default ShelfB;