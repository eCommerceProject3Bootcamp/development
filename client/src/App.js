import React from 'react';
import Dashboard from './components/materials/adminDashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import ShoppingCart from './components/ShoppingCart';

const App = () => (
    <Router>
        {/* Default Header thing can go here, before the Switch */}
        <div>
            <Switch>
                <Route exact path="/admin/" component={Dashboard} />
                <Route component={Main} />
                <Route exact path="/cart/" component={ShoppingCart} />
            </Switch>
        </div>
    </Router>
);

export default App;
