import { connect } from 'react-redux';
import Trades from '../components/Trades';
import { changeStatus } from '../actions';

function getMatched(trades) {
  return trades.filter(trade => {
    return trade.status === 'MATCHED';
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

const MatchedTrades = connect(mapStateToPros, mapDispatchToProps)(Trades);

export default MatchedTrades;
