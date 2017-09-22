import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ShelfA extends Component{
    render() {
      return (
        <div>
          <h1><Link to='/bins/A'>Shelf A</Link></h1>
         
        </div>
      );
    }
  }

export default ShelfA;