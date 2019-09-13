import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, Action, AnyAction } from 'redux';

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

  const dispatch: Dispatch = useDispatch();

  const player: string = useSelector((state: AppState) => state.gameReducer.player);
  const winner: string | null = useSelector((state: AppState) => state.gameReducer.winner);

  const squareClasses = classNames(
    'square',
    {'disabled': winner}
  )

  return (
    <div
      className={squareClasses}
      role="button"
      ref={squareRef}
      onClick={() => {
        if (!content) {
          setContent(player)
          dispatch<AnyAction>(actions.log({ [props.number]:player }));
          dispatch<Action>(actions.switchPlayer());
        }
      }}
    >
      {content}
    </div>
  )
}

export default Square;
