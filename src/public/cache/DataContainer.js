import {action, observable} from 'mobx'

class DataContainer {
    @observable loginAcc = '';
    @observable createDate = {};
    @observable maxAge = 360;
    @observable data = {};

    @action.bound setLoginAccount(acc){
        this.loginAcc = acc;
    }
    @action.bound setCreateDate(date){
        this.createDate = date;
    }
    @action.bound setMaxAge(maxAge){
        this.maxAge = maxAge;
    }
    @action.bound cleanAll(){
        this.loginAcc = '';
        this.createDate = {};
        this.maxAge = 0;
        this.data = {};
    }

}
const dataContainer = new DataContainer();
export default dataContainer;
