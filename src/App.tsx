import React from 'react';

// COMPONENTS
import { Game } from './components/game';

// STYLE
import './App.css';
import { TestHooks } from './components/test-hooks';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Game />
      <TestHooks />
    </div>
  );
}

export default App;
