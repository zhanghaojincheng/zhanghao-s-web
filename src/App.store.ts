import { observable, action } from 'mobx';
import { message } from 'antd';

export class AppStore {
    @observable public logined: boolean = true;

    @observable public loading: boolean = false;

    @observable public selectedKeys: string[] = [];

    public login = (loginBody: ILoginBody) => {
        if (loginBody.userName === '1' && loginBody.password === '1')  {
            // console.log('ok');
            this.setLogined(true);
        } else {
            message.error('密码错误', 1);
        }
    };

    @action
    public setLoading = (isLoad: boolean) => {
        this.loading = isLoad;
    };

    @action
    public setLogined = (isLogined: boolean) => {
        this.logined = isLogined;
    };

    @action
    public setSelectedKeys = (selectedKeys: string[]) => {
        this.selectedKeys = selectedKeys;
    }
}

export default new AppStore();