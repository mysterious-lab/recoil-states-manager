import React from 'react';
import { render } from 'react-dom';
import ExamplesLayout from './layout';

const examples = {
  Basic: require('./basic-example').default,
  Bridge: require('./bridge-example').default,
};

render(<ExamplesLayout examples={examples} />, document.body);
