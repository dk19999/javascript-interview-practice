//Zeta Frontend Engineer Interview experience

// You are asked to design a HistoryManager class in JavaScript to mimic the undo and redo behavior found in text editors or drawing applications.

// The class should support:

// Adding a new state to history
// Undoing to the previous state
// Redoing to a state that was undone
// Viewing the current state
// Once a new state is added after undo operations, all "future" states should be discarded (just like in a real undo/redo stack).

// Example Usage:

// const history = new HistoryManager();
// history.addState("State 1");
// history.addState("State 2");
// history.addState("State 3");

// console.log(history.undo()); // "State 2"
// console.log(history.undo()); // "State 1"
// console.log(history.redo()); // "State 2"

// history.addState("State 4");
// console.log(history.redo()); // null (future states discarded)
// console.log(history.getCurrentState()); // "State 4"


class HistoryManager {
  constructor() {
    this.states = [];
    this.redoStates = [];
  }

  getCurrentState() {
    return this.states[this.states.length - 1] || null;
  }

  addState(newState) {
    this.states.push(newState);
    this.redoStates = []; 
    return this;
  }

  undo() {
    if (this.states.length <= 1) {
      return null; 
    }
    
    const current = this.states.pop();
    this.redoStates.push(current);
    return this.getCurrentState();
  }

  redo() {
    if (!this.redoStates.length) {
      return null;
    }

    const state = this.redoStates.pop();
    this.states.push(state);
    return this.getCurrentState();
  }

}