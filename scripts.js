import { store } from "./store";

// Store class to manage state
class Store {
    // Constructor initializes the store with a reducer and an initial state
    constructor(reducer, initialState) {
      this.reducer = reducer;
      this.state = initialState;
      this.listeners = []; // List of subscribed listeners
    }
  
    // Method to get the current state
    getState() {
      return this.state;
    }
  
    // Method to dispatch an action, updating the state and notifying listeners
    dispatch(action) {
      this.state = this.reducer(this.state, action); // Update state using the reducer
      this.listeners.forEach((listener) => listener(this.state)); // Notify all listeners
    }
  
    // Method to subscribe a listener to state changes
    subscribe(listener) {
      this.listeners.push(listener); // Add the listener to the list
      return () => {
        // Return an unsubscribe function
        this.listeners = this.listeners.filter((l) => l !== listener); // Remove the listener
      };
    }
  }
  
  // Tally Counter Reducer (Pure Function)
  // Defines how the state changes in response to actions
  const tallyReducer = (state = 0, action) => {
    switch (action.type) {
      case "ADD":
        return state + 1; // Increment state
      case "SUBTRACT":
        return state - 1; // Decrement state
      case "RESET":
        return 0; // Reset state to initial value
      default:
        return state; // Return current state for unknown actions
    }
  };
  
  // Create the Store
  const store = new Store(tallyReducer, 0); // Initial state is 0
  
  // Subscribe to Changes
  const unsubscribe = store.subscribe((newState) => {
    console.log("State updated:", newState); // Log new state to the console
  });
  
  // Test Scenarios
  console.log("Initial state:", store.getState()); // Scenario 1: Log initial state
  
  store.dispatch({ type: "ADD" });
  store.dispatch({ type: "ADD" }); // Scenario 2: Dispatch ADD actions, increment state twice
  
  store.dispatch({ type: "SUBTRACT" }); // Scenario 3: Dispatch SUBTRACT action, decrement state
  
  store.dispatch({ type: "RESET" }); // Scenario 4: Dispatch RESET action, reset state to 0
  
  // Unsubscribe
  unsubscribe(); // Remove the subscribed listener
  
