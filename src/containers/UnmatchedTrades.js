import { connect } from 'react-redux';
import Trades from '../components/Trades';
import { changeStatus } from '../actions';

function getMatched(trades) {
  return trades.filter(trade => {
    return trade.status === 'UNMATCHED';
  });
}
const mapStateToPros = state => {
  return {
    trades: getMatched(state.trades)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: ssbtradeid => {
      dispatch(changeStatus(ssbtradeid));
    }
  };
};

const UnmatchedTrades = connect(mapStateToPros, mapDispatchToProps)(Trades);

export default UnmatchedTrades;
