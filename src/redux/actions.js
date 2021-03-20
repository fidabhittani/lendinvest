/**
 *  Redux Actions
 */
import { SET_INVEST } from "utils/constants";

export const setInvest = (payload) => {
  return {
    type: SET_INVEST,
    payload,
  };
};
