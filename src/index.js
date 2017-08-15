import React from 'react'; // eslint-disable-line
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {compose, applyMiddleware} from 'redux';
import ohMyGoldCopy from './reducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import Reactotron from './ReactotronConfig';
import {isNull} from 'lodash';

let websocket = new WebSocket("ws://127.0.0.1:8080")
websocket.onopen = function () {
  console.log('Connected!')
}

websocket.onmessage = e => {
  try {
    let data = JSON.parse(e.data)
    if (!isNull(data['type'])) {
      store.dispatch(data);
    }
  } catch (e) {
    console.log(e.data)
  }

}

const store = Reactotron.createStore(ohMyGoldCopy, compose(applyMiddleware(thunk.withExtraArgument(websocket), createLogger())));

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
