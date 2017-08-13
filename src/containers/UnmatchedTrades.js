import { connect } from 'react-redux';
import Trades from '../components/Trades';
import { changeToMatched } from '../actions';

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
    onUnmatchedClick: ssbtradeid => {
      dispatch(changeToMatched(ssbtradeid));
    }
  };
};

const UnmatchedTrades = connect(mapStateToPros, mapDispatchToProps)(Trades);

export default UnmatchedTrades;
