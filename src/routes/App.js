import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <HashRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/player/:id" component={ Player } />
        <Route component={ NotFound } />
      </Switch>
    </Layout>
  </HashRouter>
);

export default App;