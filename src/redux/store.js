/**
 * Application redux store with configured middlewares and sagas and reducers.
 */

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import { handleInvest } from "./middlewares";
//  import createSagaMiddleware from "redux-saga";
//  import rootSaga from "./sagas";

//  const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(handleInvest))
);
//  sagaMiddleWare.run(rootSaga);

export default store;
