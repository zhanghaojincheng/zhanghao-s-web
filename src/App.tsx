import * as React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../src/pages/login';
class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;