import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Bin1 from './BinsB/Bin1';
import Bin2 from './BinsB/Bin2';
import Bin3 from './BinsB/Bin3';
import Bin4 from './BinsB/Bin4';
import Bin5 from './BinsB/Bin5';


class ShelfB extends Component{
  
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

export default ShelfB;