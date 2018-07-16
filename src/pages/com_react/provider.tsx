import * as React from 'react';
import { Provider } from 'mobx-react';
import ComReact from './com_react';
import reactStore from './react.store';

const ComReactProvider = () => {
    return (
        <Provider>
            <ComReact reactStore={reactStore} />
        </Provider>
    )
}

export default ComReactProvider;