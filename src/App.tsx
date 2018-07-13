import * as React from 'react';
import appStore from './App.store';
import { observer, Provider } from 'mobx-react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../src/pages/login';
import BasicLayout from '../src/components';

@observer
class App extends React.Component {
  public render() {
    const { logined } = appStore;
    return (
      <Provider appStore={appStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" render={ function (props) {
               logined ? <Redirect to="/home" /> : <Login />
              } 
            } 
            />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/home" component={ BasicLayout } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;