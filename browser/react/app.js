'use strict';

import React from 'react';
import Router from 'react-router'
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import AppContainer from './containers/AppContainer';

class BaseRoute extends React.Component {
  render() {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <SidebarContainer/>
        </div>
        <div className="col-xs-10">
          {this.props.children}
        </div>
        <PlayerContainer/>
      </div>
    )
  }

}

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={BaseRoute}></Route>
  </Router>
</Provider>, document.getElementById('app'));