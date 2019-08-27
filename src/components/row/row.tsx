import React from 'react';

// OPTIONS
import { createRowCounter } from './options';

// MODELS
import OwnProps from './row.models';

// COMPONENTS
import Square from '../square/square';

const Row: React.FC<OwnProps> = (props): JSX.Element => {
  const { start, end } = props;
  const rowCounter = createRowCounter(start, end);

  return (
    <div className="row">
      {rowCounter.map(field => <Square key={field} number={field}/>)}
    </div>
  )
};

export default Row;
