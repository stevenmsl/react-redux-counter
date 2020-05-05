import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  // - Redux will only pass the piece of
  //   data (results) managed by this reducer
  console.log("result reducer state", state);
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // - create a new array and add a new item
        //   so the array can be modified immutably
        // - when you split reducer into multiple reducers,
        //   inside a given reducer you no longer have access
        //   to state data managed by other reducers.
        //   The container (Counter) needs to pass down the
        //   data in the payload to the reducer who needs the data.
        //   value: action.result
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      // filter will return an new array
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updatedArray,
      };
    default:
  }
  return state;
};

export default reducer;
