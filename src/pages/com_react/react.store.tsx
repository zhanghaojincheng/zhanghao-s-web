import { observable, action } from 'mobx';

export class ReactStore {
    @observable public loading: boolean = false;
    @action
    public setLoading = (isLoading: boolean) => {
        this.loading = isLoading;
    }
}

export default new ReactStore();