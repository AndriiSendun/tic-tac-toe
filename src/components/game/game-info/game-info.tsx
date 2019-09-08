import React from 'react';

// COMPONENTS
import { LogsList } from './../logs-list';

const GameInfo: React.FC = (): JSX.Element => {
  return (
    <div className="game-info">
      <span>Next player: X</span>
      <LogsList />
    </div>
  )
};

export default GameInfo;
