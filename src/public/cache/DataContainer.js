import {action, observable} from 'mobx'

export default class DataContainer {
    @observable loginAcc = '';
    @action.bound setLoginAccount(acc){
        this.loginAcc = acc;
    }
}

