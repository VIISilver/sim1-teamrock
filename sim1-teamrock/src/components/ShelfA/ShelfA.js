import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Bin1 from './BInsA/Bin1';
import Bin2 from './BInsA/Bin2';
import Bin3 from './BInsA/Bin3';
import Bin4 from './BInsA/Bin4';
import Bin5 from './BInsA/Bin5';

class ShelfA extends Component{
  
    render() {
      return (
        <div>
          <h1><Link to='/bins/A'>Shelf A</Link></h1>
          <Bin1/>
          <Bin2/>
          <Bin3/>
          <Bin4/>
          <Bin5/>
        </div>
      );
    }
  }

export default ShelfA;