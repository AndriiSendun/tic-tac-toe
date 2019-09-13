import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { calculateWinner } from '../game.helpers';
import actions from '../game.actions';

// COMPONENTS
import { LogsList } from './../logs-list';

// MODELS
import { AppState } from '../../../App.model';
import { Log } from '../game.models';

const GameInfo: React.FC = (): JSX.Element => {
  const dispatch: Dispatch = useDispatch();

  const player: string = useSelector((state: AppState) => state.gameReducer.player);
  const logs: Log[] = useSelector((state: AppState) => state.gameReducer.logs);
  const winner: string | null = useSelector((state: AppState) => state.gameReducer.winner);

  useEffect(() => {
    const result = calculateWinner(logs);

    if (result) {
      dispatch(actions.setWinner(result));
    }
  }, [logs]);

  return (
    <div className="game-info">
      <span>{winner ? `The winner is ${winner}` : `Next player ${player}`}</span>
      <LogsList />
    </div>
  )
};

export default GameInfo;
