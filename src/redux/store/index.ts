import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './users/userReducer';

const rootReducer = combineReducers({
  reducer: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export function setupStore(preloadedState?: PreloadedState<RootReducer>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export const persistor = persistStore(store);
export default store;
