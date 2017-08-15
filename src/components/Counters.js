import React from 'react'; // eslint-disable-line
import {Container, Header, Table} from 'semantic-ui-react';

const Counters = ({unmatched, today, yesterday, lastWeek}) => {

  return (
    <div>
      <Container style={{
        padding: '5em 0em'
      }}>
        <Header as="h2">Counters</Header>
        <Table celled>
          <Table.Header>
            <Table.HeaderCell>Unmatched</Table.HeaderCell>
            <Table.HeaderCell>Today</Table.HeaderCell>
            <Table.HeaderCell>Yesterday</Table.HeaderCell>
            <Table.HeaderCell>Last Week</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {unmatched}
              </Table.Cell>
              <Table.Cell>
                {today}
              </Table.Cell>
              <Table.Cell>
                {yesterday}
              </Table.Cell>
              <Table.Cell>
                {lastWeek}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div>
  )
}

export default Counters;
