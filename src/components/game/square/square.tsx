import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, Action, AnyAction } from 'redux';

import actions from '../game.actions';

// MODELS
import { AppState } from '../../../App.model';
import { Log } from '../game.models';

// STYLES
import './square.css';

interface OwnProps {
  number: number
}

const Square: React.FC<OwnProps> = (props: OwnProps): JSX.Element => {
  const [content, setContent] = useState<string | null>(null);

  const dispatch: Dispatch = useDispatch();

  const point: number = useSelector((state: AppState) => state.gameReducer.pointToJump);
  const logs: Log = useSelector((state: AppState) => state.gameReducer.logs);

  const cutObject = (history: any, limit: any) => {
    let newHistory: any = {};

    for( let key in history) {
      if(history.hasOwnProperty(key)) {
        if(parseInt(key) < limit) {
          newHistory = {...newHistory, ...history[key]}
        }
      }
    }

    return newHistory;
  }

  useEffect(() => {
    if(point) {
      const croppedLogs = cutObject(logs, point);
      const newContent: string | null = croppedLogs[props.number] || null;

      setContent(newContent);
    }
  }, [point])

  const player: string = useSelector((state: AppState) => state.gameReducer.player);
  const winner: string | null = useSelector((state: AppState) => state.gameReducer.winner);

  const squareClasses = classNames(
    'square',
    {'disabled': winner}
  )

  const generateLog = () => {
    const keys = Object.keys(logs);
    const orderNumber = keys && keys.length;

    return ({
      [orderNumber]: {
        [props.number]:player
      }
    });
  }

  return (
    <div
      className={squareClasses}
      role="button"
      onClick={() => {
        if (!content) {
          const log = generateLog();
          setContent(player)
          dispatch<AnyAction>(actions.log(log));
          dispatch<Action>(actions.switchPlayer());
        }
      }}
    >
      {content}
    </div>
  )
}

export default Square;
