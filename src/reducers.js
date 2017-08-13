import { ADD_UMATCHED, CHANGE_TO_MATCHED } from './actions';
import { combineReducers } from 'redux';

const ohMyGoldCopy = combineReducers({
  trades
});

function trades(state = [], action) {
  switch (action.type) {
    case ADD_UMATCHED:
      return [
        ...state,
        {
          ssbtradeid: action.ssbtradeid,
          tradedate: action.tradedate,
          amount: action.amount,
          status: action.status
        }
      ];
    case CHANGE_TO_MATCHED:
      return state.map((trade, index) => {
        if (trade.ssbtradeid === action.ssbtradeid) {
          return Object.assign({}, trade, {
            status: action.status
          });
        }
        return trade;
      });
    default:
      return state;
  }
}

export default ohMyGoldCopy;
