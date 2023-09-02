import { createReducer } from "@reduxjs/toolkit";
import { EntitiesState } from "../../@types";
import { fetchEntity } from "../actions";

const initialState: EntitiesState = {
  loading: false,
  entities: {},
};

export const entitiesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchEntity.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchEntity.fulfilled, (state, action ) => {
    state.loading = false;
    state.entities[action.payload.id] = action.payload
  });
  builder.addCase(fetchEntity.rejected, (state) => {
    state.loading = false;
  });
});




