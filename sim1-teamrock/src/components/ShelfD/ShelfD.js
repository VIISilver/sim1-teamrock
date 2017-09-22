import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Bin1 from './BinsD/Bin1';
import Bin2 from './BinsD/Bin2';
import Bin3 from './BinsD/Bin3';
import Bin4 from './BinsD/Bin4';
import Bin5 from './BinsD/Bin5';


class ShelfD extends Component{
  
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

export default ShelfD;