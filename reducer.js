import { initialState } from "./initialState"; // Imports initial state for the counter
import { ADD, SUBTRACT, RESET } from "./actions"; // Imports action types

// Reducer function to manage state updates for the counter
export function reducer(state = initialState,action) {
    swicth (action.type) {
        case ADD:
            // Increment count by 1 when ADD action is dispateched
            return { count: state.count + 1 };
            

    }
}