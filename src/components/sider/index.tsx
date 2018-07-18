import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { AppStore } from '../../App.store';

interface IProps {
  appStore?: AppStore;
}

const { SubMenu } = Menu;

@inject('appStore')
@observer
class Sider extends React.Component {
    public appStore!: AppStore;

    public state = {
      mode: 'inline',
      theme: 'light',
    }

    constructor(props: IProps) {
      super(props);
      this.appStore = props.appStore!;
      this.onSelectMenus = this.onSelectMenus.bind(this);
    }
    
    public onSelectMenus = ({selectedKeys}: any) => {
      this.appStore.setSelectedKeys(selectedKeys);
    }

    public render() {
      // console.log(this.props);
      return (
        <Menu
          style={{ width: '100%', height: '100%' }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode as any}
          theme={this.state.theme as any}
          onSelect={this.onSelectMenus}
        >
          <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>前端</span></span>}>
            <Menu.Item key="vue">
              <Link to="/home/vue">Vue</Link>
            </Menu.Item>
            <Menu.Item key="react">
              <Link to="/home/react">React</Link>
            </Menu.Item>
            <Menu.Item key="angular">
              <Link to="/home/angular">Angular</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="setting" /><span>后端</span></span>}>
            <Menu.Item key="node">
              node
            </Menu.Item>
            <Menu.Item key="mongo">
              MongoDB
            </Menu.Item>
          </SubMenu>
        </Menu>
      );
    }
}

export default Sider;