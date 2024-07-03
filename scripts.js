import { reducer } from "./reducer.js"; // Imports reducer function
import { ADD, SUBTRACT, RESET } from "./action.js"; // Imports action types

// Store implementation using the reducer
function createStore(reducer) {
  let currentState = reducer(undefined, {});
  let listeners = [];
  // Function to get current state and to dispatch actions then udate state
  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action); // Function that updates the state
      listeners.forEach((listener) => listener()); // Function that notifies all listeners
    },
    // Function to subscribe to state changes, add listener to array and then remore listener from the array
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
}

const store = createStore(reducer);

/*     Please open with browser console     */

store.subscribe(() => {
  console.log(store.getState());
});

// SCENARIO 1: Initial State Verification
console.log(store.getState());

// Scenario 2: Incrementing the Counter
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });

// Scenario 3: Decrementing the Counter
store.dispatch({ type: SUBTRACT });

// Scenario 4: Resetting the Counter
store.dispatch({ type: RESET });
