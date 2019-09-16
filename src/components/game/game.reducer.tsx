import { GameReducer } from './game.models';
import ACTION_TYPES from './game.action-types';

import { cutObject } from './game.helpers';

// MODELS
import { Log } from './game.models';

const initialState: GameReducer = {
  player: 'X',
  logs: {},
  winner: null,
  pointToJump: null,
}

export default (state = initialState, action: any): GameReducer => {
  switch (action.type) {
    case ACTION_TYPES.SWITCH_PLAYER:
      return {
        ...state,
        player: state.player === 'X' ? 'O' : 'X'
      };
    case ACTION_TYPES.SAVE_LOG:
        const croppedLogs: Log | null = state.pointToJump ? cutObject(state.logs, state.pointToJump) : null;
        const newLogs: Log = { ...(state.pointToJump ? croppedLogs : state.logs) };
        const logsLength: number = Object.values(newLogs).length;

      return {
        ...state,
        logs: { ...newLogs, [logsLength]: action.payload },
        pointToJump: null,
      };
    case ACTION_TYPES.SET_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    case ACTION_TYPES.JUMP_TO_POINT:
      return {
        ...state,
        pointToJump: action.payload,
      };
    default:
      return state;
  };
};
