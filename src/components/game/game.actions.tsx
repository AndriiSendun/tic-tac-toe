import { ActionCreator, Action } from 'redux';

import actionTypes from './game.action-types';

const switchPlayer: ActionCreator<Action> = () => ({ type: actionTypes.SWITCH_PLAYER });

export default {
  switchPlayer,
}
