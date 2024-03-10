// SumComponent.js
import React, { useState } from 'react';

const SumComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    setSum(num1 + num2);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseInt(e.target.value, 10))}
        data-testid="num1-input"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseInt(e.target.value, 10))}
        data-testid="num2-input"
      />
      <button onClick={handleSum} data-testid="calculate-button">
        Calculate Sum
      </button>
      <p data-testid="sum-text">Sum: {sum}</p>
    </div>
  );
};

export default SumComponent;
