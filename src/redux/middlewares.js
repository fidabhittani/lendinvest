import { SET_INVEST } from "utils/constants";
import { getUpdatedLoan } from "utils/functions";

/**
 * Applications Middlwares
 * @param {*} store
 * @returns
 */

/**
 *  Handle Invest
 * @param {*} store
 * @returns
 */
export const handleInvest = (store) => (next) => (action) => {
  if (false) {
    const { data } = store.getState().app;
    const { id, investAmount } = action.payload;
    const existingLoan = data.find((loan) => loan.id === id);
    action.payload = getUpdatedLoan(existingLoan, investAmount);
  }
  next(action);
};
