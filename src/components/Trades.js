import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import Trade from './Trade';
const Trades = ({ trades, onUnmatchedClick }) =>
  <div>
    <Header as="h2">Matched</Header>
    <Table celled>
      <Table.Header>
        <Table.HeaderCell>SSB Trade ID</Table.HeaderCell>
        <Table.HeaderCell>Trade Date</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        {trades.map(trade =>
          <Trade
            {...trade}
            onClick={
              onUnmatchedClick ? () => onUnmatchedClick(trade.ssbtradeid) : null
            }
          />
        )}
      </Table.Body>
    </Table>
  </div>;

export default Trades;
