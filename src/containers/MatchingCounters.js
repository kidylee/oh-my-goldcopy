import { connect } from 'react-redux';
import moment from 'moment';
import Counters from '../components/Counters';

const getUnmatchedCount = trades => {
  let unmatched = trades.filter(t => {
    return t.status === 'UNMATCHED';
  });

  return unmatched.length;
};

const getUnmatchedTodayCount = trades => {
  const today = moment();

  let unmatched = trades.filter(t => {
    let tradeDate = moment(t.tradedate);

    return t.status === 'UNMATCHED' && today.isSame(tradeDate, 'day');
  });

  return unmatched.length;
};
const getUnmatchedYesterdayCount = trades => {
  const yesterday = moment().add(-1, 'd');
  let unmatched = trades.filter(t => {
    let tradeDate = moment(t.tradedate);

    return t.status === 'UNMATCHED' && yesterday.isSame(tradeDate, 'day');
  });

  return unmatched.length;
};

const getLastWeekCount = trades => {
  const lastWeek = moment().add(-1, 'weeks').startOf('isoWeek');

  let unmatched = trades.filter(t => {
    let tradeDate = moment(t.tradedate);

    return t.status === 'UNMATCHED' && lastWeek.isSame(tradeDate, 'week');
  });

  return unmatched.length;
};

const mapStateToPros = state => {
  return {
    unmatched: getUnmatchedCount(state.trades),
    today: getUnmatchedTodayCount(state.trades),
    yesterday: getUnmatchedYesterdayCount(state.trades),
    lastWeek: getLastWeekCount(state.trades)
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const MatchingCounters = connect(mapStateToPros, mapDispatchToProps)(Counters);

export default MatchingCounters;
