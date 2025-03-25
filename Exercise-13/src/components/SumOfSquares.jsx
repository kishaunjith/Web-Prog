import React from "react";

const SumOfSquares = ({ num1, num2 }) => {
  const sum = num1 * num1 + num2 * num2;
  return <p>Sum of squares: {sum}</p>;
};

export default SumOfSquares;
