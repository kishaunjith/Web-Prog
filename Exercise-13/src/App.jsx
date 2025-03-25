import React from "react";
import HelloReact from "./components/HelloReact";
import FruitList from "./components/FruitList";
import StyledMessage from "./components/StyledMessage";
import SumOfSquares from "./components/SumOfSquares";
import Greeting from "./components/Greeting";
import CurrentDay from "./components/CurrentDay";
import PrimeChecker from "./components/PrimeChecker";
import TemperatureConverter from "./components/TemperatureConverter";
import ReverseString from "./components/ReverseString";
import RandomNumber from "./components/RandomNumber";
import LeapYearChecker from "./components/LeapYearChecker";
import UserGreeting from "./components/UserGreeting";

const App = () => {
  return (
    <div>
      <HelloReact />
      <FruitList />
      <StyledMessage />
      <SumOfSquares num1={3} num2={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeChecker number={7} />
      <TemperatureConverter />
      <ReverseString text="MALAYALAM" />
      <RandomNumber />
      <LeapYearChecker year={2024} />
      <UserGreeting firstName="KISHAUNJITH" lastName="S" />
    </div>
  );
};

export default App;
