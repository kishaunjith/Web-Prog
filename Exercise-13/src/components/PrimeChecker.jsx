import React from "react";

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const PrimeChecker = ({ number }) => {
  return <p>{number} is {isPrime(number) ? "a prime number" : "not a prime number"}.</p>;
};

export default PrimeChecker;
