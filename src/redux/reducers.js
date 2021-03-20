import { combineReducers } from "redux";
import { SET_INVEST } from "utils/constants";
import { mockData } from "utils";
import { getUpdatedLoan } from "utils/functions";

/**
 * Application reducers and exported as combined reducers
 */

const initialState = {
  data: mockData,
};

/**
 * app reducer
 * @param state initial state of reducer
 * @param action action to a reducer
 */
const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVEST:
      const newData = state.data.slice();
      const { id, investAmount } = action.payload;
      const existingLoan = newData.find((loan) => loan.id === id);
      const existingLoanIndex = newData.findIndex((loan) => loan.id === id);
      newData[existingLoanIndex] = getUpdatedLoan(existingLoan, investAmount);
      return {
        ...state,
        data: newData,
      };

    default:
      return state;
  }
};

export default combineReducers({
  app,
});
