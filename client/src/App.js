import React from 'react';
import Dashboard from './components/materials/adminDashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './components/test';
import Products from './components/materials/products';
import Album from './components/materials/thankYou'
const App = () => (
    <Router>
        {/* Default Header thing can go here, before the Switch */}
        <div>
            <Switch>
                <Route exact path="/adminDashboard/Dashboard" component={Dashboard} />
                {/* If one were to go to localhost:3000/test vvvvv */}
                <Route exact path="/test" component={Test} />
                
                <Route component={Products} />
                <Route exact path="/album" component={Album} />
            </Switch>
        </div>
    </Router>
);

export default App;
