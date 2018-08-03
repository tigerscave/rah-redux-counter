import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './modules';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(),
);

export default function configureStore() {
  return store;
}
