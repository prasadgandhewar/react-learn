import { combineReducers, configureStore } from "@reduxjs/toolkit"; 
import counterReducer from './slices/counterSlice'
import { PersistConfig } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import sessionStorage from "redux-persist/es/storage/session";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";


const rootReducer: any = combineReducers({
    counter: counterReducer
})

const sagaMiddleware: any = createSagaMiddleware<any>();

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage: sessionStorage,
    whitelist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


