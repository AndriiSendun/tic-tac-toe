import React from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { LogsList } from './../logs-list';

// MODELS
import { AppState } from '../../../App.model';

const GameInfo: React.FC = (): JSX.Element => {
  const player: string = useSelector((state: AppState) => state.gameReducer.player);

  return (
    <div className="game-info">
      <span>Next player: {player}</span>
      <LogsList />
    </div>
  )
};

export default GameInfo;
