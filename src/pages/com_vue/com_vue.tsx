import * as React from 'react';
import { AppStore } from '../../App.store';
import { VueStore } from './vue.store';
import { observer, inject } from 'mobx-react';
import Level from '../../components/com_level';

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
            <Level />
        )
    }
} 

export default ComVue;