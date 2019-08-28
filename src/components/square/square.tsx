import React from 'react';

import './square.css';

interface OwnProps {
  number: number
}

const Square: React.FC<OwnProps> = (props: OwnProps): JSX.Element => {
  return (
    <div
      className="square"
      onClick={() => console.log(props.number)}
    >
      
    </div>
  )
}

export default Square;
