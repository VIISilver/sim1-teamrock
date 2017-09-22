import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Bin1 from './BinsC/Bin1';
import Bin2 from './BinsC/Bin2';
import Bin3 from './BinsC/Bin3';
import Bin4 from './BinsC/Bin4';
import Bin5 from './BinsC/Bin5';


class ShelfC extends Component{
  
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

export default ShelfC;