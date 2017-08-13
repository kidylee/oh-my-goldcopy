import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { addUnmatched } from '../actions';
import { connect } from 'react-redux';

let AddTrade = ({ dispatch }) => {
  let form = {};

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!form.SSBTradeID.value.trim()) {
          return;
        }
        dispatch(
          addUnmatched(
            form.SSBTradeID.value,
            form.TradeDate.value,
            form.Amount.value
          )
        );
      }}
    >
      <Header as="h2">New Trade</Header>
      <Form.Field>
        <label>SSB Trade ID</label>
        <input
          ref={node => {
            form.SSBTradeID = node;
          }}
          placeholder="SSB Trade ID"
        />
      </Form.Field>
      <Form.Field>
        <label>Trade Date</label>
        <input
          ref={node => {
            form.TradeDate = node;
          }}
          placeholder="2017/08/01"
        />
      </Form.Field>
      <Form.Field>
        <label>Amount</label>
        <input
          ref={node => {
            form.Amount = node;
          }}
          placeholder="30"
        />
      </Form.Field>

      <Button type="submit">Add</Button>
    </Form>
  );
};

AddTrade = connect()(AddTrade);
export default AddTrade;
