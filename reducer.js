import { initialState } from "./initialState.js"; // Imports initial state for the counter
import { ADD, SUBTRACT, RESET } from "./action.js"; // Imports action types

// Reducer function to manage state updates for the counter
export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      // Increment count by 1 when ADD action is dispatched
      return { count: state.count + 1 };
    case SUBTRACT:
      // Decrement count by 1 when SUBTRACT action is dispatched
      return { count: state.count - 1 };
    case RESET:
      // Reset count to 0 when RESET action is dispatched
      return { count: 0 };
    default:
      // Return current state if action type is not recognized
      return state;
  }
}