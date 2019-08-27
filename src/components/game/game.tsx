import React from 'react';

// COMPONENTS
import Row from '../row/row';
import GameInfo from '../game-info/game-info';

// STYLE
import './game.css';

const Game: React.FC = (): JSX.Element => {
  return (
    <div className="game">
      <div className="game__field">
        <Row start={1} end={3} />
        <Row start={4} end={6} />
        <Row start={7} end={9} />
      </div>
      <GameInfo />
    </div>
  )
}

export default Game;
