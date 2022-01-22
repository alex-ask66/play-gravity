import { AppState } from "./rootReducer";

export const selectColorItems = (state: AppState) =>
  state.firestore.data?.resources?.colors?.items;
