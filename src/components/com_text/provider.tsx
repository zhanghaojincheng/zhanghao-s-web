import * as React from 'react';
import { Provider } from 'mobx-react';
import textStore from './text.store';
import ComText from './com_text';

const ComTextProvider = () => {
    return (
        <Provider>
            <ComText textStore={textStore} />
        </Provider>
    )
}

export default ComTextProvider;