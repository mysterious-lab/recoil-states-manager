# Recoil states manager

## Collection manager for Recoil states

This package helps you to simplify usage of [recoiljs](https://github.com/facebookexperimental/Recoil) (atoms/selectors/hooks/components) by using only one [root object](https://github.com/mysterious-lab/recoil-states-manager/blob/master/src/index.js), which is a simple array contening your states, hooks, and useful methods.

> **⚠ You need to install Recoil package by yourself.**

### Install

**NPM**

```shell
$ npm install recoil @mysterious-lab/recoil-states-manager
```

**YARN**

```shells
$ yarn add recoil @mysterious-lab/recoil-states-manager
```

### API

Manager API is described in [index.d.ts](https://github.com/mysterious-lab/recoil-states-manager/blob/master/index.d.ts) file.

### Usage

You can find some usages in [examples folder](https://github.com/mysterious-lab/recoil-states-manager/tree/master/examples).

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import RecoilStatesManager from '@mysterious-lab/recoil-states-manager';

const StatesManager = new RecoilStatesManager();

// Create usable atom
const counterAtom = StatesManager.atom({
  key: 'counter',
  default: 0,
});

// Add atom to states collection
StatesManager.add(counterAtom);

// This is a shortcut to add new atom
// StatesManager.add({ key: 'counter', default: 0 });

// Component used to display counter value
const Counter = () => {
  const counter = StatesManager.useValue('counter');

  return <p>Value of atom : {counter}</p>;
};

// Component used to reset counter value
const ResetAction = () => {
  const setCounter = StatesManager.useUpdater('counter');

  return <button onClick={() => setCounter(0)}>Reset</button>;
};

// Component used to increment counter value
const IncrementAction = () => {
  const [counter, setCounter] = StatesManager.use('counter');

  return <button onClick={() => setCounter(counter + 1)}>Increment</button>;
};

// Component used to watch counter value changes
const Observer = () => {
  const counter = StatesManager.useValue('counter');
  const [previousValue, setPreviousValue] = React.useState(null);
  const [currentValue, setCurrentValue] = React.useState(counter);

  StatesManager.watch('counter', (previous, next) => {
    setPreviousValue(previous);
    setCurrentValue(next);
  });

  return (
    <p>
      Previous : {previousValue} | Current : {currentValue}
    </p>
  );
};

const App = () => (
  <StatesManager.Root>
    <Counter />
    <Observer />
    <IncrementAction />
    <ResetAction />
  </StatesManager.Root>
);

ReactDOM.render(<App />, document.body);
```

### Development

After clone project :

**With Docker**

```shell
$ make install start
# Display all available commands
$ make help
```

**With NPM**

```shell
# Optional but recommanded
$ nvm use 14

$ npm install
$ npm start
```
