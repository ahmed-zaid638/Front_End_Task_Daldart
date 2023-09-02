import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {entitiesReducer} from "./Reducers/entitiesReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
