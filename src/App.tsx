import React from 'react';

// COMPONENTS
import { Game } from './components/game';

// STYLE
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
