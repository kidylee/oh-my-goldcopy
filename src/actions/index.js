/*
 * action types
 */

export const ADD_UMATCHED = 'ADD_UMATCHED';
export const CHANGE_TO_MATCHED = 'CHANGE_TO_MATCHED';

export function addUnmatched(ssbtradeid, tradedate, amount) {
  return {
    type: ADD_UMATCHED,
    ssbtradeid,
    tradedate,
    amount,
    status: 'UNMATCHED'
  };
}

export function changeToMatched(ssbtradeid) {
  return { type: CHANGE_TO_MATCHED, ssbtradeid, status: 'MATCHED' };
}
