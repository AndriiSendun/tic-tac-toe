import { LINES } from './constants';

// MODELS
import { Log } from './game.models';

const convertLogsToSingleObject = (logs: Log): Log => Object.values(logs).reduce((acc, cur, ) => ({ ...acc, ...cur }), {});

const calculateWinner = (logs: Log) => {
  const convertedLogs: Log = convertLogsToSingleObject(logs);

  for (let i = 0; i < LINES.length; i++) {
    const [a, b, c] = LINES[i];
    if (convertedLogs[a] && convertedLogs[a] === convertedLogs[b] && convertedLogs[a] === convertedLogs[c]) {
      return convertedLogs[a];
    }
  }

  return null;
}

 const cutObject = (logs: Log, limit: number) => Object.values(logs).filter((log, index) => index < limit);

export {
  calculateWinner,
  cutObject,
}
