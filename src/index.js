import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import reduxPromise from "redux-promise";

import reducers from "./reducers";
import PostsIndexContainer from "./containers/PostsIndexContainer";

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndexContainer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
