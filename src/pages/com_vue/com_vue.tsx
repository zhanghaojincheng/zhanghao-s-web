import * as React from 'react';
import { AppStore } from '../../App.store';
import { VueStore } from './vue.store';
import { observer, inject } from 'mobx-react';

import './vue.css';

interface IProps {
    appStore?: AppStore;
    vueStore?: VueStore;
}

@inject('appStore', 'vueStore')
@observer
class ComVue extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    
    public render() {
        return (
            <div className="vue-wrapper">
                <p>vue</p>
                <p>vue</p>
                <p>vue</p>
                <p>vue</p>
                <p>vue</p>
            </div>
        )
    }
} 

export default ComVue;