import { LINES } from './constants';

export const calculateWinner = (logs: any) => {
  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i];
    if (logs[a] && logs[a] === logs[b] && logs[a] === logs[c]) {
      return logs[a];
    }
  }
  return null;
}
