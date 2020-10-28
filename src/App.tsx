import React from 'react';

import './App.css';
import { CreateContext } from './components/CreateContext';
import { UseContext } from './components/UseContext';

export default class App extends React.PureComponent {
  public render() {
    return (
      <div>
        <CreateContext>
          <UseContext />
          <UseContext />
          <UseContext />
          <UseContext />
          <UseContext />
        </CreateContext>
      </div>
    );
  }
}
