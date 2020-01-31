import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PrivateRoute from './components/PrivateRoute';
import App from './pages/App';

const foo = () => (<div>Test</div>);

function AppRouter() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <PrivateRoute exact path="/" component={App} />
        <Route path="/login" component={foo} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
