import { AsyncStorage } from 'react-native';
import {createStore, compose, applyMiddleware} from 'redux';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const migrations = {
    0: (state) => {
        return {
            ...state,
            settings: { ...state.settings, night: false }
        };
    }
}

const persisConfig = {
    key: 'root',
    storage: AsyncStorage,
    migrate: createMigrate(migrations, {debug: false})
};

const persistedReducer = persistReducer(persisConfig, reducers);

export const store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);