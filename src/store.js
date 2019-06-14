import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducer as resources, saga as resourceSaga } from "reresource";
import createSagaMiddleware from "redux-saga";

function rootReducer(state = {}, action) {
  return state;
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export default createStore(
  combineReducers({ rootReducer, resources }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(resourceSaga);
