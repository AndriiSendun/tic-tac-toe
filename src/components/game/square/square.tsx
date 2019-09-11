import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, Action, AnyAction } from 'redux';

import actions from '../game.actions';
import { calculateWinner } from './../game.helpers';

// MODELS
import { AppState } from '../../../App.model';
import { Log } from '../game.models';

// STYLES
import './square.css';

interface OwnProps {
  number: number
}

const Square: React.FC<OwnProps> = (props: OwnProps): JSX.Element => {
  const squareRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string | null>(null);
  const [winner, setWinner] = useState<string | null>(null);

  const player: string = useSelector((state: AppState) => state.gameReducer.player);
  const logs: Log[] = useSelector((state: AppState) => state.gameReducer.logs)
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
      const result = calculateWinner(logs);
      setWinner(result);
  }, [player]);

  return (
    <div
      className="square"
      role="button"
      ref={squareRef}
      onClick={() => {
        if (!content) {
          setContent(player)
          dispatch<AnyAction>(actions.log({ position: props.number, value: player }));
          dispatch<Action>(actions.switchPlayer());
        }
      }}
    >
      {content}
    </div>
  )
}

export default Square;
