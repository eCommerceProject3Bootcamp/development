import React from 'react';
import Dashboard from './components/materials/adminDashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => (
    <Router>
        {/* Default Header thing can go here, before the Switch */}
        <div>
            <Switch>
                <Route component={Dashboard} />
                <Route exact path="/admin/dashboard" component={Dashboard} />
            </Switch>
        </div>
    </Router>
);

export default App;
