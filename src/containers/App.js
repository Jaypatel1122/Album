import React from 'react';
import { Provider } from 'react-redux';
import { Albums } from '../components/Albums';

const App = ({ store }) => (
  <Provider store={store}>
    <div>
      <Albums />
    </div>
  </Provider>
);

export default App;
