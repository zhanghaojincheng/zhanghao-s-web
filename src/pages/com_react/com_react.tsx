import * as React from 'react';
import { AppStore } from '../../App.store';
import { ReactStore } from './react.store';
import { observer, inject } from 'mobx-react';

import './react.css';

interface IProps {
    appStore?: AppStore;
    reactStore?: ReactStore;
}

@inject('appStore', 'reactStore')
@observer
class ComReact extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    public render() {
        return (
            <div className="react-wrapper">
                <p>react</p>
                <p>react</p>
                <p>react</p>
                <p>react</p>
                <p>react</p>
            </div>
        )
    }
} 

export default ComReact;