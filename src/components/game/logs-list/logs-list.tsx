import React from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import { LogItem } from '../log-item';

// MODELS
import { AppState } from '../../../App.model';
import { Log } from '../game.models';

const LogsList: React.FC = (): JSX.Element => {
  const logList: Log[] = useSelector((state: AppState) => state.gameReducer.logs);

  return(
    <ul  className="game-info">
      {logList.map((log, index) => <LogItem key={log.position} logNumber={index + 1} />)}
    </ul>
  )
};

export default LogsList;
