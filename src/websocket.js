import { isNull } from 'lodash';

export let websocket = new WebSocket('ws://127.0.0.1:8080');

export function setupWebsocketEvent(store) {
  websocket.onopen = function() {
    console.log('Connected!');
  };

  websocket.onmessage = e => {
    try {
      let data = JSON.parse(e.data);
      if (!isNull(data['type'])) {
        store.dispatch(data);
      }
    } catch (e) {
      console.log(e.data);
    }
  };
}
