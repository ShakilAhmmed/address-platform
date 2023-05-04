import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {persistStore} from 'redux-persist';
import reducers from '../RootReducers/index';

const createStoreData = (initialState = {}) => {
    let store;

    const composeEnhancers = composeWithDevTools({
        trace: true,
        traceLimit: 25,
    });

    const {persistReducer} = require('redux-persist');
    const storage = require('redux-persist/lib/storage/session').default;

    const persistConfig = {
        key: 'root',
        storage,
        whitelist: [
            'app',
        ],
    };

    const middleware = applyMiddleware(thunkMiddleware);
    const enhancers = process.env.APP_ENV === 'dev' ? composeEnhancers(middleware) : middleware;

    store = createStore(
        persistReducer(persistConfig, reducers),
        initialState,
        enhancers,
    );

    const persistor = persistStore(store);

    return {store, persistor};
};

export default createStoreData;
