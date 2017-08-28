import ohMyGoldCopy from './reducers';
import { compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Reactotron from './ReactotronConfig';
import { websocket, setupWebsocketEvent } from './websocket';

const store = Reactotron.createStore(
  ohMyGoldCopy,
  compose(applyMiddleware(thunk.withExtraArgument(websocket), createLogger()))
);

setupWebsocketEvent(store);

export default store;
