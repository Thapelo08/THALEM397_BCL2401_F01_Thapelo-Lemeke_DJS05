import { reducer } from "./reducer"; // Imports reducer function
import { ADD, SUBSTRACT, RESET } from "./actions"; // Imports action types

// Store implementation using the reducer
function createStore(reducer) {
  let currentState = reducer(undefined, {});
  let listeners = [];
  

}