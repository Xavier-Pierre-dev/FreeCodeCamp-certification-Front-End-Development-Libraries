// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = "ADD";
const addMessage = (message) => {
  return {
    type : ADD,
    message : message
  };
};

const messageReducer = (initialState=[], action) => {
  switch (action.type){
    case ADD:
      return [...initialState, action.message];
      break;
    default:
      return initialState;
  }
}

const store = Redux.createStore(messageReducer);