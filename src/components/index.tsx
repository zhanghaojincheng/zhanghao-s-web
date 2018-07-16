import * as React from 'react';
import { AppStore } from '../App.store';
import Header from './header';
import Content from './content';
import Footer from './footer';

interface IProps {
    appStore?: AppStore;
}

class BasicLayout extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        // console.log(props)
    }
    public render() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default BasicLayout;