/**************************************************************************
 *  This file is an autoloader used to build collection with all          *
 *  exported atoms/selectors in every files present in same directory.    *
 **************************************************************************/

import RecoilStatesManager from '../../src';

const StatesManager = new RecoilStatesManager();

// Require all file of directory
const req = require.context('./', true, /^(.*\.js)$/u);

// Loop on every file exports and extract only atoms/selectors
req.keys().forEach((key) => {
  const fileExports = req(key);
  for (const name in fileExports) {
    if (StatesManager.validate(fileExports[name])) {
      StatesManager.add(fileExports[name]);
    }
  }
});

export default StatesManager;
