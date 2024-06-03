// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import favoritesReducer from "./favouriteSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor, Provider, PersistGate };
