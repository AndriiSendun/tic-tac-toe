import { ActionCreator, Action, AnyAction } from 'redux';

import ACTION_TYPES from './game.action-types';

const switchPlayer: ActionCreator<Action> = () => ({ type: ACTION_TYPES.SWITCH_PLAYER });
const log: ActionCreator<AnyAction> = log => ({ type: ACTION_TYPES.LOGGER, payload: log });
const setWinner: ActionCreator<AnyAction> = winner => ({ type: ACTION_TYPES.SET_WINNER, payload: winner });
const jumpToHistoryPoint: ActionCreator<AnyAction> = point => ({ type: ACTION_TYPES.JUMP_TO_POINT, payload: point});

export default {
  switchPlayer,
  log,
  setWinner,
  jumpToHistoryPoint,
}
