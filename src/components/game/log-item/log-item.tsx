import React from 'react';

// MODELS
import OwnProps from './log-item.models';

const LogItem: React.FC<OwnProps> = (props): JSX.Element => {
  const { log } = props;

  return (
    <div className="log-item">
      <span>Go to {log}</span>
    </div>
  )
}

export default LogItem;
