import * as React from 'react';
import { AppStore } from '../../App.store';
import { Route, Switch, Redirect } from 'react-router-dom';
import ComVue from '../../pages/com_vue';
import ComReact from '../../pages/com_react';
import ComAngular from '../../pages/com_angular';
import ComText from '../com_text';

import { Row, Col } from 'antd';
import Sider from '../sider';

import './content.css';

interface IProps {
    appStore: AppStore;
}

class Content extends React.Component {
    constructor(props: IProps) {
        super(props)
    }
    public render() {
        return (
            <div className="content-wrapper">
                <Row className="row-wrapper">
                    <Col className="sider" span={4}>
                        <Sider />
                    </Col>
                    <Col className="content" span={20}>
                        <Switch>
                            <Route path="/home/vue" component={ComVue} />  
                            <Route path="/home/react" component={ComReact} />
                            <Route path="/home/angular" component={ComAngular} />
                            <Route path="/home/text/:user" component={ComText} />
                            <Redirect from="/home" to="/home/vue" />
                        </Switch>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Content;