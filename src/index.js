import React from 'react';
import { render } from 'react-dom';

import store from './store';
import App from './containers/App';

const renderApp = (rootId = 'root') => {
  const targetEl = document.getElementById(rootId);

  render(<App store={store} />, targetEl);
}

renderApp();