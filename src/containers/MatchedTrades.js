import { connect } from 'react-redux';
import Trades from '../components/Trades';

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
  return {};
};

const MatchedTrades = connect(mapStateToPros, mapDispatchToProps)(Trades);

export default MatchedTrades;
