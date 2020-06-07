// from https://github.com/minhta16/its-samange-react
// and https://github.com/hidjou/classsed-react-firebase-client
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// localStorage
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
//import asyncRequest from 'middlewares/asyncRequest';
import rootReducer from '../reducers';

const persistConfig = {
  // Root
  key: 'root',
  storage: storage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'auth', //save token
  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(
  persistedReducer,
  enhancer,
);

// Middleware: Redux Persist Persister
export const persistor = persistStore(store);
export default store;

