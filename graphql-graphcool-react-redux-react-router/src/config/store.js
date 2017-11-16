import { routerReducer } from 'react-router-redux';
import { combineReducers, compose, createStore } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    combineReducers({
        routing: routerReducer,
    }),
    {},
    composeEnhancers(
        autoRehydrate(),
    ),
);

if (typeof window !== 'undefined') {
    persistStore(store);
}