import { configureStore /*, ThunkAction, Action*/ } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

sagaMiddleware.run(rootSaga);

export default store;
