import React from 'react';
import { render } from 'react-dom';
import StatesManager from '../atoms';
import BasicExample from '../basic-example';
import { styles } from '../layout';

const BridgeExample = () => {
  const { Bridge } = StatesManager;

  const handleClick = () => {
    const subWindow = open('', '', 'width=400,height=500');
    const subWindowDoc = subWindow.document;
    subWindowDoc.title = 'Super linked window';

    window.addEventListener('beforeunload', () => subWindow.close());

    render(
      <Bridge>
        <hr />
        <h2>Play with basic example and see counter value change in all opened windows synchronously</h2>
        <hr />
        <div style={styles.example}>
          <BasicExample />
        </div>
      </Bridge>,
      subWindowDoc.body
    );
  };

  return <button onClick={handleClick}>Open linked subwindow</button>;
};

export default BridgeExample;
