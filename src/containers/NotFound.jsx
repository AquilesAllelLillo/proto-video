import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <main className="bsod container">
      <h1 className="neg title"><span className="bg">Error - 404</span></h1>
      <p className="pNotFound">An error has occured, to continue:</p>
      <p className="pNotFound">* Return to our homepage.<br />
      * Send us an e-mail about this error and try later.</p>
      <nav className="nav">
        <Link to="https://aquilesallellillo.github.io/proto-video/" className="link">Index</Link>
        &nbsp;|&nbsp;
        <Link to="https://aquilesallellillo.github.io/proto-video/" className="link">Webmaster</Link>
      </nav>
    </main>
);

export default NotFound;