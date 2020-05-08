import * as actionTypes from "./actionTypes";
export const saveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result,
  };
};

// return a function that will be called by thunk
export const storeResult = (result) => {
  // dispatc and getState will be passed in by thunk
  return (dispatch, getState) => {
    setTimeout(() => {
      // use getState with discretion. You can also put
      // the needed data in the payload when dispatching
      // an action instead of accessing the state here
      // using getState
      const oldCounter = getState().ctr.counter;
      console.log("old counter ", oldCounter);
      // dispatch the action synchronously
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (resultElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId,
  };
};
