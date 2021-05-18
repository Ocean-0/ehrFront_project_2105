import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Singleton  from '../public/cache/Singleton'
import App from '../App';
import Personal from '../container/personal/Personal'


class Main extends Component{
    constructor(){
        super();
        this.state = {
            token: "",
            loginAccount: ""
        }
        this.loginCheck = this.loginCheck.bind(this);
    }
    loginCheck(tokenId,accountId){
        this.setState({token:tokenId,loginAccount:accountId});
    }
    //修改失败
    setAccount(accountId){
        this.setState({loginAccount:accountId});
    }
    render(){
        console.log('main state:',this.state)
        if(this.state.token === "pass"){
            return (
                //test 0515 16 37
                // <App loginAccount={this.state.loginAccount} store={Singleton.getStoreInstance()}/>
                <App loginAccount={this.state.loginAccount} />
                // <Redirect exact to='/user' />
            );
        }
        return (
            <Personal token={this.loginCheck} setAccount={this.setAccount}/>
        );
    }
}
export default Main;   