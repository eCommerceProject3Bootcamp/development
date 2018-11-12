import React from 'react';
import Dashboard from './components/materials/adminDashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';

const App = () => (
    <Router>
        {/* Default Header thing can go here, before the Switch */}
        <div>
            <Switch>
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route component={Dashboard} />
            </Switch>
        </div>
    </Router>
);

export default App;
