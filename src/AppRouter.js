import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './pages/App';

function AppRouter() {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
