import * as React from 'react';
import { Provider } from 'mobx-react';
import ComAngular from './com_angular';
import angularStore from './angular.store';

const AngularProvider = () => {
    return (
        <Provider>
            <ComAngular angularStore={angularStore} />
        </Provider>
    )
}

export default AngularProvider;