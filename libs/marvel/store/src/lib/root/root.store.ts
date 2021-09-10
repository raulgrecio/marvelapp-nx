import createSagaMiddleware from 'redux-saga';
import { /*applyMiddleware,*/ configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
//import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './root.saga';
import { rootReducer } from './root.reducer';
import { initialRootState } from './root-state.initial';

declare const process: { env: { NODE_ENV: 'development' | 'production' } };

const isDevelopment = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();

const middleware = isDevelopment ? [sagaMiddleware, logger] : [sagaMiddleware];

const rootStore = configureStore({
  reducer: rootReducer,
  preloadedState: initialRootState,
  devTools: isDevelopment,
  middleware, /// NOTE: commented when using enhancers
  //enhancers: [composeWithDevTools(applyMiddleware(...middleware))],
});

sagaMiddleware.run(rootSaga);

export { rootStore };
