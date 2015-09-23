import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { ReduxRouter } from 'redux-router';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import configureStore from './configure-store';
import App from './containers/app';
import ContainerA from './containers/container-a';
import ContainerB from './containers/container-b';
import ContainerC from './containers/container-c';

const store = configureStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ReduxRouter>
        <Route path="/" component={App}>
          <Route path="container-a" component={ContainerA} />
          <Route path="container-b" component={ContainerB} />
          <Route path="container-c" component={ContainerC} />
        </Route>
      </ReduxRouter>
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
