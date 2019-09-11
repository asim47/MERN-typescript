import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./components/App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";

import reducer from "./store/reducer";
import thunk from "redux-thunk";

import { createBrowserHistory } from 'history';

export const history: any = createBrowserHistory()

const store: any = createStore(reducer, compose(
  applyMiddleware(thunk)
));


ReactDOM.render(
  <Router history={history}>
    <Provider store={store} >
      <App/>
    </Provider>
  </Router>,
  document.getElementById("app")
);
