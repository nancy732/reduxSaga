import { all, call, delay, put, takeEvery } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Saga!");
}

export function* decrementAsync() {
  console.log("decrement");
  yield delay(1000);
  yield put({ type: "DECREMENT" });
}

export function* watchDecrementAsync() {
  yield takeEvery("DECREMENT_ASYNC", decrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(helloSaga), call(watchDecrementAsync)]);
}
