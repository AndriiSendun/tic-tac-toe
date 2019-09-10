import { takeEvery, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import ACTION_TYPES from './game.action-types';

function* gameWatcher() {
  yield takeEvery(ACTION_TYPES.LOGGER, gameLogger);
}

function* gameLogger(action: AnyAction): IterableIterator<AnyAction> {
  yield put({ type: ACTION_TYPES.SAVE_LOG, payload: action.payload });
}

export default gameWatcher;
