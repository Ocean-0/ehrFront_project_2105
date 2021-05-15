import {action, observable} from 'mobx'

class DataContainer {
    @observable loginAcc = '';
    @action.bound setLoginAccount(acc){
        this.loginAcc = acc;
    }

}
const dataContainer = new DataContainer();
export default dataContainer;
