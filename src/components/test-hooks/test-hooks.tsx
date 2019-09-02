import React, { useState, useCallback, useMemo } from 'react';

const TestHooks: React.FC = (): JSX.Element => {
  const [counter, seCounter] = useState(0);


  const memoIncrement = useCallback(() => {
    seCounter(counter => counter + 1);
  }, [counter]);


  return (
    <div className="test-hooks">
      <button
        onClick={() => memoIncrement()}
      >
        click Me!
      </button>
    </div>
  )
}

export default TestHooks;
