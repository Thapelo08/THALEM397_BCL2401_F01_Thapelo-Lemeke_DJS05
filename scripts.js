import { reducer } from "./reducer"; // Imports reducer function
import { ADD, SUBSTRACT, RESET } from "./actions"; // Imports action types

// Store implementation using the reducer
function createStore(reducer) {
  let currentState = reducer(undefined, {});
  let listeners = [];
  // Function to get current state and to dispatch actions then update state
  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);// Function that update the state
      listeners.forEach((listener) => listener()); // Function that notifies all listeners
    },
  }


}