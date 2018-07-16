import * as React from 'react';
import { AppStore } from '../../App.store';
import { Route, Switch, Redirect } from 'react-router-dom';
import ComVue from '../../pages/com_vue';
import ComReact from '../../pages/com_react';
import ComAngular from '../../pages/com_angular';

import './content.css';

interface IProps {
    appStore: AppStore;
}

class Content extends React.Component {
    constructor(props: IProps) {
        super(props)
    }
    public render() {
        return (
            <div className="content-wrapper">
               <Switch>
                  <Route path="/home/vue" component={ComVue} />  
                  <Route path="/home/react" component={ComReact} />
                  <Route path="/home/angular" component={ComAngular} />
                  <Redirect from="/home" to="/home/vue" />
                </Switch>
            </div>
        )
    }
}

export default Content;