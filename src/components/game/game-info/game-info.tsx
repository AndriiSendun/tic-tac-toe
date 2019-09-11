import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { calculateWinner } from '../game.helpers';

// COMPONENTS
import { LogsList } from './../logs-list';

// MODELS
import { AppState } from '../../../App.model';
import { Log } from '../game.models';

const GameInfo: React.FC = (): JSX.Element => {
  const [winner, setWinner] = useState<string | null>(null);

  const player: string = useSelector((state: AppState) => state.gameReducer.player);
  const logs: Log[] = useSelector((state: AppState) => state.gameReducer.logs);

  useEffect(() => {
    const result = calculateWinner(logs);

    setWinner(result);
  }, [logs]);

  return (
    <div className="game-info">
      <span>{winner ? `The winner is ${winner}` : `Next player ${player}`}</span>
      <LogsList />
    </div>
  )
};

export default GameInfo;
