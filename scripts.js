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
    // Function to subscribe to state changes, add listener to array and then remore listener from the array
    subscribe: (listener) => {
      listeners.push(listener);
      reurn () => {
        listeners = listeners.filter((1) => 1 !== listener);
      };
      },
    };
}

const store = createStore(reducer);

/* Open this with broser console */
store.subscribe(() => {
  console.log(store.getState());
});

// Scenaro 1: Initial State verification
console.log(store.getState());

// Scenario 2: Increment the counter
store.dispatch({ type: ADD});
store.dispatch({ type: ADD });

// Scenario 3: Dcrement the counter
store.dispatch({ type: SUBSTRACT });

// Senario 4: Resetting the counter
store.dispatch({ type: RESET });
