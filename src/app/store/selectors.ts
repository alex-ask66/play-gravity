import { createSelector } from "@reduxjs/toolkit";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { AppState } from "./rootReducer";

export const selectColorItems = (state: AppState) =>
  state.firestore.data?.resources?.colors?.items;

// @ts-ignore
export const selectAuth = (state: AppState) => state.firebase.auth;

export const selectIsSignedIn = createSelector(
  selectAuth,
  (auth) => isLoaded(auth) && !isEmpty(auth)
);
