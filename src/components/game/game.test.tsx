import React from 'react';

import { calculateWinner } from './game.helpers';
const fulfillBefore = () => console.log('this is happens before test');
const fulfillAfter = () => console.log('this is happens after test');

beforeEach(() => {
  fulfillBefore();
});

afterEach(() => {
  fulfillAfter();
});

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

