'use strict';

import React from 'react';
import { Link } from 'react-router'

export default ({ go, location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <h4 className={location.match('album') ? 'menu-item active' : 'menu-item'}>
        <Link to="/albums" onClick={() => go('albums')}>ALBUMS</Link>
      </h4>
    </section>
    <section>
      <h4 className={location.match('artist') ? 'menu-item active' : 'menu-item'}>
        <Link to="/artists" onClick={() => go('artists')}>ARTISTS</Link>
      </h4>
    </section>
  </sidebar>
);