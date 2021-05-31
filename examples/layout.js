import React, { useState, createElement, useEffect } from 'react';
import StatesManager from './atoms';

// eslint-disable-next-line
console.log(StatesManager);

const ExamplesLayout = ({ examples = {} }) => {
  const [selectedExample, setSelectedExample] = useState();

  useEffect(() => {
    document.body.style.margin = 0;
  }, []);

  return (
    <StatesManager.Root>
      <div style={styles.layout}>
        <ul style={styles.sidebar}>
          <li style={styles.sidebarTitle} onClick={() => setSelectedExample(null)}>
            Examples
          </li>
          {Object.keys(examples).map((example) => {
            const style = selectedExample !== example ? styles.sidebarItem : styles.sidebarItemSelected;
            return (
              <li key={example} style={style} onClick={() => setSelectedExample(example)}>
                {example}
              </li>
            );
          })}
        </ul>
        <div style={styles.content}>
          <div style={styles.contentTitle}>Preview</div>
          <div style={styles.example}>
            {selectedExample ? createElement(examples[selectedExample]) : <span>No example selected</span>}
          </div>
        </div>
      </div>
    </StatesManager.Root>
  );
};

export const styles = {
  layout: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  sidebar: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    height: '100vh',
    overflow: 'scroll',
    borderRight: '1px solid #ebebeb',
    display: 'flex',
    flexDirection: 'column',
    width: '20%',
  },
  sidebarItem: {
    padding: '5px 20px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  },
  sidebarTitle: {
    padding: '20px',
    fontWeight: 'bold',
    fontSize: '18px',
    cursor: 'pointer',
  },
  content: {
    padding: '20px',
    height: 'calc(100vh - 40px)',
    overflow: 'scroll',
    flexGrow: '1',
  },
  contentTitle: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '20px',
  },
  example: {
    padding: '10px 20px',
    background: '#ebebeb',
  },
};

styles.sidebarItemSelected = {
  ...styles.sidebarItem,
  background: '#ebebeb',
};

export default ExamplesLayout;
