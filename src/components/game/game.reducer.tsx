import { GameReducer } from './game.models';
import ACTION_TYPES from './game.action-types';

const initialState: GameReducer = {
  player: 'X',
}

export default (state = initialState, action: any): GameReducer => {
  switch (action.type) {
    case ACTION_TYPES.SWITCH_PLAYER:
      return {
        ...state,
        player: state.player === 'X' ? 'O' : 'X'
      }
    default:
      return state;
  };
};
