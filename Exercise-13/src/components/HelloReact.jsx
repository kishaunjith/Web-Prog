import React from "react";

const HelloReact = () => {
  const message = "Hello, React!";
  return React.createElement("h1", null, message);
};

export default HelloReact;
