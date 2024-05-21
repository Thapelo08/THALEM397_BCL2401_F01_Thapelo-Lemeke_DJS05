// Scripts.js

// Store class to manage state
class Store {
    // Constructor initializes the store with a reducer and an initial state
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = []; // List of subscribed listeners
    }

    // Method to ge the current state
    getState() {
       return this.state;
    }
 // method to dispatch an action, updating the state and notifying listeners
 dispatch(action) {
    this.state = this.reducer(this.state, action); // update state using the reducer
    this.listeners.forEach((listener) => listener(this.state)); // notify all listeners
 }

 // method to subscribe a listener to state changes
 subscribe(listener) {
    this.listeners.push(listener); // add the listener to the list
    return () => {
        //Return an unsubscribe function
        this.listeners = this.listeners.filter((1) => 1 !== listener); // Remove the listener
    };
 }
    
}

// Tally Counter Reducer (Pure Function)
// Defines how the state chanages in response to actions

const tallyReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1; // increment state
            case "SUBSTRACT":
                return state -1; //Decrement state
                case "RESET":
                    return 0; //Reset state to initial value
                    default:
                        return state;  // Return current state for unknown actions
    }
};

// Create the store

const store = new Store(tallyReducer, 0); // Initial state is 0



