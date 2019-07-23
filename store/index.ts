import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import { rootReducer } from './reducers';

const dev = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  collapsed: true
});
let middlewares: any[] = [];

if (dev) {
  middlewares = [...middlewares, logger];
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
