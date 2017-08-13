/*
 * action types
 */

export const ADD_UMATCHED = 'ADD_UMATCHED';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export function addUnmatched(ssbtradeid, tradedate, amount) {
  return {
    type: ADD_UMATCHED,
    ssbtradeid,
    tradedate,
    amount,
    status: 'UNMATCHED'
  };
}

export function changeStatus(ssbtradeid) {
  return { type: CHANGE_STATUS, ssbtradeid };
}
