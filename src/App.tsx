import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// COMPONENTS
import { Game } from './components/game';
// import { TestHooks } from './components/test-hooks';

// STYLE
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
