import * as React from 'react';
import { Provider } from 'mobx-react';
import ComVue from './com_vue';
import vueStore from './vue.store';

const ComVueProvider = () => {
    return (
        <Provider>
            <ComVue vueStore={vueStore} />
        </Provider>
    )
}

export default ComVueProvider;
