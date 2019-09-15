import React from 'react';

import { calculateWinner } from './game.helpers';
import gameReducer from './game.reducer';
import ACTION_TYPES from './game.action-types';

test('calculate winner', () => {
  const winLogs = {
    1: 'O',
    2: 'X',
    4: 'X',
    5: 'X',
    6: 'O',
    7: 'O',
    8: 'X',
  }

  const noWinLogs = {
    1: 'X',
    5: 'O',
    8: 'X',
    9: 'O',
  }

  expect(calculateWinner(winLogs)).toBe('X');
  expect(calculateWinner(noWinLogs)).toBe(null);
});

describe('game reducer', () => {
  const initState =  {
    player: 'X',
    logs: {},
    winner: null,
    pointToJump: null,
  }

  it('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(initState);
  });

  it('should handle SWITCH_PLAYER', () => {

    const switchAction = {
      type: ACTION_TYPES.SWITCH_PLAYER,
      payload: 'X',
    };

    const newState = {
      player: 'O',
      logs: [],
      winner: null,
    }

    expect(gameReducer(initState, switchAction)).toEqual(newState);
  });

  it('should SAVE_LOG', () => {
    const saveLogAction = {
      type: ACTION_TYPES.SAVE_LOG,
      payload: { 0: 'X' }
    }

    const newState = {
      player: 'X',
      logs: { 0: 'X' },
      winner: null,
    }

    expect(gameReducer(initState, saveLogAction)).toEqual(newState);
  });

  it('should SET_WINNER', () => {
    const setWinnerAction = {
      type: ACTION_TYPES.SET_WINNER,
      payload: 'X',
    }

    const newState = {
      player: 'X',
      logs: {},
      winner: 'X',
    }

    expect(gameReducer(initState, setWinnerAction)).toEqual(newState);
  });
})
