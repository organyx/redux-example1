import * as actionTypes from '../actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.payload.result })
      }

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      // state.results.splice(id, 1)
      const newArray = state.results.filter((result) => result.id !== action.resultElID);
      return {
        ...state,
        results: newArray
      }
    default:
      return state
  }
};

export default reducer;