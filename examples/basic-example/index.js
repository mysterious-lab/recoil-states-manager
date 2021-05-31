import React, { useState } from 'react';
import StatesManager from '../atoms';

const Counter = () => {
  const counter = StatesManager.useValue('counter');

  return <p>Value of atom : {counter}</p>;
};

const ResetAction = () => {
  const setCounter = StatesManager.useUpdater('counter');
  const handleClick = () => setCounter(0);

  return <button onClick={handleClick}>Reset</button>;
};

const IncrementAction = () => {
  const [counter, setCounter] = StatesManager.use('counter');
  const handleClick = () => setCounter(counter + 1);

  return <button onClick={handleClick}>Increment</button>;
};

const Observer = () => {
  const counter = StatesManager.useValue('counter');
  const [previousValue, setPreviousValue] = useState(null);
  const [currentValue, setCurrentValue] = useState(counter);

  StatesManager.watch('counter', (previous, next) => {
    setPreviousValue(previous);
    setCurrentValue(next);
  });

  return (
    <p>
      Previous : {previousValue}
      <br />
      Current : {currentValue}
    </p>
  );
};

const BasicExample = () => (
  <>
    <Counter />
    <Observer />
    <p>
      <IncrementAction />
      <ResetAction />
    </p>
  </>
);

export default BasicExample;
