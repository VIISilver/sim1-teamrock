import React from "react";
import { Switch, Route } from "react-router-dom";

import App from './App.js';
import ShelfA from './components/ShelfA/ShelfA.js'
import ShelfB from './components/ShelfB/ShelfB.js'
import ShelfC from './components/ShelfC/ShelfC.js'
import ShelfD from './components/ShelfD/ShelfD.js'
import Bin1 from './components/ShelfA/BInsA/Bin1.js'
import Bin2 from './components/ShelfA/BInsA/Bin2.js'
import Bin3 from './components/ShelfA/BInsA/Bin3.js'
import Bin4 from './components/ShelfA/BInsA/Bin4.js'
import Bin5 from './components/ShelfA/BInsA/Bin5.js'

export default (
    <div>
        <Switch>
            <Route component={App} path='/' exact />
        </Switch>
        <Switch>
            <Route component={ShelfA} path='/bIns/A' /></Switch>
        <Switch>
            <Route component={ShelfB} path='/bIns/B' /></Switch>
        <Switch> 
            <Route component={ShelfC} path='/bIns/C' /></Switch>
        <Switch>
            <Route component={ShelfD} path='/bIns/D' /> </Switch>

        <Switch>
            <Route component={Bin1} path='/bin/A1' />
            <Route component={Bin2} path='/bin/A2' />
            <Route component={Bin3} path='/bin/A3' />
            <Route component={Bin4} path='/bin/A4' />
            <Route component={Bin5} path='/bin/A5' />
        </Switch>
    </div>
)