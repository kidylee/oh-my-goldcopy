import React from 'react'; // eslint-disable-line
import './App.css';
import {Container, Grid} from 'semantic-ui-react';
import MatchingCounters from './containers/MatchingCounters';
import Unmatched from './containers/UnmatchedTrades';
import Matched from './containers/MatchedTrades';
import AddTrade from './containers/AddTrade';

if (!("Notification" in window)) {
  alert("This browser does not support desktop notification");
}

if (Notification.permission !== "denied") {
  Notification
    .requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
       new Notification("Hi there!");
      }
    })
}

const AttachedContentLayout = () => <div>
  <MatchingCounters/>
  <Container style={{
    padding: '3em 0em'
  }}>
    <Grid columns={2}>
      <Grid.Column>
        <Unmatched/>
      </Grid.Column>
      <Grid.Column>
        <Matched/>
      </Grid.Column>
    </Grid>
  </Container>
  <Container style={{
    padding: '3em 0em'
  }}>
    <AddTrade/>
  </Container>
</div>;

export default AttachedContentLayout;
