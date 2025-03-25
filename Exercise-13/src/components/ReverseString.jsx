import React from "react";

const ReverseString = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();
  return <p>Reversed: {reversed} | {isPalindrome ? "Palindrome" : "Not a palindrome"}</p>;
};

export default ReverseString;
