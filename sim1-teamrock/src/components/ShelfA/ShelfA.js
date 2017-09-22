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
          <span><Bin1/></span>
          <span><Bin2/></span>
          <span><Bin3/></span>
          <span><Bin4/></span>
          <span><Bin5/></span>
          
          
        </div>
      );
    }
  }

export default ShelfA;