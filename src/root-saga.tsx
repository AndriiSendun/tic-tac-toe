import { all } from 'redux-saga/effects';

// SAGAS
import { gameWatcher } from './components/game';

export function* rootSaga() {
  yield all([
    gameWatcher(),
  ]);
};
