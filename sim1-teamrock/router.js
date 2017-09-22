import React from "react";
import { Switch, Route } from "react-router-dom";

export default (
    <div>
        <Switch>
            <Route component={App} path='/' exact />
            <Route component={ShelfA} path='/bins/A' />
            <Route component={A1} path='/bin/A1' />
            <Route component={A2} path='/bin/A2' />
            <Route component={A3} path='/bin/A3' />
            <Route component={A4} path='/bin/A4' />
            <Route component={A5} path='/bin/A5' />
        </Switch>
    </div>
)