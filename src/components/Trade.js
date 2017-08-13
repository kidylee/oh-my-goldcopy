import React from 'react';
import { Table } from 'semantic-ui-react';

const Trade = ({ ssbtradeid, tradedate, amount, status, onClick }) =>
  <Table.Row onClick={onClick}>
    <Table.Cell>
      {ssbtradeid}
    </Table.Cell>
    <Table.Cell>
      {tradedate}
    </Table.Cell>
    <Table.Cell>
      {amount}
    </Table.Cell>
    <Table.Cell>
      {status}
    </Table.Cell>
  </Table.Row>;

export default Trade;
