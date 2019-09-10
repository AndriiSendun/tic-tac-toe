import React from 'react';

// MODELS
import OwnProps from './log-item.models';

const LogItem: React.FC<OwnProps> = (props): JSX.Element => {
  const { logNumber } = props;

  return (
    <li>
      <button className="log-item">
        Go to {logNumber}
      </button>
    </li>
  )
}

export default LogItem;
