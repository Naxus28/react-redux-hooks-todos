
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
//import logger from 'redux-logger'
import { reduxBatch } from '@manaflair/redux-batch'
import reducer from '../reducers/index';

// const middleware = [...getDefaultMiddleware(), logger];
const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch]
});

export default store;
