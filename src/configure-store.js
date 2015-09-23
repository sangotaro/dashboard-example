import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { devTools } from 'redux-devtools';

const reducer = combineReducers({
  router: routerStateReducer
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk, createLogger()),
  reduxReactRouter({createHistory}),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}
