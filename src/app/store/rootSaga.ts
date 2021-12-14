import { all } from 'redux-saga/effects';

const allSagas: any = {};

export default function* rootSaga() {
  yield all(Object.values(allSagas).map((saga: any) => saga()));
}
