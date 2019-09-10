import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import actions from '../game.actions';

// MODELS
import { AppState } from '../../../App.model';

// STYLES
import './square.css';

interface OwnProps {
  number: number
}

const Square: React.FC<OwnProps> = (props: OwnProps): JSX.Element => {
  const squareRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string | null>(null);

  const player: string = useSelector((state: AppState) => state.gameReducer.player);
  const dispatch: Dispatch = useDispatch();

  return (
    <div
      className="square"
      ref={squareRef}
      onClick={() => {
        if (!content) {
          setContent(player)
          dispatch(actions.log({ position: props.number, value: player }));
          dispatch(actions.switchPlayer());
        }
      }}
    >
      {content}
    </div>
  )
}

export default Square;
