import * as React from 'react';
import { AppStore } from '../App.store';

interface IProps {
    appStore?: AppStore;
}

class BasicLayout extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        return (
            <div>
                123
            </div>
        )
    }
}

export default BasicLayout;