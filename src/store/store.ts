import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cryptoAPI } from "api/coinAPI";
import briefcaseReducer from "store/reducers/briefcaseReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import currentBriefcaseReducer from "./reducers/currentBriefcaseReducer";

const rootReducer = combineReducers({
  [cryptoAPI.reducerPath]: cryptoAPI.reducer,
  briefcase: briefcaseReducer,
  currentBriefcase: currentBriefcaseReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(cryptoAPI.middleware),
});

export const setupStore = () => {
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const persistor = persistStore(store);
export default store;
