import * as React from 'react';
import './index.css';
import { observer, inject } from 'mobx-react';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { AppStore } from '../../App.store';

interface IProps extends FormComponentProps {
    appStore?: AppStore;
    logined?: boolean;
};

const FormItem = Form.Item;

@inject('appStore')
@observer
class Login extends React.Component<IProps> {
    public appStore: AppStore;
    constructor(props: IProps) {
        super(props);
        this.appStore = props.appStore!;
        console.log(props)
    };
    public handleSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
        const { login } = this.appStore;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return
            };
            login(values);
        });
    };
    public render() {
        const { getFieldDecorator } = this.props.form;
        const { logined } = this.appStore;
        return (
            <div className="login-wrapper">
                <div className="form-wrapper">
                    <div className="form-title">
                        登录
                    </div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                    <div>
                        登录成功？ {logined ? '成功' : '失败'}
                    </div>
                </div>
            </div>
        );
    }
}

export default Form.create()(Login);