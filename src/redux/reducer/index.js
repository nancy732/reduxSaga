import { INCREMENT, DECREMENT, DECREMENT_ASYNC } from "../types";
const redux = require("redux");

export const counter = (state = 0, action) => {
  console.log(action.type);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
