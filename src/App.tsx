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
            {logined ? 
                <Switch>
                  <Route path="/home" component={BasicLayout} />
                  <Redirect from="/" to="/home" />
                </Switch>
              : 
              <Switch>
                <Route exact={true} path="/login" component={Login} />
                <Redirect to="/login" />
              </Switch>
            }
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;