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
        console.log("tokenid:",tokenId)
        this.setState({token:tokenId,loginAccount:accountId});
    }
    //修改失败
    setAccount(accountId){
        console.log("accountId:",accountId)
        this.setState({loginAccount:accountId});
    }
    render(){
        if(this.state.token === "pass"){
            return (
                <App loginAccount={this.state.loginAccount} store={Singleton.getStoreInstance()}/>
                // <Redirect exact to='/user' />
            );
        }
        return (
            <Personal token={this.loginCheck} setAccount={this.setAccount}/>
        );
    }
}
export default Main;   