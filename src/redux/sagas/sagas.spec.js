import test from "tape";

import { delay } from "redux-saga";
import { put, call } from "redux-saga/effects";
import { decrementAsync } from "./sagas";

test("incrementAsync Saga test", t => {
  const generator = decrementAsync();

  t.deepEqual(
    generator.next().value,
    call(delay, 1000),
    "counter Saga must call delay(1000)"
  );

  t.deepEqual(
    generator.next().value,
    put({ type: "DECREMENT" }),
    "counter Saga must dispatch an INCREMENT action"
  );

  t.deepEqual(
    generator.next(),
    { done: true, value: undefined },
    "counter Saga must be done"
  );

  t.end();
});
