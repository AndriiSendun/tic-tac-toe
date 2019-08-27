import React from 'react';

import './square.css';

interface OwnProps {
  number: number
}

const Square: React.FC<OwnProps> = (props: OwnProps): JSX.Element => {
  return (
    <div className="square">

    </div>
  )
}

export default Square;
