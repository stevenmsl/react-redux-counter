// import * as actionTypes from "./actions";

// const initialState = {
//   counter: 0,
//   results: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.INCREMENT:
//       // one way to change the counter immutably
//       const newState = Object.assign({}, state);
//       newState.counter = state.counter + 1;
//       return newState;
//     case actionTypes.DECREMENT:
//       // use spread operator
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case actionTypes.ADD:
//       return {
//         ...state,
//         counter: state.counter + action.val,
//       };
//     case actionTypes.SUBTRACT:
//       return {
//         ...state,
//         counter: state.counter - action.val,
//       };
//     case actionTypes.STORE_RESULT:
//       return {
//         ...state,
//         // create a new array to change
//         // this property immutably
//         results: state.results.concat({ id: new Date(), value: state.counter }),
//       };
//     case actionTypes.DELETE_RESULT:
//       // filter will return an new array
//       const updatedArray = state.results.filter(
//         (result) => result.id !== action.resultElId
//       );
//       return {
//         ...state,
//         results: updatedArray,
//       };
//     default:
//   }
//   return state;
// };

// export default reducer;
