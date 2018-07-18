import { observable, action } from 'mobx';

export class TextStore {
    @observable public aa: boolean = false;
    @observable public bb: boolean = false;

    @action
    public setAa = (isLoading: boolean) => {
        this.aa = isLoading;
    };

    @action
    public setBb = (isLogined: boolean) => {
        this.bb = isLogined;
    }
}

export default new TextStore();