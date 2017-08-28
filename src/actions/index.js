/*
 * action types
 */
import fetch from 'isomorphic-fetch';

export const ADD_UMATCHED = 'ADD_UMATCHED';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const RECEIVE_TRADE = 'RECEIVE_TRADE';
export const FETCH_UNMATCHED = 'FETCH_UNMATCHED';
export const FETCH_UNMATCHED_SUCCESS = 'FETCH_UNMATCHED_SUCCESS';

function addNewTrade(ssbtradeid, tradedate, amount) {
  return {
    type: ADD_UMATCHED,
    ssbtradeid,
    tradedate,
    amount,
    status: 'UNMATCHED'
  };
}

function receiveTrade(json) {
  return Object.assign({ type: RECEIVE_TRADE }, json);
}

function receiveTrades(json) {
  let unmatched = json.map(t => {
    return Object.assign(...t.Member, t.Score);
  });
  return Object.assign({ type: FETCH_UNMATCHED_SUCCESS, unmatched });
}

export function changeStatus(ssbtradeid) {
  return function(dispatch, getState, websocket) {
    return websocket.send(JSON.stringify({ type: CHANGE_STATUS, ssbtradeid }));
  };
}

export function fetchUmatched() {
  return function(dispatch) {
    return fetch('http://127.0.0.1:8080/category/GC:UNMATCHED')
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => {
        dispatch(receiveTrades(json));
      });
  };
}

export function addUnmatched(ssbtradeid, tradedate, amount) {
  return function(dispatch) {
    return fetch('http://127.0.0.1:8080/category', {
      method: 'POST',
      body: JSON.stringify(addNewTrade(ssbtradeid, tradedate, amount))
    })
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json => {
        dispatch(receiveTrade(json));
      });
  };
}
