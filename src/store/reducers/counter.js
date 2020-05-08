import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
  message: "Test",
};

const reducer = (state = initialState, action) => {
  // - Redux will only pass the piece of
  //   data managed by this reducer
  // - You will not have access to state data
  //   define by other reducers
  // console.log("counter reducer state", state);
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    // another way to change the counter immutably
    // const newState = Object.assign({}, state);
    // newState.counter = state.counter + 1;
    // return newState;
    case actionTypes.DECREMENT:
      // use spread operator
      return updateObject(state, {
        ...state,
        counter: state.counter - 1,
      });
    case actionTypes.ADD:
      return updateObject(state, {
        counter: state.counter + action.val,
      });
    case actionTypes.SUBTRACT:
      return updateObject(state, {
        counter: state.counter - action.val,
      });
    default:
  }
  return state;
};

export default reducer;
