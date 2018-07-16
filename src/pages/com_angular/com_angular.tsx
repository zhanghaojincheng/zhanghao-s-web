import * as React from 'react';
import { AngularStore } from './angular.store';
import { observer, inject } from 'mobx-react';

import './angular.css';

interface IProps {
    angularStore?: AngularStore;
}

@inject('angularStore')
@observer
class ComAngular extends React.Component<IProps> {
    public angularStore: AngularStore;

    constructor(props: IProps) {
        super(props);
        this.angularStore = props.angularStore!;
    }
    
    public render() {
        return (
            <div className="angular-wrapper">
                <p>angular</p>
                <p>angular</p>
                <p>angular</p>
                <p>angular</p>
                <p>angular</p>
                <p>angular</p>
            </div>
        )
    }
}

export default ComAngular;