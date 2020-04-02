import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/index";

import { watchDecrementAsync } from "./redux/sagas/sagas";
import { decrementAsync } from "./redux/action";
const Counter = props => {
  console.log("props>>>>>>>>>>>>>>>>>", props);
  return (
    <>
      {console.log(watchDecrementAsync)}
      <h1>Redux Saga</h1>
      <button onClick={() => props.increment()} style={{ margin: "1%" }}>
        Increment
      </button>
      <button onClick={() => props.decrement()} style={{ margin: "1%" }}>
        Decrement
      </button>
      <button style={{ margin: "1%" }} onClick={() => props.decrementAsync()}>
        Decrement After 1 second
      </button>
      <h1>clicked {props.value}</h1>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { value: state };
};
export default connect(mapStateToProps, {
  increment,
  decrement,
  decrementAsync
})(Counter);
