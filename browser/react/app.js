'use strict';

import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import SidebarContainer from './containers/SidebarContainer'
import PlayerContainer from './containers/PlayerContainer'
import AlbumsContainer from './containers/AlbumsContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import AlbumContainer from './containers/AlbumContainer';
import ArtistContainer from './containers/ArtistContainer';
import SongsContainer from './containers/SongsContainer';
import ArtistAlbumsContainer from './containers/ArtistAlbumsContainer';


// Note: for the subroute /artists/:artistId/albums
// either use a cloneElement to pass down props (check Artist.js)
// or (not used) create new actions and attach it to the state
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>
        <IndexRoute component={AlbumsContainer} />
        <Route path='/albums' component={AlbumsContainer} />
        <Route path='/artists' component={ArtistsContainer} />
        <Route path='/albums/:albumId' component={AlbumContainer} />
        <Route path='/artists/:artistId' component={ArtistContainer}> 
          <Route path='/artists/:artistId/albums' component={AlbumsContainer}/>
          <Route path='/artists/:artistId/songs' component={SongsContainer}/>
        </Route>        
      </Route>
    </Router>
  </Provider>, document.getElementById('app'));