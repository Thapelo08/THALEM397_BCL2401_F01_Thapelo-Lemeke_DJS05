# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

**Objective**
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.

**Tally Counter Store**
This code implements a simple store for managing the state of a tally counter. The store follows the Redux pattern, consisting of a reducer function and methods for managing state and notifying subscribers of state changes.

***Store Class***
The Store class manages the state and provides methods for accessing and updating it. Initializes the store with a reducer function and an initial state.Returns the current state. The dispatch Updates the state by applying the reducer function to the current state and the dispatched action. It notifies all subscribed listeners of the state change.Subscribes a listener function to state changes. Returns an unsubscribe function to remove the listener.
***Reducer Function***
The tallyReducer function is a pure reducer, specifying how the state changes in response to dispatched actions. It takes the current state and an action, returning the new state based on the action type.

***Usage***
Instantiate a new store with the Store class, providing the tallyReducer function and an initial state of 0 for the tally counter.Subscribe a listener function to be notified of state changes. The listener logs the new state to the console in this example.Dispatch actions (ADD, SUBTRACT, RESET) to update the state of the tally counter.Optionally, unsubscribe from further state changes to stop receiving notifications.

***CHALLENGES FACED***
-When i had to run through terminal the numbers were not appearing, reason being is that i hadn't put the getState method