import { GameReducer } from './game.models';

const initialState: GameReducer = {
  player: 'X',
}

export default (state = initialState, action: any): GameReducer => {
  switch (action.type) {
    default:
      return state;
  };
};
