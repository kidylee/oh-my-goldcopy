import { ADD_UMATCHED, CHANGE_STATUS } from './actions';
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
    case CHANGE_STATUS:
      return state.map((trade, index) => {
        if (trade.ssbtradeid === action.ssbtradeid) {
          return Object.assign({}, trade, {
            status: trade.status === 'MATCHED' ? 'UNMATCHED' : 'MATCHED'
          });
        }
        return trade;
      });
    default:
      return state;
  }
}

export default ohMyGoldCopy;
