import * as React from 'react';
import './App.css';

import Login from './components/login/loginContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
