import { createStore } from "redux";
import { counter } from "./reducer/index";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(counter, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
