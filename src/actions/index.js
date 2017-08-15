/*
 * action types
 */

export const ADD_UMATCHED = 'ADD_UMATCHED';
export const CHANGE_STATUS = 'CHANGE_STATUS';

function addNewTrade(ssbtradeid, tradedate, amount) {
  return {type: ADD_UMATCHED, ssbtradeid, tradedate, amount, status: 'UNMATCHED'};
}

export function changeStatus(ssbtradeid) {
  return function (dispatch, getState, websocket) {
    return websocket.send(JSON.stringify({type: CHANGE_STATUS, ssbtradeid}));

  }

}

export function addUnmatched(ssbtradeid, tradedate, amount) {
  return function (dispatch, getState, websocket) {

    return websocket.send(JSON.stringify(addNewTrade(ssbtradeid, tradedate, amount)))
  }
}