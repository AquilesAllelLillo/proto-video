import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="https://aquilesallellillo.github.io/proto-video/" component={ Home } />
        <Route exact path="https://aquilesallellillo.github.io/proto-video/login" component={ Login } />
        <Route exact path="https://aquilesallellillo.github.io/proto-video/register" component={ Register } />
        <Route exact path="https://aquilesallellillo.github.io/proto-video/player/:id" component={ Player } />
        <Route component={ NotFound } />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;