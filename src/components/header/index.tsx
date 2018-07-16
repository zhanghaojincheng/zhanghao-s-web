import * as React from 'react';
import { Menu, Icon, Dropdown, Affix } from 'antd';
import { AppStore } from '../../App.store';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import './header.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface IProps {
    appStore?: AppStore;
}

@inject('appStore')
@observer
class Header extends React.Component<IProps> {

    public state = {
        current: 'mail'
    }
    constructor(props: IProps) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }
    public handleClick = (e: any) => {
        this.setState({
            current: e.key,
        });
    }
    public onLogout() {
        const { setLogined } = this.props.appStore!;
        setLogined(false);
    }
    public render() {
        const MyMenu = (
            <Menu>
                <Menu.Item>
                    <span onClick={this.onLogout}>
                        退出
                    </span>
                </Menu.Item>
                <Menu.Item>
                    <span>
                        我的
                    </span>
                </Menu.Item>
            </Menu>
        )
        return (
            <Affix>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className="header-wrapper"
                >
                    <Menu.Item key="home">
                        <Icon type="home" />首页
                    </Menu.Item>
                    <Menu.Item key="overview">
                        <Icon type="calendar" />最新文章
                    </Menu.Item>
                    <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />分类</span>}>
                        <MenuItemGroup title="前端">
                            <Menu.Item key="vue">
                                <Link to={`/home/vue`}>
                                    Vue
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="react">
                                <Link to={`/home/react`}>
                                    React
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="angular">
                                <Link to={`/home/angular`}>
                                    Angular
                                </Link>
                            </Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="后端">
                            <Menu.Item key="node">node</Menu.Item>
                            <Menu.Item key="mongodb">MongoDB</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Dropdown overlay={MyMenu} placement="bottomRight" className="my-right">
                        <a className="ant-dropdown-link" href="#">
                            我的
                        </a>
                    </Dropdown>
                </Menu>
            </Affix>
        );
    }
}

export default Header;