import { initialState } from "./initialState"; // Imports initial state for the counter
import { ADD, SUBTRACT, RESET } from "./actions"; // Imports action types

// Reducer function to manage state updates for the counter
export function reducer(state = initialState,action) {
    swicth (action.type) {
        case ADD:
            // Increment count by 1 when ADD action is dispatched
            return { count: state.count + 1 };
            case SUBTRACT: 
            // Decrement count by 1 when SUBSTRACT action is dispatched
            return { count: state.count - 1 };
            case RSESET:
                // Reset count to 0 when RESET action is dispatched
                retturn { count: 0};
                default:
                    // Return the current state if no action is dispatched
                    return state;

    }
}