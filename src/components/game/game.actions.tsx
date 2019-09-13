import { ActionCreator, Action, AnyAction } from 'redux';

import ACTION_TYPES from './game.action-types';

const switchPlayer: ActionCreator<Action> = () => ({ type: ACTION_TYPES.SWITCH_PLAYER });
const log: ActionCreator<AnyAction> = log => ({ type: ACTION_TYPES.LOGGER, payload: log });
const setWinner: ActionCreator<AnyAction> = winner => ({ type: ACTION_TYPES.SET_WINNER, payload: winner });

export default {
  switchPlayer,
  log,
  setWinner,
}
