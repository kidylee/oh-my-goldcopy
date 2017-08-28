import { ADD_UMATCHED, CHANGE_STATUS, RECEIVE_TRADE } from './actions';
import { combineReducers } from 'redux';

const ohMyGoldCopy = combineReducers({
  trades
});

function trades(state = [], action) {
  switch (action.type) {
    case RECEIVE_TRADE:
    case ADD_UMATCHED:
      new Notification('New Unmatched Transaction');
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
      return state.map(trade => {
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
