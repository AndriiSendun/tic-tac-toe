import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../game.actions';

// MODELS
import OwnProps from './log-item.models';
import { Dispatch } from 'redux';

const LogItem: React.FC<OwnProps> = (props): JSX.Element => {
  const { logNumber } = props;

  const dispatch: Dispatch = useDispatch();

  return (
    <li>
      <button
        className="log-item"
        onClick={() => {
          dispatch(actions.jumpToHistoryPoint(logNumber));
        }}
      >
        Go to #{logNumber}
      </button>
    </li>
  )
}

export default LogItem;
