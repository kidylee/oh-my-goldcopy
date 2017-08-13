import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import { compose, applyMiddleware } from 'redux';
import ohMyGoldCopy from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Reactotron from './ReactotronConfig';

const store = Reactotron.createStore(
  ohMyGoldCopy,
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
